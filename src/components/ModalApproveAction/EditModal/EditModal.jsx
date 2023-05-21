import { Form, Formik } from 'formik';
import { useState } from 'react';
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

const EditModal = ({ notice, close, approve }) => {
  const [isFormDirty, setIsFormDirty] = useState(false);

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
      toast.success(`Pet edited successfully`);
      resetForm();
      close();
    } catch (error) {
      toast.error(`Failed to edit pet':${error}`);
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
                  <AdaptiveBoxOne>
                    <EditTitle>Edit your pet</EditTitle>
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
                        <p>Raise your ad only for {values.promo}$!</p>
                      ) : (
                        <>
                          <p>Add payment to raise your ad!</p>
                          <p>Just scroll your value:</p>
                        </>
                      )}
                      <EditField
                        type="range"
                        id="promo"
                        name="promo"
                        min="0"
                        max="30"
                        placeholder="Raise your ad"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.promo}
                        errors={touched.promo && errors.promo}
                      />
                      <Error name="promo" component="p" />
                    </EditLabel>
                  </AdaptiveBoxOne>
                  <AdaptiveBoxTwo>
                    <EditLabel htmlFor="title">
                      Title of ad:
                      <EditField
                        name="title"
                        placeholder="Type title of publication"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title}
                        errors={touched.title && errors.title}
                      />
                      <Error name="title" component="p" />
                    </EditLabel>
                    <EditLabel htmlFor="name">
                      Name of pet:
                      <EditField
                        name="name"
                        placeholder="Type name of pet"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        errors={touched.name && errors.name}
                      />
                      <Error name="name" component="p" />
                    </EditLabel>
                    <EditLabel htmlFor="birthday">
                      Date of birth:
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
                      Breed:
                      <EditField
                        name="breed"
                        placeholder="Type name of pet"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.breed}
                        errors={touched.breed && errors.breed}
                      />
                      <Error name="breed" component="p" />
                    </EditLabel>
                    <EditLabel htmlFor="location">
                      Location:
                      <EditField
                        name="location"
                        placeholder="Type name of pet"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.location}
                        errors={touched.location && errors.location}
                      />
                      <Error name="location" component="p" />
                      {notice.category === 'sell' && (
                        <EditLabel htmlFor="price">
                          Type your new price:
                          <EditField
                            name="price"
                            placeholder="Type your new price"
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
                      Comments:
                      <EditText
                        as="textarea"
                        name="comments"
                        placeholder="Type name of pet"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.comments}
                        errors={touched.comments && errors.comments}
                      />
                      <Error name="comments" component="p" />
                    </EditLabel>
                  </AdaptiveBoxTwo>
                </EditWrapper>
              )}
              <EditBox>
                <FormButton type="button" w="248" h="48" onClick={close}>
                  Cancel
                </FormButton>
                <Button
                  type="submit"
                  w="248"
                  h="48"
                  shape="solid"
                  disabled={isSubmitting || !isFormDirty}
                  onClick={approve}
                >
                  Update
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
