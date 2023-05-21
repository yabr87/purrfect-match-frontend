import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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

import EditModal from 'components/ModalApproveAction/EditModal';
// import ModalNoticeTest from '../NoticeModalTest/NoticeModalTest';
// _____________Modal Componenets________________
import ModalApproveAction from 'components/ModalApproveAction';
import NoticeModal from 'components/ModalApproveAction/NoticeModal';
import Delete from 'components/ModalApproveAction/Delete';
import LearnMore from './components/LearnMore';
import AddToFavorite from './components/AddToFavorite';
import { toast } from 'react-toastify';

const NoticeCategoryItem = ({ notice, deleteAndRefresh, setNotices }) => {
  const { isLoggedIn, user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);

  const { t } = useTranslation();

  const { categoryName } = useParams();
  const setIsFavorite = async id => {
    const updatedNotice = await getNoticeById(id);

    setNotices(prevNotices => {
      const notices = [...prevNotices];
      notices.find(notice => notice._id === id).favorite =
        updatedNotice.favorite;
      return notices;
    });

    if (!updatedNotice.favorite && categoryName === 'favorite') {
      setNotices(prevNotices =>
        prevNotices.filter(notice => notice._id !== id)
      );
    }
  };

  const handleDelete = async notice => {
    try {
      await deleteNotice(notice._id);
      deleteAndRefresh(notice._id);
      toast.success(`${notice.title}: ${t('alert_pet_removed')}`);
    } catch (error) {
      toast.warn(t('alert_failed_delete'));
    }
  };

  const handleEdit = async id => {
    try {
      console.log('Pet is edited');
      // await editNotice(id)
    } catch (error) {
      alert(t('alert_failed_update'));
    }
  };

  return (
    <Card>
      <AddToFavorite notice={notice} setIsFavorite={setIsFavorite} />
      <CardImageContainer>
        <CardImage src={notice.photoUrl} alt={notice.title} />
        <ImageCategory>
          {notice.category
            .replace('for-free', `${t('for_free')}`)
            .replace(/-/g, '/')}
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
          <NoticeModal
            notice={notice}
            close={() => setIsModalOpen(false)}
            setIsFavorite={setIsFavorite}
          />
        </ModalApproveAction>
      )}
      {isLoggedIn && user && notice.own && (
        <>
          <CircleButton
            id="trash"
            z="8"
            pos="absolute"
            t="68px"
            r="12px"
            onClick={() => setIsModalDeleteOpen(true)}
          />
          <CircleButton
            id="edit"
            s="none"
            f="currentColor"
            z="9"
            pos="absolute"
            t="124px"
            r="12px"
            onClick={() => setIsModalEditOpen(true)}
          />
        </>
      )}
      {isModalDeleteOpen && (
        <ModalApproveAction close={() => setIsModalDeleteOpen(false)}>
          <Delete
            approve={() => handleDelete(notice)}
            close={() => setIsModalDeleteOpen(false)}
          />
        </ModalApproveAction>
      )}
      {isModalEditOpen && (
        <ModalApproveAction close={() => setIsModalEditOpen(false)}>
          <EditModal
            notice={notice}
            approve={() => handleEdit(notice._id)}
            close={() => setIsModalEditOpen(false)}
          />
        </ModalApproveAction>
      )}
      {isModalEditOpen && (
        <ModalApproveAction close={() => setIsModalEditOpen(false)}>
          <EditModal
            notice={notice}
            approve={() => handleEdit(notice._id)}
            close={() => setIsModalEditOpen(false)}
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
