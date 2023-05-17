import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'styled-components';

import { ToggleContainer } from './Switcher.styles';
import { toggleTheme } from '../../redux/theme/themeSlice';
import { ReactComponent as MoonIcon } from './moon.svg';
import { ReactComponent as SunIcon } from './sun.svg';

const Switcher = () => {
  const [isCheked, setIsCheked] = useState(false);
  const dispatch = useDispatch();
  const theme = useTheme();
  const currentTheme = useSelector(state => state.theme);

  return (
    <ToggleContainer
      onClick={() => {
        setIsCheked(prevIsCheked => !prevIsCheked);
        dispatch(toggleTheme(isCheked ? 'light' : 'dark'));
        document.body.classList.toggle('dark');
      }}
      lightTheme={!isCheked}
      gradient={theme[currentTheme].gradient}
      toggleBorder={theme[currentTheme].toggleBorder}
    >
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

export default Switcher;
