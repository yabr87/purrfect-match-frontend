import Icon from 'shared/components/Icon/Icon';
import { LogoLink } from './Logo.styles';
import { useMedia } from 'shared/hooks/useMedia';

function Logo() {
  const screenSize = useMedia(
    ['(min-width: 1280px)', '(min-width: 768px)'],
    ['desktop', 'tablet'],
    'mobile'
  );

  const isTablet = screenSize === 'tablet';
  const isDesktop = screenSize === 'desktop';

  return (
    <LogoLink to="/">
      {isTablet || isDesktop ? (
        <Icon id="logo" h="28" w="162" />
      ) : (
        <Icon id="logo-small" h="20" w="116" />
      )}
    </LogoLink>
  );
}

export default Logo;
