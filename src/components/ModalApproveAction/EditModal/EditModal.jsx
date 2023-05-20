import { Form, Formik } from 'formik';
import Loader from 'shared/components/Loader';
import {
  Error,
  FormButton
} from 'components/AddPetForm/AddPetForm.styles';
import { reverseISODate } from 'utils/reverseISODate';
import {
  AdaptiveBoxOne,
  AdaptiveBoxTwo,
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
import { useNavigate } from 'react-router-dom';
import Button from 'shared/components/Button';
import Icon from 'shared/components/Icon';
// import ImageUploader from 'shared/components/ImageUploader';
import validationSchemaEdit from './validationSchemaEdit';
import { PetImage } from '../NoticeModal/NoticeModal.styles';



const EditModal = ({ notice, close, approve }) => {

  const navigate = useNavigate();

  const initialValues = {
    _id: notice._id,
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
    points: 0,
  };

  const changedFields = {};

  const handleSubmit = async (values, { resetForm }) => {
    Object.keys(values).forEach((key) => {
    const initialValue = initialValues[key];
    const currentValue = values[key];

    if (initialValue !== currentValue) {
      changedFields[key] = currentValue;
    }
  });

  const newPet = Object.keys(changedFields).reduce((acc, key) => {
    if (key === 'category' && changedFields[key] === 'my-pet') {
      return acc;
    }
    return { ...acc, [key]: changedFields[key] };
  }, {});
    
    newPet._id = values._id;


    try {
      console.log(newPet);
      //    await editMyPet(newPet); тут должен быть PATCH запрос

      resetForm();
      navigate('/notices')
    } catch (error) {
      console.error('Failed to edit pet', error);
    }
  };


  return (
    <EditContainer>
      <EditContent>
                  <Formik onSubmit={handleSubmit} initialValues={initialValues} validationSchema={validationSchemaEdit(notice.category)}>
            {({
              isSubmitting,
              handleChange,
              handleBlur,
              values,
              errors,
              touched,
            }) => (
              <Form>
                {isSubmitting ? (
                  <Loader />
                ) : (
                    <EditWrapper>
                      <AdaptiveBoxOne>
                      <EditTitle>Edit your pet</EditTitle>
                      <div style={{position: 'relative'}}>
                      <PetImage src={notice.photoUrl} alt={notice.title} />
                      <ImageCategoryEdit>
                        {notice.category
                          .replace('for-free', 'for free')
                          .replace(/-/g, '/')}
                      </ImageCategoryEdit></div>
                        <div>
                        <EditLabel htmlFor="points">
                          {values.points ? (
                            <p>Raise your ad only for {values.points}$!</p>
                          ) : (
                            <p>Choose your payment plan to raise you ad!</p>
                          )}
                          <EditField
                            type="range"
                            id="points"
                            name="points"
                            min="0"
                            max="30"
                            placeholder="Raise your ad"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.points}
                            errors={touched.points && errors.points}
                          />
                          <Error name="points" component="p" />
                        </EditLabel>
                      </div>
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
                    disabled={isSubmitting}
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

