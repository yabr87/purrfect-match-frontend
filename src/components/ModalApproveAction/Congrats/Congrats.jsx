// import { useEffect } from 'react';

// import Container from 'shared/components/Container';
// import Section from 'shared/components/Section';
import Button from 'shared/components/Button';
import { Title, Text, ContainerView } from './Congrats.styles';

import Icon from 'shared/components/Icon';
// import { ModalView } from '../ModalApproveAction.styles';

const Congrats = ({ close, approve }) => {
  //   useEffect(() => {
  //     const closeModal = ({ target, currentTarget, code }) => {
  //       if (target === currentTarget || code === 'Escape') {
  //         close();
  //       }
  //     };
  //     document.addEventListener('keydown', closeModal);
  //     return () => {
  //       window.removeEventListener('keydown', closeModal);
  //     };
  //   }, [close]);

  return (
    <ContainerView>
      <Title as="h2">Congrats!</Title>
      <Text>Youre registration is success</Text>
      <Button
        type="button"
        onBtnClick={approve}
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
