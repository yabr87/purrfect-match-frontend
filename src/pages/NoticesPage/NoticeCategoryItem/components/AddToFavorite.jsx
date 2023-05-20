import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useAuth from 'shared/hooks/useAuth';
import { updateFavoriteNotice } from 'utils/ApiNotices';

import CircleButton from 'shared/components/CircleButton';

const AddToFavorite = ({ notice, setIsFavorite }) => {
  const [favorite, setFavorite] = useState(!!notice.favorite);
  const { isLoggedIn } = useAuth();
  const { t } = useTranslation();

  const [isHovered, setIsHovered] = useState(false);

  const handleUpdate = async () => {
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

  return (
    <CircleButton
      id="heart"
      z="9"
      pos="absolute"
      t="12px"
      r="12px"
      onClick={handleUpdate}
      f={
        isHovered
          ? '#CCE4FB'
          : isLoggedIn && notice.favorite
          ? '#54adff'
          : '#CCE4FB'
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    ></CircleButton>
  );
};

export default AddToFavorite;
