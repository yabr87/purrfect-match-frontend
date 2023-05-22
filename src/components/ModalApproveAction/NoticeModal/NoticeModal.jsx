import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useAuth from 'shared/hooks/useAuth';
import { useMedia } from 'shared/hooks/useMedia';

import Button from 'shared/components/Button';
import {
  Title,
  ContainerView,
  ButtonWrap,
  PetCardData,
  PetImage,
  PetDataListWrap,
  PetDataList,
  PetDataItem,
  PetComents,
  Wrap,
  NameCategory,
  ValueCategory,
  ContactLink,
  ContactLinkItem,
  ImageCategory,
  ImageContainer,
  ImageWrap,
  PetDataListBody,
} from './NoticeModal.styles';

import Icon from 'shared/components/Icon';

import { getNoticeById } from 'utils/ApiNotices';
import { updateFavoriteNotice } from '../../../utils/ApiNotices';

const NoticeModal = ({ notice, close, setIsFavorite }) => {
  const { isLoggedIn } = useAuth();
  const [favorite, setFavorite] = useState(!!notice.favorite);
  const [ownerContacts, setOwnerContacts] = useState({ email: '', phone: '' });
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

  useEffect(() => {
    getNoticeById(notice._id)
      .then(res => {
        if (res.owner) {
          setOwnerContacts(res.owner);
        }
      })
      .catch(e => console.log(e));
  }, [notice._id]);

  const approveAddFavorite = async notice => {
    try {
      if (!isLoggedIn) {
        alert(t('alert_signin_fav'));
        return;
      }

      const updateToFavorite = {
        favorite: !notice.favorite,
      };
      await updateFavoriteNotice(notice._id, updateToFavorite);
      notice.favorite = !favorite;
      setFavorite(!favorite);
      setIsFavorite(notice._id);
    } catch (error) {
      alert(t('alert_failed_update'));
    }
  };

  const formatBirthdayDate = date => {
    return format(Date.parse(date), 'dd.MM.yyyy');
  };

  return (
    <ContainerView>
      <PetCardData>
        <Wrap>
          <ImageContainer>
            <ImageWrap>
              <PetImage src={notice.photoUrl} alt={notice.title} />
              <ImageCategory>
                {notice.category
                  .replace('for-free', 'for free')
                  .replace(/-/g, '/')}
              </ImageCategory>
            </ImageWrap>
          </ImageContainer>

          <PetDataListWrap>
            <Title>{notice.title}</Title>
            <PetDataList>
              <PetDataListBody>
                <PetDataItem>
                  <NameCategory>{t('Name')}:</NameCategory>
                  <ValueCategory>{notice.name}</ValueCategory>
                </PetDataItem>
                <PetDataItem>
                  <NameCategory>{t('Birthday')}:</NameCategory>
                  <ValueCategory>
                    {formatBirthdayDate(notice.birthday)}
                  </ValueCategory>
                </PetDataItem>
                <PetDataItem>
                  <NameCategory>{t('Breed')}:</NameCategory>
                  <ValueCategory>{notice.breed}</ValueCategory>
                </PetDataItem>
                <PetDataItem>
                  <NameCategory>{t('Place')}:</NameCategory>
                  <ValueCategory>{notice.location}</ValueCategory>
                </PetDataItem>
                <PetDataItem>
                  <NameCategory>{t('The_sex')}:</NameCategory>
                  <ValueCategory>{notice.sex}</ValueCategory>
                </PetDataItem>
                {notice.category === 'sell' && (
                  <PetDataItem>
                    <NameCategory>{t('Price')}:</NameCategory>
                    <ValueCategory>{notice.price}$</ValueCategory>
                  </PetDataItem>
                )}
                <PetDataItem>
                  <NameCategory>{t('Email')}:</NameCategory>
                  <ValueCategory>
                    <ContactLinkItem href="mailto:">
                      {ownerContacts.email ? ownerContacts.email : 'no email'}
                    </ContactLinkItem>
                  </ValueCategory>
                </PetDataItem>
                <PetDataItem>
                  <NameCategory>{t('Phone')}:</NameCategory>
                  <ValueCategory>
                    <ContactLinkItem href="tel:">
                      {ownerContacts.phone
                        ? ownerContacts.phone
                        : 'no phone number'}
                    </ContactLinkItem>
                  </ValueCategory>
                </PetDataItem>
              </PetDataListBody>
            </PetDataList>
          </PetDataListWrap>
        </Wrap>
        <PetComents>
          {t('Comments')}: {notice.comments}
        </PetComents>
      </PetCardData>
      {isSmallMobile && (
        <ButtonWrap>
          <Button
            type="button"
            onClick={() => approveAddFavorite(notice)}
            h="40"
            shape="solid"
            g="8"
            style={{
              marginBottom: '8px',
              width: '100%',
              maxWidth: '256px',
            }}
          >
            {t('Add_to')}
            <Icon
              id="heart"
              f={favorite ? '#ffffff' : 'transparent'}
              s="white"
            />
          </Button>
          <ContactLink type="button" href="tel:+380961111111">
            {t('Contact')}
          </ContactLink>
        </ButtonWrap>
      )}
      {isMobile && (
        <ButtonWrap>
          <Button
            type="button"
            onClick={() => approveAddFavorite(notice)}
            h="40"
            shape="solid"
            g="8"
            style={{
              marginBottom: '8px',
              width: '100%',
              maxWidth: '256px',
            }}
          >
            {t('Add_to')}
            <Icon
              id="heart"
              f={favorite ? '#ffffff' : 'transparent'}
              s="white"
            />
          </Button>
          <ContactLink type="button" href="tel:+380961111111">
            {t('Contact')}
          </ContactLink>
        </ButtonWrap>
      )}
      {isTablet && (
        <ButtonWrap>
          <Button
            type="button"
            onClick={() => approveAddFavorite(notice)}
            w="129"
            h="40"
            shape="solid"
            g="8"
          >
            {t('Add_to')}
            <Icon
              id="heart"
              f={favorite ? '#ffffff' : 'transparent'}
              s="white"
            />
          </Button>
          <ContactLink href="tel:+380961111111">{t('Contact')}</ContactLink>
        </ButtonWrap>
      )}
      {isDesktop && (
        <ButtonWrap>
          <Button
            type="button"
            onClick={() => approveAddFavorite(notice)}
            w="129"
            h="40"
            shape="solid"
            g="8"
          >
            {t('Add_to')}
            <Icon
              id="heart"
              f={favorite ? '#ffffff' : 'transparent'}
              s="white"
            />
          </Button>
          <ContactLink href="tel:+380961111111">{t('Contact')}</ContactLink>
        </ButtonWrap>
      )}
    </ContainerView>
  );
};

export default NoticeModal;
