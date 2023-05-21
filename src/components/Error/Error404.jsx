import { useTranslation } from 'react-i18next';
import Container from '../../shared/components/Container';
import { ErrorContainer, Title, Image, Link } from './Error404.styles';
import Icon from '../../shared/components/Icon/Icon';
import imageMobile from '../../images/error/404-mobile-min.png';
import imageMobile2x from '../../images/error/404-mobile@2x-min.png';
import imageTablet from '../../images/error/404-tablet-min.png';
import imageTablet2x from '../../images/error/404-tablet@2x-min.png';
import imageDesktop from '../../images/error/404-desktop-min.png';
import imageDesktop2x from '../../images/error/404-desktop@2x-min.png';

const Error404 = () => {
  const screenWidth = window.innerWidth;
  const pixelRatio = window.devicePixelRatio;
  const { t } = useTranslation();

  let imageSrc;

  if (screenWidth < 768) {
    imageSrc = pixelRatio === 2 ? imageMobile2x : imageMobile;
  } else if (screenWidth >= 768 && screenWidth < 1280) {
    imageSrc = pixelRatio === 2 ? imageTablet2x : imageTablet;
  } else {
    imageSrc = pixelRatio === 2 ? imageDesktop2x : imageDesktop;
  }

  return (
    <Container>
      <ErrorContainer>
        <Title>
          <h1>{t('Ooops')}! </h1>
          <h2>{t('This_page_not_found')} :(</h2>
        </Title>
        <Image src={imageSrc} alt="404 Error" />
        <Link to="/">
          {t('To_main_page')}
          <Icon id="paw" f="currentColor" s="none" />
        </Link>
      </ErrorContainer>
    </Container>
  );
};

export default Error404;
