import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import FormWrapper from './FormWrapper';
import ChooseOptionStep from './ChooseOptionStep';
import PersonalDetails from './PersonalDetails';
import MoreInfo from './MoreInfo';

import Button from 'shared/components/Button';
import Icon from 'shared/components/Icon/Icon';
import { ButtonsBox } from './AddPetForm.styles';
import validationSchema from './validationSchema';
import { convertToISODate } from 'utils/convertToISODate';

const initialState = {
  category: "sell",
  title: "",
  name: "",
  birthday: "",
  breed: "",
  photo: "",
  comments: "",
  sex: "",
  location: "",
  price: "",
}

const formTitles = {
  'my-pet': 'Add pet',
  'sell': 'Add pet for sale',
  'lost-found': 'Add lost pet',
  'for-free': 'Add pet',
};

const AddPetForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  

  const handleSubmit = (values, {resetForm}) => {
    const newPet = Object.keys(values).reduce((acc, key) => {
      return values[key] ? { ...acc, [key]: values[key] } : acc;
    }, {});

    newPet.birthday = convertToISODate(newPet.birthday);
    console.log(newPet);
    navigate('/user'); 
    resetForm();
  };

  const handleGoBack = () => {
    setCurrentStep(step => step - 1);
  };

  const handleNext = () => {
      setCurrentStep((step) => step + 1);
    }

   const handleCancel = () => {
    navigate(-1); 
  };

  
  return (
    <Formik
      initialValues={initialState}
      onSubmit={handleSubmit}
      validationSchema={validationSchema(currentStep)}
    >
      {({ isSubmitting, handleChange, handleBlur, values, errors, isValid, touched }) => (
        <Form>
          <FormWrapper
            currentStep={currentStep}
            text={values.category === 'lost-found' ? 'Add lost pet': values.category === 'sell' ? 'Add pet for sale': 'Add pet'}
          >
            {currentStep === 1 && (
              <ChooseOptionStep
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values} 
              />
            )}
            {currentStep === 2 && <PersonalDetails
              option={values.category}
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values} 
              touched={touched} 
              errors={errors}
              isValid={isValid}
              />}
            
            {currentStep === 3 && <MoreInfo
              option={values.category}
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
            />}

            <ButtonsBox>
              {currentStep === 1 && (
                <Button type="button" w="248" h="48" 
                  onClick={handleCancel}>
                  Cancel
                </Button>
              )}
              {currentStep !== 1 && (
                <Button type="button" w="248" h="48" onClick={handleGoBack}>
                  <Icon id="arrow-left" />
                  Back
                </Button>
              )}
              {currentStep !== 3 && (
                <Button
                  type='button'
                  w="248"
                  h="48"
                  shape="solid"
                  onClick={handleNext}
                  disabled={currentStep === 2 && (!isValid || !touched.name || !touched.birthday || !touched.breed)}
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
