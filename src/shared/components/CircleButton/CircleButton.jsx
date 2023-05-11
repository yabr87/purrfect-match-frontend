import PropTypes from 'prop-types';
import { CircleBtn } from './CircleButton.styled';

const CircleButton = ({ children, onClick, type = 'submit', ...props }) => {
  return (
    <CircleBtn onClick={onClick} type={type} {...props}>
      {children}
    </CircleBtn>
  );
};

CircleButton.defaultProps = {
  onClick: () => null,
  children: null,
};

CircleButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default CircleButton;
