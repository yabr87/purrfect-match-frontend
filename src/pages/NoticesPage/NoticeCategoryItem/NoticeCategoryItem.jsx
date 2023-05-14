
import React, { useState, useCallback } from 'react';
import useAuth from 'shared/hooks/useAuth';
import {
  Card,
  CardImage,
  ImageDetails,
  CardImageContainer,
  ImageDetailsItem,
  ImageCategory,
  PhotoDescription,
  BelowItemContainer,
  AddToFavoriteBtn,
} from './NoticeCategoryItem.styles';

import Icon from 'shared/components/Icon/Icon';
import Button from 'shared/components/Button';

import ModalNoticeTest from '../NoticeModalTest/NoticeModalTest';

const AddToFavorite = () => {
  const isAuthenticated = true;
  const { isLoggedIn } = useAuth();
  const [fill, setFill] = useState('transparent');

  const handleisAuthenticated = useCallback(() => {
    if (!isLoggedIn) {
      alert('Please sign in to add to favorites');
      return;
    }
  }, [isLoggedIn]);

  const handleMouseOver = useCallback(() => {
    if (isLoggedIn) {
      setFill('#54adff');
    }
  }, [isLoggedIn]);

  const handleMouseOut = useCallback(() => {
    if (isLoggedIn) {
      setFill('transparent');
    }
  }, [isLoggedIn]);

  return (
    isAuthenticated && (
      <AddToFavoriteBtn onClick={handleisAuthenticated}>
        <Icon id="heart" h="22" w="22" s="#54ADFF" strokeWidth="1.5" />
      </AddToFavoriteBtn>
    )
  );
};

const LearnMore = () => {
  const [isHoveredOrFocused, setIsHoveredOrFocused] = useState(false);
  // Заготовка для кнопки
  return (
    <Button
      style={{
        zIndex: 999,
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        right: 12,
        top: 12,
        background: '#cce4fb',
        borderRadius: '50%',
        border: 'none',
        outline: 'none',
        transition: 'fill 250ms ease',
      }}
      onMouseEnter={handleMouseOver}
      onFocus={handleMouseOver}
      onMouseLeave={handleMouseOut}
      onBlur={handleMouseOut}
      onClick={handleisAuthenticated}
    >
      <Icon id="heart" h="22" w="22" f={fill} s="#54ADFF" strokeWidth="1.5" />
    </Button>
  );
};

const LearnMore = ({ onButtonClick }) => {
  const [isHoveredOrFocused, setIsHoveredOrFocused] = useState(false);
  );
};

const NoticeCategoryItem = ({ notice }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <Card>
      <AddToFavorite />
      <CardImageContainer>
        <CardImage src={notice.imageUrl} alt={notice.description} />
        <ImageCategory>
          {notice.category.replace('for-free', 'for free').replace(/-/g, '/')}
        </ImageCategory>

        <ImageDetails>
          <ImageDetailsItem>
            <Icon id="location" h="18" w="18" s="#54ADFF" />
            {notice.location}
          </ImageDetailsItem>
          <ImageDetailsItem>
            <Icon id="clock" h="18" w="18" s="#54ADFF" />
            {notice.age}
          </ImageDetailsItem>
          <ImageDetailsItem>
            {notice.sex === 'male' ? (
              <Icon id="male" h="18" w="18" s="#54ADFF" />
            ) : (
              <Icon id="female" h="18" w="18" s="#54ADFF" />
            )}
            {notice.sex}
          </ImageDetailsItem>
        </ImageDetails>
      </CardImageContainer>
      <BelowItemContainer>
        <PhotoDescription>{notice.description}</PhotoDescription>
        <LearnMore onButtonClick={() => setIsModalOpen(true)} />
      </BelowItemContainer>
      {isModalOpen && <ModalNoticeTest close={() => setIsModalOpen(false)} />}
    </Card>
  );
};

export default NoticeCategoryItem;
