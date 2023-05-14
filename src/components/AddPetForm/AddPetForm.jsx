import { useState } from 'react';
import { Formik, Form } from 'formik';
// import validationSchema from './validationSchema';
import FormWrapper from './FormWrapper';
import ChooseOptionStep from './ChooseOptionStep';
import PersonalDetails from './PersonalDetails';
import MoreInfo from './MoreInfo';

import Button from 'shared/components/Button';
import Icon from 'shared/components/Icon/Icon';
import { ButtonsBox } from './AddPetForm.styles';
import validationSchema from './validationSchema';

const initialState = {
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

//це мабуть варто винести в окремі файли
const options = [
  { label: 'my-pet', value: 'my-pet' },
  { label: 'sell', value: 'sell' },
  { label: 'lost-found', value: 'lost-found' },
  { label: 'for-free', value: 'for-free' },
];

const formTitles = {
  'my-pet': 'Add pet',
  'sell': 'Add pet for sale',
  'lost-found': 'Add lost pet',
  'for-free': 'Add pet',
};

const AddPetForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState('sell');

  const handleSubmit = (values, actions) => {
    const newPet = Object.keys(values).reduce((acc, key) => {
      return values[key] ? { ...acc, [key]: values[key] } : acc;
    }, {});
    actions.setSubmitting(false);
    console.log(newPet);
  };

  const handleGoBack = () => {
    setCurrentStep(step => step - 1);
  };

  const handleNext = () => {
    setCurrentStep(step => step + 1);
  };

  const handleOptionSelect = option => {
    setSelectedOption(option);
  };

  
  return (
    <Formik
      initialValues={initialState}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnChange={true}
    >
      {({ isSubmitting, handleChange, handleBlur, values, errors }) => (
        <Form>
          <div>{JSON.stringify(errors)}</div>
          <FormWrapper
            currentStep={currentStep}
            text={formTitles[selectedOption]}
          >
            {currentStep === 1 && (
              <ChooseOptionStep
                options={options}
                onSelect={handleOptionSelect}
                value={selectedOption}
              />
            )}
            {currentStep === 2 && <PersonalDetails
              option={selectedOption}
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values} />}
            
            {currentStep === 3 && <MoreInfo
              option={selectedOption}
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
            />}

            <ButtonsBox>
              {currentStep === 1 && (
                <Button type="button" w="248" h="48">
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
                  type="button"
                  w="248"
                  h="48"
                  shape="solid"
                  onClick={handleNext}
                  disabled={isSubmitting}
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
