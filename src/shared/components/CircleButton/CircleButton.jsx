import PropTypes from 'prop-types';

import { CircleBtn } from './CircleButton.styles';
import Icon from '../Icon';

const CircleButton = ({
  children,
  onClick,
  id = 'plus',
  type = 'button',
  ...props
}) => {
  return (
    <CircleBtn onClick={onClick} type={type} id={id} {...props}>
      {children}
      <Icon id={id} f={props.f} />
    </CircleBtn>
  );
};

CircleButton.defaultProps = {
  onClick: () => null,
  children: null,
};

CircleButton.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default CircleButton;
