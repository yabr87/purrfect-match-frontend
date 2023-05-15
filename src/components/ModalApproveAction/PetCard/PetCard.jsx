import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

// useLocation;

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
} from './PetCard.styles';

import { useMedia } from 'shared/hooks/useMedia';

import Icon from 'shared/components/Icon';

import useAuth from 'shared/hooks/useAuth';

// import data from './data.json';

const PetCard = ({ id, close }) => {
  const { isLoggedIn } = useAuth();
  const [fill, setFill] = useState('transparent');
  //   const [favorite, setFavorite] = useState('false');

  const screenSize = useMedia(
    ['(min-width: 1280px)', '(min-width: 768px)', '(min-width: 480px)'],
    ['desktop', 'tablet', 'mobile'],
    'xs'
  );
  //   const isTablet = screenSize === 'tablet';
  //   const isDesktop = screenSize === 'desktop';
  const isMobile = screenSize === 'mobile';

  //   const location = useLocation();

  //   const from = location.state?.from || '/notices/sell';

  const navigate = useNavigate();

  const approveAddFavorite = () => {
    if (!isLoggedIn) {
      alert('Please sign in to add to favorites');
      return;
    }
    setFill('#ffffff');
    // setFavorite('true');
    navigate(-1);
  };
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
                  <ValueCategory>mail</ValueCategory>
                </PetDataItem>
                <PetDataItem>
                  <NameCategory>Email:</NameCategory>
                  <ValueCategory
                    $colorContacts="#FFC107"
                    $underline="underline"
                  >
                    3223224@mail.com
                  </ValueCategory>
                </PetDataItem>
                <PetDataItem>
                  <NameCategory>Phone:</NameCategory>
                  <ValueCategory
                    $colorContacts="#FFC107"
                    $underline="underline"
                  >
                    +38097-654-098-98
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
              onClick={approveAddFavorite}
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
              Cancel
            </Button>
          </ButtonWrap>
        </>
      ) : (
        <>
          <ButtonWrap>
            <Button
              type="button"
              onClick={approveAddFavorite}
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
            <Button type="button" onClick={close} w="129" h="40">
              Cancel
            </Button>
          </ButtonWrap>
        </>
      )}
    </ContainerView>
  );
};

export default PetCard;
