import PropTypes from 'prop-types';
import { Field } from "formik";
import { RadioContainer, RadioLabel } from "./ChooseOptionStep.styles";

const ChooseOptionStep = ({ handleBlur, values, handleChange }) => {

  return (
  <RadioContainer role="group" aria-labelledby="choose-pet-option">
    <RadioLabel 
          checked={values.category === 'my-pet'}>
      <Field
        type="radio"
        name='category'
          value='my-pet'
        onChange={handleChange}
          onBlur={handleBlur}
          checked={values.category === 'my-pet'}
      />
      your pet
    </RadioLabel>
    <RadioLabel 
          checked={values.category === 'sell'}>
      <Field
        type="radio"
        name='category'
        value='sell'
        onChange={handleChange}
          onBlur={handleBlur}
          checked={values.category === 'sell'}
      />
      sell
    </RadioLabel>
    <RadioLabel 
          checked={values.category === 'lost-found'}>
      <Field
        type="radio"
        name='category'
        value='lost-found'
        onChange={handleChange}
          onBlur={handleBlur}
          checked={values.category === 'lost-found'}
      />
      lost/found
    </RadioLabel>
    <RadioLabel 
          checked={values.category === 'for-free'}>
      <Field
        type="radio"
        name='category'
        value='for-free'
        onChange={handleChange}
          onBlur={handleBlur}
          checked={values.category === 'for-free'}
      />
      in good hands
    </RadioLabel>
  </RadioContainer>
);
};

ChooseOptionStep.propTypes = {
  handleBlur: PropTypes.func.isRequired,
};


export default ChooseOptionStep;