import React, { useState, useEffect } from 'react';
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

const NoticeModal = ({ notice, close }) => {
  const { isLoggedIn } = useAuth();
  const [fill, setFill] = useState('transparent');
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    if (notice.favorite === true) {
      setFavorite(true);
      setFill('#ffffff');
    }
  }, [notice.favorite]);

  const screenSize = useMedia(
    ['(min-width: 1280px)', '(min-width: 768px)', '(min-width: 480px)'],
    ['desktop', 'tablet', 'mobile'],
    'xs'
  );
  //   const isTablet = screenSize === 'tablet';
  //   const isDesktop = screenSize === 'desktop';
  const isMobile = screenSize === 'mobile';

  const approveAddFavorite = async notice => {
    try {
      if (!isLoggedIn) {
        alert('Please sign in to add to favorites');
        return;
      }
      setFavorite(current => !current);
      console.log(favorite);
      if (favorite === true) {
        setFill('#ffffff');
      }
      if (favorite === false) {
        setFill('transparent');
      }
      if (!notice || !notice._id) {
        console.error('Notice is undefined or does not have an _id property');
        return;
      }
      const updateToFavorite = {
        favorite: !notice.favorite,
      };
      await updateFavoriteNotice(notice._id, updateToFavorite);
    } catch (error) {
      alert('Failed to update notice. Please try again later.');
    }
  };

  // const approveAddFavorite = async notice => {
  //   try {
  //     if (!isLoggedIn) {
  //       alert('Please sign in to add to favorites');
  //       return;
  //     }
  // if (!notice || !notice._id) {
  //   console.error('Notice is undefined or does not have an _id property');
  //   return;
  // }
  // const updateToFavorite = {
  //   favorite: !notice.favorite,
  // };
  // await updateFavoriteNotice(notice._id, updateToFavorite);
  //   } catch (error) {
  //     alert('Failed to update notice. Please try again later.');
  //   }
  // };

  console.log(favorite);

  return (
    <ContainerView>
      <PetCardData>
        <Wrap>
          <PetImage />
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
                  <ValueCategory>Pet</ValueCategory>
                </PetDataItem>
                <PetDataItem>
                  <NameCategory>Birthday:</NameCategory>
                  <ValueCategory>21.12.20</ValueCategory>
                </PetDataItem>
                <PetDataItem>
                  <NameCategory>Breed:</NameCategory>
                  <ValueCategory>York</ValueCategory>
                </PetDataItem>
                <PetDataItem>
                  <NameCategory>Place:</NameCategory>
                  <ValueCategory>Kyiv</ValueCategory>
                </PetDataItem>
                <PetDataItem>
                  <NameCategory>The sex:</NameCategory>
                  <ValueCategory>male</ValueCategory>
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
        <PetComents>
          Comments: Rich would be the perfect addition to an active family that
          loves to play and go on walks. I bet he would love having a doggy
          playmate too!
        </PetComents>
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
              <Icon id="heart" f={fill} s="white" />
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
              <Icon id="heart" f={fill} s="white" />
            </Button>
            {/* <Button type="button" onClick={close} w="129" h="40">
              Contact
            </Button> */}
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
