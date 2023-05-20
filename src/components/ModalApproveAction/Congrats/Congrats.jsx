import { Title, Text, ContainerView } from './Congrats.styles';

import Icon from 'shared/components/Icon';
import Button from 'shared/components/Button';

import { useMedia } from 'shared/hooks/useMedia';

const Congrats = ({ close }) => {
  const screenSize = useMedia(
    ['(min-width: 1280px)', '(min-width: 768px)', '(min-width: 480px)'],
    ['desktop', 'tablet', 'mobile'],
    'xs'
  );

  const isSmallMobile = screenSize === 'xs';

  return (
    <ContainerView>
      <Title>Congrats!</Title>
      <Text>You're registration is success</Text>
      {isSmallMobile ? (
        <Button
          onClick={close}
          h="40"
          shape="solid"
          g="8"
          style={{
            marginBottom: '8px',
            width: '100%',
          }}
        >
          Go to profile
          <Icon id="paw" f="white" />
        </Button>
      ) : (
        <Button onClick={close} w="256" h="40" shape="solid" g="8">
          Go to profile
          <Icon id="paw" f="white" />
        </Button>
      )}
    </ContainerView>
  );
};

export default Congrats;
