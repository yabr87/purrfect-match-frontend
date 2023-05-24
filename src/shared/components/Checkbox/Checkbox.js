import Icon from '../Icon';
import {
  CheckBoxContainer,
  CheckBoxItem,
  CheckBoxValue,
} from './Checkbox.styles';

const Checkbox = ({ checked, option, label, onChange }) => {
  const onClick = () => {
    onChange({ option, checked: !checked });
  };

  return (
    <CheckBoxContainer onClick={onClick}>
      <CheckBoxItem>
        <Icon id={checked ? 'check' : 'uncheck'} />
      </CheckBoxItem>

      <CheckBoxValue> {label} </CheckBoxValue>
    </CheckBoxContainer>
  );
};
export default Checkbox;
