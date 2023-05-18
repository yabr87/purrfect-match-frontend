import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import FormWrapper from './FormWrapper';
import ChooseOptionStep from './ChooseOptionStep';
import PersonalDetails from './PersonalDetails';
import MoreInfo from './MoreInfo';

import Button from 'shared/components/Button';
import Icon from 'shared/components/Icon/Icon';
import { ButtonsBox, FormButton } from './AddPetForm.styles';
import validationSchema from './validationSchema';

import { addNotice } from 'utils/ApiNotices';
import { addMyPet } from 'utils/ApiMyPets';

const initialState = {
  category: 'sell',
  title: '',
  name: '',
  birthday: '',
  breed: '',
  photo: '',
  comments: '',
  sex: '',
  location: '',
  price: '',
};

const AddPetForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(
    initialState.category
  );

  const handleSubmit = async (values, { resetForm }) => {
    const newPet = Object.keys(values).reduce((acc, key) => {
      if (key === 'category' && values[key] === 'my-pet') {
        return acc;
      }
      return values[key] ? { ...acc, [key]: values[key] } : acc;
    }, {});

    newPet.birthday = newPet.birthday.toISOString();

    try {
      if (selectedCategory !== 'my-pet') {
        await addNotice(newPet);
      }
      else {
        await addMyPet(newPet);
      }      
      console.log('Pet added successfully');
      resetForm();
      navigate(`/notices/${selectedCategory}`);
    } catch (error) {
      console.error('Failed to add pet', error);
    }
  };

  const handleGoBack = () => {
    setCurrentStep(step => step - 1);
  };

  const handleNext = () => {
    setCurrentStep(step => step + 1);
  };

  const handleCancel = () => {
    navigate(-1);
  };
  const handleCategoryChange = category => {
    setSelectedCategory(category);
  };

  return (
    <Formik
      initialValues={initialState}
      onSubmit={handleSubmit}
      validationSchema={validationSchema(currentStep, selectedCategory)}
    >
      {({
        isSubmitting,
        handleChange,
        handleBlur,
        values,
        errors,
        isValid,
        touched,
      }) => (
        <Form>
          <FormWrapper
            currentStep={currentStep}
            category={selectedCategory}
            text={
              selectedCategory === 'lost-found'
                ? 'Add lost pet'
                : selectedCategory === 'sell'
                ? 'Add pet for sale'
                : selectedCategory === 'my-pet'
                ? 'Add my pet'
                : 'Add pet'
            }
          >
            {currentStep === 1 && (
              <ChooseOptionStep
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                onSelectCategory={handleCategoryChange}
              />
            )}
            {currentStep === 2 && (
              <PersonalDetails
                option={selectedCategory}
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                touched={touched}
                errors={errors}
                isValid={isValid}
              />
            )}

            {currentStep === 3 && (
              <MoreInfo
                option={selectedCategory}
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                touched={touched}
                errors={errors}
              />
            )}

            <ButtonsBox category={selectedCategory}>
              {currentStep === 1 && (
                <FormButton type="button" w="248" h="48" onClick={handleCancel}>
                  <Icon id="arrow-left" />
                  Cancel
                </FormButton>
              )}
              {currentStep !== 1 && (
                <FormButton type="button" w="248" h="48" onClick={handleGoBack}>
                  <Icon id="arrow-left" />
                  Back
                </FormButton>
              )}
              {currentStep !== 3 && (
                <Button
                  type="button"
                  w="248"
                  h="48"
                  shape="solid"
                  onClick={handleNext}
                  disabled={
                    currentStep === 2 &&
                    (!isValid || !touched.name || !touched.birthday)
                  }
                >
                  Next
                  <Icon id="paw" f="currentColor" s="none" />
                </Button>
              )}

              {currentStep === 3 && (
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
              )}
            </ButtonsBox>
          </FormWrapper>
        </Form>
      )}
    </Formik>
  );
};

export default AddPetForm;
