import PropTypes from 'prop-types';
import { Field } from 'formik';
import { RadioContainer, RadioLabel } from './ChooseOptionStep.styles';
import { useState } from 'react';

const ChooseOptionStep = ({ name, options, onSelect, value }) => {
  const [checkedValue, setCheckedValue] = useState(value);

  const handleChange = e => {
    setCheckedValue(e.target.value);
    onSelect(e.target.value);
  };

  return (
    <RadioContainer role="group" aria-labelledby="choose-pet-option">
      {options.map(option => (
        <RadioLabel key={option.value} checked={checkedValue === option.value}>
          <Field
            type="radio"
            name={name}
            value={option.value}
            checked={checkedValue === option.value}
            onChange={handleChange}
            onBlur={() => {}}
          />
          {option.label}
        </RadioLabel>
      ))}
    </RadioContainer>
  );
};

ChooseOptionStep.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default ChooseOptionStep;
