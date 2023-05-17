import React, { useState } from 'react';
import useAuth from 'shared/hooks/useAuth';

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
} from './NoticeModal.styles';

import { useMedia } from 'shared/hooks/useMedia';

import Icon from 'shared/components/Icon';

import { updateFavoriteNotice } from '../../../utils/ApiNotices';
import { calculateAge } from 'utils/calculateAge';

const NoticeModal = ({ notice, close }) => {
  const { isLoggedIn } = useAuth();
  const [favorite, setFavorite] = useState(!!notice.favorite);

  const screenSize = useMedia(
    ['(min-width: 1280px)', '(min-width: 768px)', '(min-width: 480px)'],
    ['desktop', 'tablet', 'mobile'],
    'xs'
  );

  const isMobile = screenSize === 'mobile';

  const approveAddFavorite = async notice => {
    try {
      if (!isLoggedIn) {
        alert('Please sign in to add to favorites');
        return;
      }
      if (!notice || !notice._id) {
        console.error('Notice is undefined or does not have an _id property');
        return;
      }

      const updateToFavorite = {
        favorite: !notice.favorite,
      };
      await updateFavoriteNotice(notice._id, updateToFavorite);
      notice.favorite = !favorite;
      setFavorite(!favorite);
    } catch (error) {
      alert('Failed to update notice. Please try again later.');
    }
  };

  return (
    <ContainerView>
      <PetCardData>
        <Wrap>
          <PetImage src={notice.photoUrl} alt={notice.title} />
          <PetDataListWrap>
            <Title
              as="h3"
              color="#000000"
              letterSpacing="-0.01em"
              align="start"
              tabSize="28"
              tabLine={1.357}
              deskSize="28"
            >
              Сute dog looking <br />
              for a home
            </Title>
            <PetDataList>
              <tbody>
                <PetDataItem>
                  <NameCategory>Name:</NameCategory>
                  <ValueCategory>{notice.name}</ValueCategory>
                </PetDataItem>
                <PetDataItem>
                  <NameCategory>Birthday:</NameCategory>
                  <ValueCategory>{calculateAge(notice.birthday)}</ValueCategory>
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
                      3223224@mail.com
                    </ContactLinkItem>
                  </ValueCategory>
                </PetDataItem>
                <PetDataItem>
                  <NameCategory>Phone:</NameCategory>
                  <ValueCategory>
                    <ContactLinkItem href="tel:">
                      +38097-654-098-98
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
            <Button
              type="button"
              onClick={close}
              w="256"
              h="40"
              style={{
                marginBottom: '8px',
              }}
            >
              Contact
            </Button>
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
              style={{
                marginRight: '12px',
              }}
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

// import { useNavigate, useLocation } from 'react-router-dom';
// const location = useLocation();

// const from = location.state?.from || '/notices/sell';

// const navigate = useNavigate();

// console.log(navigate(-1));
