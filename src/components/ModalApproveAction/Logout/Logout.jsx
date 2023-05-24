import { useDispatch } from 'react-redux';
import { useMedia } from 'shared/hooks/useMedia';
import { useTranslation } from 'react-i18next';

import Button from 'shared/components/Button';
import { Title, ContainerView, ButtonWrap } from './Logout.styles';

import Icon from 'shared/components/Icon';

import { logout } from 'redux/auth/authOperations';

const Logout = ({ close, idUser }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onLogout = idUser => {
    dispatch(logout(idUser));
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
      <Title>{t('Already_leaving')}?</Title>
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
                maxWidth: '256px',
              }}
            >
              {t('Cancel')}
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
              {t('Yes')}
              <Icon id="logout" />
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
              {t('Cancel')}
            </Button>
            <Button
              type="button"
              onClick={() => onLogout(idUser)}
              w="256"
              h="40"
              shape="solid"
              g="8"
            >
              {t('Yes')}
              <Icon id="logout" />
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
              {t('Cancel')}
            </Button>
            <Button
              type="button"
              onClick={() => onLogout(idUser)}
              w="129"
              h="40"
              shape="solid"
              g="8"
            >
              {t('Yes')}
              <Icon id="logout" />
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
              {t('Cancel')}
            </Button>
            <Button
              type="button"
              onClick={() => onLogout(idUser)}
              w="129"
              h="40"
              shape="solid"
              g="8"
            >
              {t('Yes')}
              <Icon id="logout" />
            </Button>
          </ButtonWrap>
        </>
      )}
    </ContainerView>
  );
};

export default Logout;
