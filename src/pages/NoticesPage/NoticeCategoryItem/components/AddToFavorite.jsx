import React, { useState } from 'react';
import useAuth from 'shared/hooks/useAuth';
import { updateFavoriteNotice } from 'utils/ApiNotices';

import CircleButton from 'shared/components/CircleButton';

const AddToFavorite = ({ notice, setIsFavorite }) => {
  const { isLoggedIn } = useAuth();
  const isFavorite = notice.favorite;

  const [isHovered, setIsHovered] = useState(false);

  const handleUpdate = async () => {
    try {
      if (!isLoggedIn) {
        alert('Please sign in to add to favorites');
        return;
      }

      const updatedIsFavorite = !isFavorite;
      const updateToFavorite = {
        favorite: updatedIsFavorite,
      };

      await updateFavoriteNotice(notice._id, updateToFavorite);
      setIsFavorite(notice._id);
    } catch (error) {
      alert('Failed to update notice. Please try again later.');
    }
  };

  return (
    <CircleButton
      id="heart"
      z="999"
      pos="absolute"
      t="12px"
      r="12px"
      onClick={handleUpdate}
      f={
        isHovered ? '#CCE4FB' : isLoggedIn && isFavorite ? '#54adff' : '#CCE4FB'
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    ></CircleButton>
  );
};

export default AddToFavorite;
