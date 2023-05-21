import { useRef, useState } from 'react';

import { ToggleContainer } from './ThemeSwitcher.styles';
import Icon from 'shared/components/Icon/Icon';
import { useEffect } from 'react';

const ThemeSwitcher = () => {
  const [isCheked, setIsCheked] = useState(
    localStorage.getItem('theme') === 'true' ? true : false
  );
  const isFirstRender = useRef(!isCheked);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      localStorage.setItem('theme', false);
    }
  }, [isFirstRender]);

  return (
    <ToggleContainer
      onClick={() => {
        setIsCheked(isCheked ? false : true);
        localStorage.setItem('theme', isCheked ? false : true);
        window.dispatchEvent(new Event('storage'));
      }}
      lightTheme={isCheked}
    >
      {isCheked ? <Icon id="moon" /> : <Icon id="sun" />}
    </ToggleContainer>
  );
};

export default ThemeSwitcher;
