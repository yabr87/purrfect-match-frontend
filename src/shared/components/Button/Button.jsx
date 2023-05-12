import PropTypes from 'prop-types';
import { Btn } from './Button.styles';

const Button = ({ children, onClick, type = 'submit', ...props }) => {
  return (
    <Btn onClick={onClick} type={type} {...props}>
      {children}
    </Btn>
  );
};

Button.defaultProps = {
  onClick: () => null,
  children: null,
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
