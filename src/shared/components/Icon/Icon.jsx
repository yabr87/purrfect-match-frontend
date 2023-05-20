import PropTypes from 'prop-types';

import sprite from 'images/other/icons.svg';
import { Svg } from './Icon.styles';

const Icon = ({ id, s = 'currentColor', f = 'none', ...props }) => {
  return (
    <Svg s={s} f={f} {...props}>
      <use href={`${sprite}#${id}`}></use>
    </Svg>
  );
};

Icon.propTypes = {
  f: PropTypes.string,
  id: PropTypes.string.isRequired,
  s: PropTypes.string,
};

export default Icon;
