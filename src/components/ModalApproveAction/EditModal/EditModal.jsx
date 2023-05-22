import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Loader from 'shared/components/Loader';
import { Error, FormButton } from 'components/AddPetForm/AddPetForm.styles';
import { reverseISODate } from 'utils/reverseISODate';
import {
  EditboxLeft,
  EditboxRight,
  EditBox,
  EditContainer,
  EditContent,
  EditField,
  EditLabel,
  EditText,
  EditTitle,
  EditWrapper,
  ImageCategoryEdit,
} from './EditModal.styles';
import Button from 'shared/components/Button';
import Icon from 'shared/components/Icon';
// import ImageUploader from 'shared/components/ImageUploader';
import validationSchemaEdit from './validationSchemaEdit';
import { PetImage } from '../NoticeModal/NoticeModal.styles';
import { editNotice } from 'utils/ApiNotices';
import { convertToISODate } from 'utils/convertToISODate';
import { toast } from 'react-toastify';

const EditModal = ({ notice, close, approve, handleEditClose }) => {
  const [isFormDirty, setIsFormDirty] = useState(false);
  const { t } = useTranslation();

  const initialValues = {
    category: notice.category,
    title: notice.title,
    name: notice.name,
    birthday: reverseISODate(notice.birthday),
    breed: notice.breed,
    photo: notice.photoUrl,
    comments: notice.comments,
    sex: notice.sex,
    location: notice.location,
    price: notice.price,
    promo: 0,
  };

  const handleSubmit = async (values, { resetForm }) => {
    const changedFields = {};

    Object.keys(values).forEach(key => {
      const initialValue = initialValues[key];
      const currentValue = values[key];

      if (initialValue !== currentValue) {
        changedFields[key] = currentValue;
      }
    });

    if (Object.keys(changedFields).length === 0) {
      return;
    }

    const newPet = Object.keys(changedFields).reduce((acc, key) => {
      if (key === 'category' && changedFields[key] === 'my-pet') {
        return acc;
      }

      if (key === 'birthday') {
        acc[key] = convertToISODate(changedFields[key]);
      } else {
        acc[key] = changedFields[key];
      }

      return acc;
    }, {});

    try {
      await editNotice(notice._id, newPet);
      toast.success(t('alert_Pet_edited_successfully'));
      handleEditClose(notice);
      close();
    } catch (error) {
      toast.error(`{t('alert_Failed_to_edit_pet')}:${error}`);
    }
  };

  const handleFormChange = () => {
    setIsFormDirty(true);
  };

  return (
    <EditContainer>
      <EditContent>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchemaEdit(notice.category)}
        >
          {({
            isSubmitting,
            handleChange,
            handleBlur,
            values,
            errors,
            touched,
          }) => (
            <Form onChange={handleFormChange}>
              {isSubmitting ? (
                <Loader />
              ) : (
                <EditWrapper>
                  <EditboxLeft>
                    <EditTitle>{t('Edit_your_pet')}</EditTitle>
                    <div style={{ position: 'relative', width: '100%' }}>
                      <PetImage
                        src={notice.photoUrl}
                        alt={notice.title}
                        style={{ margin: 0 }}
                      />
                      <ImageCategoryEdit>
                        {notice.category
                          .replace('for-free', 'for free')
                          .replace(/-/g, '/')}
                      </ImageCategoryEdit>
                    </div>
                    <EditLabel htmlFor="promo">
                      {values.promo ? (
                        <p>{t('Raise_your_ad_only_for')} {values.promo}$!</p>
                      ) : (
                        <>
                          <p>{t('Add_payment_to_raise')}!</p>
                          <p>{t('Just_scroll_your_value')}:</p>
                        </>
                      )}
                      <EditField
                        type="range"
                        id="promo"
                        name="promo"
                        min="0"
                        max="30"
                        placeholder={t('Raise_your_ad')}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.promo}
                        errors={touched.promo && errors.promo}
                      />
                      <Error name="promo" component="p" />
                    </EditLabel>
                  </EditboxLeft>
                  <EditboxRight>
                    <EditLabel htmlFor="title">
                    {t('Title_of_ad')}:
                      <EditField
                        name="title"
                        placeholder={t('Type_title')}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title}
                        errors={touched.title && errors.title}
                      />
                      <Error name="title" component="p" />
                    </EditLabel>
                    <EditLabel htmlFor="name">
                    {t('Name_of_pet')}:
                      <EditField
                        name="name"
                        placeholder={t('Type_name_of_pet')}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        errors={touched.name && errors.name}
                      />
                      <Error name="name" component="p" />
                    </EditLabel>
                    <EditLabel htmlFor="birthday">
                    {t('Date_of_Birth')}:
                      <EditField
                        name="birthday"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.birthday}
                        errors={touched.birthday && errors.birthday}
                      />
                      <Error name="birthday" component="p" />
                    </EditLabel>
                    <EditLabel htmlFor="breed">
                    {t('Breed')}:
                      <EditField
                        name="breed"
                        placeholder={t('Type_the_breed')}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.breed}
                        errors={touched.breed && errors.breed}
                      />
                      <Error name="breed" component="p" />
                    </EditLabel>
                    <EditLabel htmlFor="location">
                    {t('Location')}:
                      <EditField
                        name="location"
                        placeholder={t('Type_location')}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.location}
                        errors={touched.location && errors.location}
                      />
                      <Error name="location" component="p" />
                      {notice.category === 'sell' && (
                        <EditLabel htmlFor="price">
                          {t('Type_your_new_price')}:
                          <EditField
                            name="price"
                            placeholder={t('Type_your_new_price')}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.price}
                            errors={touched.price && errors.price}
                          />
                          <Error name="price" component="p" />
                        </EditLabel>
                      )}
                    </EditLabel>
                    <EditLabel htmlFor="comments">
                    {t('Comments')}:
                      <EditText
                        as="textarea"
                        name="comments"
                        placeholder={t('Type_a_comment')}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.comments}
                        errors={touched.comments && errors.comments}
                      />
                      <Error name="comments" component="p" />
                    </EditLabel>
                  </EditboxRight>
                </EditWrapper>
              )}
              <EditBox>
                <FormButton type="button" w="248" h="48" onClick={close}>
                  {t('Cancel')}
                </FormButton>
                <Button
                  type="submit"
                  w="248"
                  h="48"
                  shape="solid"
                  disabled={isSubmitting || !isFormDirty}
                  onClick={approve}
                >
                  {t('Update')}
                  <Icon id="paw" f="currentColor" s="none" />
                </Button>
              </EditBox>
            </Form>
          )}
        </Formik>
      </EditContent>
    </EditContainer>
  );
};

export default EditModal;
