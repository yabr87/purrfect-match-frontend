import { useState } from 'react';

import { ToggleContainer } from './Switcher.styles';
import { ReactComponent as MoonIcon } from './moon.svg';
import { ReactComponent as SunIcon } from './sun.svg';

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
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

export default Switcher;
