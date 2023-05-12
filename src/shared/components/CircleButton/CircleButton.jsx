import PropTypes from 'prop-types';

import { CircleBtn } from './CircleButton.styles';
import Icon from '../Icon';

const CircleButton = ({ onClick }) => {
  return (
    <CircleBtn onClick={onClick} type="button">
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
};

export default CircleButton;
