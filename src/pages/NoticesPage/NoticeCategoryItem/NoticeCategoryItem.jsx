import React, { useState } from 'react';
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
const AddToFavorite = () => {
  const isAuthenticated = true;

  const handleisAuthenticated = () => {
    if (!isAuthenticated) {
      alert('Please sign in to add to favorites');
    }
  };

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
      style={{ width: '100%', marginTop: '20px' }}
      onMouseEnter={() => setIsHoveredOrFocused(true)}
      onMouseLeave={() => setIsHoveredOrFocused(false)}
      onFocus={() => setIsHoveredOrFocused(true)}
      onBlur={() => setIsHoveredOrFocused(false)}
    >
      Learn More
      {isHoveredOrFocused && <Icon id="paw" f="#FEF9F9" w="24" h="24" />}
    </Button>
  );
};

const NoticeCategoryItem = ({ notice }) => {
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
        <LearnMore />
      </BelowItemContainer>
    </Card>
  );
};

export default NoticeCategoryItem;
