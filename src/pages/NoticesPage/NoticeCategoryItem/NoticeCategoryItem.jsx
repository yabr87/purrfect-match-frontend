import PropTypes from 'prop-types';

import React, { useState } from 'react';
import useAuth from 'shared/hooks/useAuth';

import { deleteNotice } from '../../../utils/ApiNotices';
import { getNoticeById } from '../../../utils/ApiNotices';
import { calculateAge } from 'utils/calculateAge';

import {
  Card,
  CardImage,
  ImageDetails,
  CardImageContainer,
  ImageDetailsItem,
  ImageCategory,
  PhotoDescription,
  BelowItemContainer,
  ImageDetailsText,
  ImageDetailsTextLong,
} from './NoticeCategoryItem.styles';

import Icon from 'shared/components/Icon/Icon';
import CircleButton from 'shared/components/CircleButton';

// import ModalNoticeTest from '../NoticeModalTest/NoticeModalTest';
// _____________Modal Componenets________________
import ModalApproveAction from 'components/ModalApproveAction';
import NoticeModal from 'components/ModalApproveAction/NoticeModal';
import Delete from 'components/ModalApproveAction/Delete';
import LearnMore from './components/LearnMore';
import AddToFavorite from './components/AddToFavorite';

const NoticeCategoryItem = ({ notice, deleteAndRefresh, setNotices }) => {
  const { isLoggedIn, user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

  // const dispatch = useDispatch();

  // const setIsFavorite = favorite => {
  //   setNotices(prevNotices => {
  //     const notices = [...prevNotices];
  //     notices.find(({ _id }) => notice._id === _id).favorite = favorite;
  //     return notices;
  //   });
  // };

  const setIsFavorite = async id => {
    // получаю обновленный ноутис по признаку фаворит
    const updatedNotice = await getNoticeById(id);

    if (updatedNotice.favorite) {
      // если  ноутис фаворит, обновляю ноутисы
      setNotices(prevNotices => {
        const notices = [...prevNotices];
        const noticeToUpdate = notices.find(notice => notice._id === id);

        if (noticeToUpdate) {
          noticeToUpdate.favorite = updatedNotice.favorite;
        }

        return notices;
      });
    } else {
      // если ноутис не фаворит, удаляю из рендера
      setNotices(prevNotices =>
        prevNotices.filter(notice => notice._id !== id)
      );
    }
  };

  const handleDelete = async id => {
    try {
      await deleteNotice(id);
      deleteAndRefresh(id);
    } catch (error) {
      alert('Failed to delete notice. Please try again later.');
    }
  };

  return (
    <Card>
      <AddToFavorite notice={notice} setIsFavorite={setIsFavorite} />
      <CardImageContainer>
        <CardImage src={notice.photoUrl} alt={notice.title} />
        <ImageCategory>
          {notice.category.replace('for-free', 'for free').replace(/-/g, '/')}
        </ImageCategory>

        <ImageDetails>
          <ImageDetailsItem>
            <Icon id="location" h="18" w="18" s="#54ADFF" />
            {notice.location.length > 4 ? (
              <ImageDetailsTextLong>{notice.location}</ImageDetailsTextLong>
            ) : (
              <ImageDetailsText>{notice.location}</ImageDetailsText>
            )}
          </ImageDetailsItem>
          <ImageDetailsItem>
            <Icon id="clock" h="18" w="18" s="#54ADFF" />
            {calculateAge(notice.birthday)}
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
        <PhotoDescription>{notice.title}</PhotoDescription>
        <LearnMore onButtonClick={() => setIsModalOpen(true)} />
      </BelowItemContainer>
      {/* {isModalOpen && <ModalNoticeTest close={() => setIsModalOpen(false)} />} */}
      {isModalOpen && (
        <ModalApproveAction close={() => setIsModalOpen(false)}>
          <NoticeModal notice={notice} close={() => setIsModalOpen(false)} />
        </ModalApproveAction>
      )}
      {isLoggedIn && user && notice.own && (
        <CircleButton
          id="trash"
          z="999"
          pos="absolute"
          t="68px"
          r="12px"
          onClick={() => setIsModalDeleteOpen(true)}
        ></CircleButton>
      )}
      {isModalDeleteOpen && (
        <ModalApproveAction close={() => setIsModalDeleteOpen(false)}>
          <Delete
            approve={() => handleDelete(notice._id)}
            close={() => setIsModalDeleteOpen(false)}
          />
        </ModalApproveAction>
      )}
    </Card>
  );
};

export default NoticeCategoryItem;

NoticeCategoryItem.propTypes = {
  notice: PropTypes.shape({
    photoUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    birthday: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date),
    ]).isRequired,
    sex: PropTypes.oneOf(['male', 'female']).isRequired,
    own: PropTypes.bool.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  deleteAndRefresh: PropTypes.func.isRequired,
  setNotices: PropTypes.func.isRequired,
};
