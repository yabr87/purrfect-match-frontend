import { Title, Text, ContainerView } from './Congrats.styles';
import { useTranslation } from 'react-i18next';

import Icon from 'shared/components/Icon';
import Button from 'shared/components/Button';

import { useMedia } from 'shared/hooks/useMedia';

const Congrats = ({ close }) => {
  const screenSize = useMedia(
    ['(min-width: 1280px)', '(min-width: 768px)', '(min-width: 480px)'],
    ['desktop', 'tablet', 'mobile'],
    'xs'
  );
  const { t } = useTranslation();

  const isSmallMobile = screenSize === 'xs';

  return (
    <ContainerView>
      <Title>{t('Congrats')}!</Title>
      <Text>{t('registration_is_successful')}</Text>
      {isSmallMobile ? (
        <Button
          onClick={close}
          h="40"
          shape="solid"
          g="8"
          style={{
            maxWidth: '256px',
            width: '100%',
          }}
        >
          {t('Go_to_profile')}
          <Icon id="paw" f="white" />
        </Button>
      ) : (
        <Button onClick={close} w="256" h="40" shape="solid" g="8">
          {t('Go_to_profile')}
          <Icon id="paw" f="white" />
        </Button>
      )}
    </ContainerView>
  );
};

export default Congrats;
