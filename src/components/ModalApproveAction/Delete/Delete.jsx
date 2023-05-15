// import { useEffect } from 'react';

// import Container from 'shared/components/Container';
// import Section from 'shared/components/Section';
import Button from 'shared/components/Button';
import {
  Text,
  TextAccent,
  ContainerView,
  ButtonWrap,
  TextWrap,
} from './Delete.styles';

import Icon from 'shared/components/Icon';
import Title from 'shared/components/Title';

const Delete = ({ close, approve }) => {
  return (
    <ContainerView>
      <Title as="h2">Delete adverstiment?!</Title>
      <TextWrap>
        <Text>
          Are you sure you want to delete{' '}
          <TextAccent>“Cute dog looking for a home”</TextAccent>? <br />
          You can`t undo this action.
        </Text>
      </TextWrap>

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

export default Delete;
