import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';
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

  // const isSmallMobile = screenSize === 'xs';
  const isMobile = screenSize === 'mobile';
  // const isTablet = screenSize === 'tablet';
  // const isDesktop = screenSize === 'desktop';

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
        alert('Please sign in to add to favorites');
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
      alert('Failed to update notice. Please try again later.');
    }
  };

  const formatBirthdayDate = date => {
    return format(Date.parse(date), 'dd.MM.yyyy');
  };

  return (
    <ContainerView>
      <PetCardData>
        <Wrap>
          <PetImage src={notice.photoUrl} alt={notice.title} />
          <ImageCategory>
            {notice.category.replace('for-free', 'for free').replace(/-/g, '/')}
          </ImageCategory>
          <PetDataListWrap>
            <Title>{notice.title}</Title>
            <PetDataList>
              <tbody>
                <PetDataItem>
                  <NameCategory>Name:</NameCategory>
                  <ValueCategory>{notice.name}</ValueCategory>
                </PetDataItem>
                <PetDataItem>
                  <NameCategory>Birthday:</NameCategory>
                  <ValueCategory>
                    {formatBirthdayDate(notice.birthday)}
                  </ValueCategory>
                </PetDataItem>
                <PetDataItem>
                  <NameCategory>Breed:</NameCategory>
                  <ValueCategory>{notice.breed}</ValueCategory>
                </PetDataItem>
                <PetDataItem>
                  <NameCategory>Place:</NameCategory>
                  <ValueCategory>{notice.location}</ValueCategory>
                </PetDataItem>
                <PetDataItem>
                  <NameCategory>The sex:</NameCategory>
                  <ValueCategory>{notice.sex}</ValueCategory>
                </PetDataItem>
                <PetDataItem>
                  <NameCategory>Email:</NameCategory>
                  <ValueCategory>
                    <ContactLinkItem href="mailto:">
                      {ownerContacts.email ? ownerContacts.email : 'no email'}
                    </ContactLinkItem>
                  </ValueCategory>
                </PetDataItem>
                <PetDataItem>
                  <NameCategory>Phone:</NameCategory>
                  <ValueCategory>
                    <ContactLinkItem href="tel:">
                      {ownerContacts.phone
                        ? ownerContacts.phone
                        : 'no phone number'}
                    </ContactLinkItem>
                  </ValueCategory>
                </PetDataItem>
              </tbody>
            </PetDataList>
          </PetDataListWrap>
        </Wrap>
        <PetComents>Comments: {notice.comments}</PetComents>
      </PetCardData>

      {isMobile ? (
        <>
          <ButtonWrap>
            <Button
              type="button"
              onClick={() => approveAddFavorite(notice)}
              w="256"
              h="40"
              shape="solid"
              g="8"
            >
              Add to
              <Icon
                id="heart"
                f={favorite ? '#ffffff' : 'transparent'}
                s="white"
              />
            </Button>
            <ContactLink type="button" href="tel:+380961111111">
              Contact
            </ContactLink>
          </ButtonWrap>
        </>
      ) : (
        <>
          <ButtonWrap>
            <Button
              type="button"
              onClick={() => approveAddFavorite(notice)}
              w="129"
              h="40"
              shape="solid"
              g="8"
            >
              Add to
              <Icon
                id="heart"
                f={favorite ? '#ffffff' : 'transparent'}
                s="white"
              />
            </Button>
            <ContactLink href="tel:+380961111111">Contact</ContactLink>
          </ButtonWrap>
        </>
      )}
    </ContainerView>
  );
};

export default NoticeModal;
