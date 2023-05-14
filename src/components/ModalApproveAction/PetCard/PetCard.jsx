import React, { useState } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

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
} from './PetCard.styles';

import { useMedia } from 'shared/hooks/useMedia';

import Icon from 'shared/components/Icon';

import useAuth from 'shared/hooks/useAuth';

const PetCard = ({ id, close }) => {
  const { isLoggedIn } = useAuth();
  const [fill, setFill] = useState('transparent');
  const [favorite, setFavorite] = useState('false');

  const screenSize = useMedia(
    ['(min-width: 1280px)', '(min-width: 768px)', '(min-width: 460px)'],
    ['desktop', 'tablet', 'mobile'],
    'xs'
  );
  const isTablet = screenSize === 'tablet';
  const isDesktop = screenSize === 'desktop';
  const isMobile = screenSize === 'mobile';

  const location = useLocation();

  const from = location.state?.from || '/notices/sell';

  const navigate = useNavigate();

  const approveAddFavorite = () => {
    if (!isLoggedIn) {
      alert('Please sign in to add to favorites');
      return;
    }
    setFill('#ffffff');
    setFavorite('true');
    navigate(from);
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
              <PetDataItem>Name: {}</PetDataItem>
              <PetDataItem>Birthday: {}</PetDataItem>
              <PetDataItem>Breed: {}</PetDataItem>
              <PetDataItem>Place: {}</PetDataItem>
              <PetDataItem>The sex: {}</PetDataItem>
              <PetDataItem>Email: {}</PetDataItem>
              <PetDataItem>Phone: {}</PetDataItem>
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
