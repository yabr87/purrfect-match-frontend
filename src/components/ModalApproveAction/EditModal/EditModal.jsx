import { addDays, format } from 'date-fns';
import React, { useState, useEffect } from 'react';
import useAuth from 'shared/hooks/useAuth';
import 'react-datepicker/dist/react-datepicker.css';

import {
  ContainerView,
  PetCardData,
  PetImage,
  Wrap,
  ImageCategory,
} from '../NoticeModal/NoticeModal.styles';

import { getNoticeById } from 'utils/ApiNotices';
import { Field, Form, Formik } from 'formik';
import Loader from 'shared/components/Loader';
import {
  Error,
  FormTitle,
  StyledField,
} from 'components/AddPetForm/AddPetForm.styles';
import DatePicker from 'react-datepicker';
import { reverseISODate } from 'utils/reverseISODate';

const EditModal = ({ notice, close, setIsFavorite }) => {
  const { isLoggedIn } = useAuth();
  const [ownerContacts, setOwnerContacts] = useState({ email: '', phone: '' });

  useEffect(() => {
    getNoticeById(notice._id)
      .then(res => {
        if (res.owner) {
          setOwnerContacts(res.owner);
        }
      })
      .catch(e => console.log(e));
  }, [notice._id]);

  const handleSubmit = async (values, { resetForm }) => {
    const newPet = Object.keys(values).reduce((acc, key) => {
      if (key === 'category' && values[key] === 'my-pet') {
        return acc;
      }
      return values[key] ? { ...acc, [key]: values[key] } : acc;
    }, {});

    newPet.birthday = newPet.birthday.toISOString();

    try {
      console.log(newPet);
      //    await editMyPet(newPet); тут должен быть PATCH запрос

      console.log('Pet edited successfully');
      resetForm();
    } catch (error) {
      console.error('Failed to edit pet', error);
    }
  };
  const formatBirthdayDate = date => {
    return format(Date.parse(date), 'dd.MM.yyyy');
  };

  const initialValues = {
    category: notice.category,
    title: notice.title,
    name: notice.name,
    birthday: notice.birthday,
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
          <PetImage src={notice.photoUrl} alt={notice.title} />
          <ImageCategory>
            {notice.category.replace('for-free', 'for free').replace(/-/g, '/')}
          </ImageCategory>
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
                  <>
                    <FormTitle>Edit your advertisment</FormTitle>
                    <label htmlFor="title">
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
                    </label>
                    <label htmlFor="name">
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
                    </label>
                    <label htmlFor="birthday">
                      Date of birth:
                      <Field
                        name="birthday"
                        placeholderText="DD.MM.YYYY"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={reverseISODate(values.birthday)}
                        errors={touched.birthday && errors.birthday}
                      />
                      <Error name="birthday" component="p" />
                    </label>
                    <label htmlFor="breed">
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
                    </label>
                  </>
                )}
              </Form>
            )}
          </Formik>
        </Wrap>
      </PetCardData>
    </ContainerView>
  );
};

export default EditModal;
