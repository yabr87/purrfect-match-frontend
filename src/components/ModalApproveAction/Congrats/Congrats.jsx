import { Title, Text, ContainerView } from './Congrats.styles';

import Icon from 'shared/components/Icon';
import Button from 'shared/components/Button';

const Congrats = ({ close }) => {
  return (
    <ContainerView>
      <Title>Congrats!</Title>
      <Text>You're registration is success</Text>
      <Button onClick={close} w="256" h="40" shape="solid" g="8">
        Go to profile
        <Icon id="paw" f="white" />
      </Button>
    </ContainerView>
  );
};

export default Congrats;
