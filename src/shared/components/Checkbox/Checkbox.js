import Icon from '../Icon';
import { useEffect, useState } from 'react';
import {
  CheckBoxContainer,
  CheckBoxItem,
  CheckBoxValue,
} from './Checkbox.styles';

const Checkbox = ({ isChecked = false, value, label, onChange }) => {
  const [isCheckedState, setIsCheckedState] = useState(isChecked);
  // const onClick = () => {
  //   setIsCheckedState(!isCheckedState);
  //   onChange({isChecked, value});
  // }

  useEffect(() => {
    setIsCheckedState(isChecked);
  }, [isChecked]);

  const onClick = () => {
    const newCheckedState = !isCheckedState;
    setIsCheckedState(!isCheckedState);
    const event = {
      target: {
        value,
        checked: newCheckedState,
      },
    };
    onChange(event);
  };

  return (
    <CheckBoxContainer onClick={onClick}>
      <CheckBoxItem>
        <Icon id={isCheckedState ? 'check' : 'uncheck'} />
      </CheckBoxItem>

      <CheckBoxValue> {label} </CheckBoxValue>
    </CheckBoxContainer>
  );
};
export default Checkbox;
