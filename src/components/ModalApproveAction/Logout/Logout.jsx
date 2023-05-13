// import { useEffect } from 'react';

// import Container from 'shared/components/Container';
// import Section from 'shared/components/Section';
import Button from 'shared/components/Button';
import { Title, ContainerView, ButtonWrap } from './Logout.styles';

import Icon from 'shared/components/Icon';

const Logout = ({ close, approve }) => {
  return (
    <ContainerView>
      <Title as="h2">Already leaving?</Title>
      <ButtonWrap>
        <Button
          type="button"
          onBtnClick={close}
          w="129"
          h="40"
          style={{
            marginRight: '17px',
            marginBottom: '8px',
          }}
        >
          Cancel
        </Button>
        <Button
          type="button"
          onBtnClick={approve}
          w="129"
          h="40"
          shape="solid"
          g="8"
        >
          Yes
          <Icon id="logout" s="#FEF9F9" />
        </Button>
      </ButtonWrap>
    </ContainerView>
  );
};

export default Logout;
