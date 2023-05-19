import { useState } from 'react';

import { ToggleContainer } from './Switcher.styles';
import Icon from 'shared/components/Icon/Icon';

const Switcher = ({ onClick }) => {
  const [isCheked, setIsCheked] = useState(false);

  return (
    <ToggleContainer
      onClick={() => {
        setIsCheked(prevIsCheked => !prevIsCheked);
        onClick();
        document.body.style.backgroundColor = isCheked ? '#FEF9F9' : '#121212';
      }}
      lightTheme={!isCheked}
    >
      <Icon id="sun" />
      <Icon id="moon" />
    </ToggleContainer>
  );
};

export default Switcher;
