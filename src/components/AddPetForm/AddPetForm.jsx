import { useState } from 'react';
import { Formik, Form } from 'formik';
import ChooseOptionStep from './ChooseOptionStep';
import validationSchema from './validationSchema';
import Button from 'shared/components/Button';
import Icon from 'shared/components/Icon/Icon';
import MoreInfoMyPet from './MoreInfo/MoreInfoMyPet';
import MoreInfoSell from './MoreInfo/MoreInfoSell';
import MoreInfoLost from './MoreInfo/MoreInfoLost';
import MoreInfoInHands from './MoreInfo/MoreInfoInHands';
import FormWrapper from './FormWrapper';
import { ButtonsBox } from './AddPetForm.styles';
import PersonalDetailsMyPet from './PersonalDetails/PersonalDetailsMyPet';
import PersonalDetailsSell from './PersonalDetails/PersonalDetailsSell';
import PersonalDetailsLost from './PersonalDetails/PersonalDetailsLost';
import PersonalDetailsInHands from './PersonalDetails/PersonalDetailsInHands';
import initialState from './initialState';

//це мабуть варто винести в окремі файли
const options = [
  { label: 'your pet', value: 'your pet' },
  { label: 'sell', value: 'sell' },
  { label: 'lost/found', value: 'lost/found' },
  { label: 'in good hands', value: 'in good hands' },
];

const sexOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' }
];


const formTitles = {
  'your pet': 'Add pet',
  sell: 'Add pet for sale',
  'lost/found': 'Add lost pet',
  'in good hands': 'Add pet',
};

const AddPetForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState('sell');
  const [state, setState] = useState({ ...initialState });

  const handleSubmit = values => {
    // відправка даних на бекенд
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

  const handleChange = ({target}) => {
    const { name, value } = target;
    console.log('NAME:', name, 'value:', value);
    setState(prevState => {
      return {...prevState, [name]: value}
    })
  }

  //це мабуть варто винести в окремі файли
  const personalDetailsSteps = {
    'your pet': [<PersonalDetailsMyPet key="personalDetailsMyPet" values={state} handleChange={handleChange}/>],
    sell: [<PersonalDetailsSell key="personalDetailsSell"  handleChange={handleChange}/>],
    'lost/found': [<PersonalDetailsLost key="personalDetailsLost"  handleChange={handleChange}/>],
    'in good hands': [<PersonalDetailsInHands key="personalDetailsInHands"  handleChange={handleChange}/>],
  };

//це мабуть варто винести в окремі файли
  const moreInfo = {
    'your pet': [<MoreInfoMyPet key="moreInfoMyPet" values={state} handleChange={handleChange}/>],
    sell: [<MoreInfoSell key="moreInfoSell" options={sexOptions} handleChange={handleChange}/>],
    'lost/found': [<MoreInfoLost key="moreInfoLost" options={sexOptions} handleChange={handleChange}/>],
    'in good hands': [<MoreInfoInHands key="moreInfoInHands" options={sexOptions} handleChange={handleChange}/>],
  };


  return (
    <>
    <Formik
      initialValues={{}}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting, errors, touched })  => (
        <Form>
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
            {currentStep === 2 &&
              selectedOption &&
              personalDetailsSteps[selectedOption]}
            {currentStep === 3 && selectedOption && moreInfo[selectedOption]}

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
                  disabled={isSubmitting}
                  onClick={handleNext}
                >
                  Next
                  <Icon id="paw" f="currentColor" s="none" />
                </Button>
              )}

              {currentStep === 3 && (
                <Button
                  type="button"
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

      <div>
        <code>values:</code> {JSON.stringify(state, null, 2)}
      </div>
    </>
  );
};

export default AddPetForm;
