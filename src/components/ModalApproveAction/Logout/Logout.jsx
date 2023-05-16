import { useDispatch } from 'react-redux';

import Button from 'shared/components/Button';
import { Title, ContainerView, ButtonWrap } from './Logout.styles';

import Icon from 'shared/components/Icon';

import { logout } from 'redux/auth/authOperations';

const Logout = ({ close, idUser }) => {
  const dispatch = useDispatch();

  const onLogout = idUser => {
    dispatch(logout(idUser));
  };

  return (
    <ContainerView>
      <Title as="h2">Already leaving?</Title>
      <ButtonWrap>
        <Button
          type="button"
          onClick={close}
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
          onClick={() => onLogout(idUser)}
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
