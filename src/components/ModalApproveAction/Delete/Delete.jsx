import { useTranslation } from 'react-i18next';
import { useMedia } from 'shared/hooks/useMedia';
import Button from 'shared/components/Button';
import {
  Text,
  TextAccent,
  ContainerView,
  ButtonWrap,
  TextWrap,
  Title,
} from './Delete.styles';

import Icon from 'shared/components/Icon';

const Delete = ({ close, approve }) => {
  const screenSize = useMedia(
    ['(min-width: 1280px)', '(min-width: 768px)', '(min-width: 480px)'],
    ['desktop', 'tablet', 'mobile'],
    'xs'
  );
  const { t } = useTranslation();

  const isSmallMobile = screenSize === 'xs';
  const isMobile = screenSize === 'mobile';
  const isTablet = screenSize === 'tablet';
  const isDesktop = screenSize === 'desktop';

  return (
    <ContainerView>
      <Title>{t('Delete_adverstiment')}?</Title>
      <TextWrap>
        <Text>
          {t('Are_you_sure_to_delete')}{' '}
          <TextAccent>“Cute dog looking for a home”</TextAccent>? <br />
          {t('You_cant_undo_this_action')}.
        </Text>
      </TextWrap>
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
              {t('Cancel')}
            </Button>
            <Button
              type="button"
              onClick={approve}
              h="40"
              shape="solid"
              g="8"
              style={{
                width: '100%',
                maxWidth: '256px',
              }}
            >
              {t('Yes')}
              <Icon id="trash" s="#FEF9F9" />
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
              onClick={approve}
              w="256"
              h="40"
              shape="solid"
              g="8"
            >
              {t('Yes')}
              <Icon id="trash" s="#FEF9F9" />
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
              onClick={approve}
              w="129"
              h="40"
              shape="solid"
              g="8"
            >
              {t('Yes')}
              <Icon id="trash" s="#FEF9F9" />
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
              onClick={approve}
              w="129"
              h="40"
              shape="solid"
              g="8"
            >
              {t('Yes')}
              <Icon id="trash" s="#FEF9F9" />
            </Button>
          </ButtonWrap>
        </>
      )}
    </ContainerView>
  );
};

export default Delete;
