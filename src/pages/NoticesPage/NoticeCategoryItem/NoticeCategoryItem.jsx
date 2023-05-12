import React from 'react';
import {
  Card,
  CardImage,
  ImageDetails,
  CardImageContainer,
  ImageDetailsItem,
  ImageCategory,
  PhotoDescription,
  BelowItemContainer,
} from './NoticeCategoryItem.styles';

import Button from 'shared/components/Button';
const AddToFavorite = () => {
  const isAuthenticated = false;

  const handleisAuthenticated = () => {
    if (!isAuthenticated) {
      alert('Please sign in to add to favorites');
    }
  };

  return (
    isAuthenticated && (
      <Button
        style={{
          zIndex: '999',
          position: 'absolute',
          width: '40px',
          height: '40px',
          right: '12px',
          top: '12px',
          background: ' #cce4fb',
          borderRadius: '50%',
          border: '1px solid',
          outline: 'none',
        }}
        onClick={handleisAuthenticated}
      >
        ❤️
      </Button>
    )
  );
};

const LearnMore = () => {
  // Заготовка для кнопки
  return (
    <Button style={{ width: '100%', marginTop: '20px' }}>Learn More</Button>
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
          <ImageDetailsItem>{notice.location}</ImageDetailsItem>
          <ImageDetailsItem>{notice.age}</ImageDetailsItem>
          <ImageDetailsItem>{notice.sex}</ImageDetailsItem>
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
