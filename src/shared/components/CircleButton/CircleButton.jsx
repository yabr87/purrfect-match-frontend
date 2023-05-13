import PropTypes from 'prop-types';

import { CircleBtn } from './CircleButton.styles';
import Icon from '../Icon';

const CircleButton = ({ onClick, type = 'button', ...props }) => {
  return (
    <CircleBtn onClick={onClick} type={type} {...props}>
      Add pet
      <Icon id="plus" />
    </CircleBtn>
  );
};

CircleButton.defaultProps = {
  onClick: () => null,
};

CircleButton.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default CircleButton;
