// import { useEffect } from 'react';

import Button from 'shared/components/Button';
import { Title, Text, ContainerView } from './Congrats.styles';

import Icon from 'shared/components/Icon';
import { useNavigate } from 'react-router-dom';

const Congrats = () => {
  const navigate = useNavigate();
  return (
    <ContainerView>
      <Title as="h2">Congrats!</Title>
      <Text>Youre registration is success</Text>
      <Button
        type="button"
        onClick={() => {
          navigate('/user', { state: {} });
        }}
        w="256"
        h="40"
        shape="solid"
        g="8"
      >
        Go to profile
        <Icon id="paw" f="white" />
      </Button>
    </ContainerView>
  );
};

export default Congrats;
