import Icon from '../Icon';
import { useState } from 'react';
import {
  CheckBoxContainer,
  CheckBoxItem,
  CheckBoxValue
} from './Checkbox.styles';

const Checkbox = ({ isChecked = false, value, label, onChange }) => {

  const [isCheckedState, setIsCheckedState] = useState(isChecked);
  const onClick = () => {
    setIsCheckedState(!isCheckedState);
    onChange({isChecked, value});
  }
  return (
    <CheckBoxContainer onClick={onClick}>
      <CheckBoxItem>
        <Icon id={isCheckedState ? "check" : "uncheck"} />
      </CheckBoxItem>

      <CheckBoxValue> {label} </CheckBoxValue>
    </CheckBoxContainer>
  );
};
export default Checkbox;
