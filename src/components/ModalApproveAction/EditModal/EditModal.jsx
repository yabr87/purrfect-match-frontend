import {
  ContainerView,
  PetCardData,
  PetImage,
  Wrap,
  ImageCategory,
} from '../NoticeModal/NoticeModal.styles';

import { Field, Form, Formik } from 'formik';
import Loader from 'shared/components/Loader';
import {
  ButtonsBox,
  Error,
  FormButton,
  FormLabel,
  FormTitle,
} from 'components/AddPetForm/AddPetForm.styles';
import { reverseISODate } from 'utils/reverseISODate';
import { EditWrapper } from './EditModal.styles';
import { useNavigate } from 'react-router-dom';
import Button from 'shared/components/Button';
import Icon from 'shared/components/Icon';

const EditModal = ({ notice, close }) => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    const newPet = Object.keys(values).reduce((acc, key) => {
      if (key === 'category' && values[key] === 'my-pet') {
        return acc;
      }
      return values[key] ? { ...acc, [key]: values[key] } : acc;
    }, {});

    try {
      console.log(newPet);
      //    await editMyPet(newPet); тут должен быть PATCH запрос

      resetForm();
    } catch (error) {
      console.error('Failed to edit pet', error);
    }
  };

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
  };

  return (
    <ContainerView>
      <PetCardData>
        <Wrap>
          <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            {({
              isSubmitting,
              handleChange,
              handleBlur,
              values,
              errors,
              isValid,
              touched,
              initialErrors,
              setFieldValue,
            }) => (
              <Form>
                {isSubmitting ? (
                  <Loader />
                ) : (
                  <EditWrapper>
                    <div>
                      <PetImage src={notice.photoUrl} alt={notice.title} />
                      <ImageCategory>
                        {notice.category
                          .replace('for-free', 'for free')
                          .replace(/-/g, '/')}
                      </ImageCategory>
                    </div>
                    <div>
                      <FormTitle>Edit your advertisment</FormTitle>
                      <FormLabel htmlFor="title">
                        Title of ad:
                        <Field
                          name="title"
                          placeholder="Type title of publication"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.title}
                          errors={touched.title && errors.title}
                        />
                        <Error name="title" component="p" />
                      </FormLabel>
                      <FormLabel htmlFor="name">
                        Name of pet:
                        <Field
                          name="name"
                          placeholder="Type name of pet"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          errors={touched.name && errors.name}
                        />
                        <Error name="name" component="p" />
                      </FormLabel>
                      <FormLabel htmlFor="birthday">
                        Date of birth:
                        <Field
                          name="birthday"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.birthday}
                          errors={touched.birthday && errors.birthday}
                        />
                        <Error name="birthday" component="p" />
                      </FormLabel>
                      <FormLabel htmlFor="breed">
                        Name of pet:
                        <Field
                          name="breed"
                          placeholder="Type name of pet"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.breed}
                          errors={touched.breed && errors.breed}
                        />
                        <Error name="breed" component="p" />
                      </FormLabel>
                      <FormLabel htmlFor="location">
                        Location:
                        <Field
                          name="location"
                          placeholder="Type name of pet"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.location}
                          errors={touched.location && errors.location}
                        />
                        <Error name="location" component="p" />
                        {notice.category === 'sell' && (
                          <FormLabel htmlFor="price">
                            Type your new price:
                            <Field
                              name="price"
                              placeholder="Type your new price"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.price}
                              errors={touched.price && errors.price}
                            />
                            <Error name="price" component="p" />
                          </FormLabel>
                        )}
                      </FormLabel>
                      <FormLabel htmlFor="comments">
                        Comments:
                        <Field
                          as="textarea"
                          name="comments"
                          placeholder="Type name of pet"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.comments}
                          errors={touched.comments && errors.comments}
                        />
                        <Error name="comments" component="p" />
                      </FormLabel>
                    </div>
                  </EditWrapper>
                )}
              <ButtonsBox>
                <FormButton type="button" w="248" h="48" onClick={close}>
                  Cancel
                </FormButton>
                 <Button
                    type="submit"
                    w="248"
                    h="48"
                    shape="solid"
                    disabled={isSubmitting}
                  >
                    Done
                    <Icon id="paw" f="currentColor" s="none" />
                  </Button>
                </ButtonsBox>
              </Form>
            )}
          </Formik>
        </Wrap>
      </PetCardData>
    </ContainerView>
  );
};

export default EditModal;
