import { useDispatch } from 'react-redux';
import { useMedia } from 'shared/hooks/useMedia';

import Button from 'shared/components/Button';
import { Title, ContainerView, ButtonWrap } from './Logout.styles';

import Icon from 'shared/components/Icon';
import { toast } from 'react-toastify';
import { logout } from 'redux/auth/authOperations';

const Logout = ({ close, idUser }) => {
  const dispatch = useDispatch();

  const onLogout = idUser => {
    dispatch(logout(idUser));
    toast.success('Log out successfull', {
      position: toast.POSITION.TOP_RIGHT,
    });
    close();
  };
  const screenSize = useMedia(
    ['(min-width: 1280px)', '(min-width: 768px)', '(min-width: 480px)'],
    ['desktop', 'tablet', 'mobile'],
    'xs'
  );

  const isSmallMobile = screenSize === 'xs';
  const isMobile = screenSize === 'mobile';
  const isTablet = screenSize === 'tablet';
  const isDesktop = screenSize === 'desktop';

  return (
    <ContainerView>
      <Title as="h2">Already leaving?</Title>
      {isSmallMobile && (
        <>
          <ButtonWrap>
            <Button
              type="button"
              onClick={close}
              h="40"
              style={{
                marginBottom: '8px',
                width: '100%',
              }}
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={() => onLogout(idUser)}
              h="40"
              shape="solid"
              g="8"
              style={{
                width: '100%',
                maxWidth: '256px',
              }}
            >
              Yes
              <Icon id="logout" s="#FEF9F9" />
            </Button>
          </ButtonWrap>
        </>
      )}
      {isMobile && (
        <>
          <ButtonWrap>
            <Button
              type="button"
              onClick={close}
              w="256"
              h="40"
              style={{
                marginBottom: '8px',
              }}
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={() => onLogout(idUser)}
              w="256"
              h="40"
              shape="solid"
              g="8"
            >
              Yes
              <Icon id="logout" s="#FEF9F9" />
            </Button>
          </ButtonWrap>
        </>
      )}
      {isTablet && (
        <>
          <ButtonWrap>
            <Button
              type="button"
              onClick={close}
              w="129"
              h="40"
              style={{
                marginRight: '17px',
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
        </>
      )}
      {isDesktop && (
        <>
          <ButtonWrap>
            <Button
              type="button"
              onClick={close}
              w="129"
              h="40"
              style={{
                marginRight: '17px',
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
        </>
      )}
      {/* {isMobile ? (
        <>
          <ButtonWrap>
            <Button
              type="button"
              onClick={close}
              w="256"
              h="40"
              style={{
                marginBottom: '8px',
              }}
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={() => onLogout(idUser)}
              // w="256"
              h="40"
              shape="solid"
              g="8"
              style={{
                width: '100%',
                // maxWidth: '256px',
              }}
            >
              Yes
              <Icon id="logout" s="#FEF9F9" />
            </Button>
          </ButtonWrap>
        </>
      ) : (
        <>
          <ButtonWrap>
            <Button
              type="button"
              onClick={close}
              w="129"
              h="40"
              // style={{
              //   marginRight: '17px',
              // }}
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
        </>
      )} */}
    </ContainerView>
  );
};

export default Logout;
