import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Title,
  PetContainer,
  PetAvatar,
  PetHeader,
  PetWrap,
  PetInfoWrap,
  PetInfoItem,
  PetInfoTitle,
  NoPetMessage,
  DelPetBtn,
} from './';
import Button from 'shared/components/Button';
import Icon from 'shared/components/Icon/Icon';
import { reverseISODate } from 'utils/reverseISODate';
import { deleteMyPet, fetchMyPets } from 'redux/pets/myPetsOperations';
import { selectMyPets } from 'redux/pets/myPetsSelectors';

import ModalApproveAction from 'components/ModalApproveAction';
import Delete from 'components/ModalApproveAction/Delete';
import { toast } from 'react-toastify';

const PetsData = () => {
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

  const { results: pets = [] } = useSelector(selectMyPets);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchMyPets());
  }, [dispatch]);

  const handleClick = () => {
    navigate('/add-pet', { replace: true });
  };

  const handleDeletePet = item => {
    dispatch(deleteMyPet(item._id));
    setIsModalDeleteOpen(false);
    document.body.style.overflow = '';

    toast.success(`${item.name}: ${t('alert_pet_removed')}`);
  };

  const handleModalOpen = () => {
    setIsModalDeleteOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleModalClose = () => {
    setIsModalDeleteOpen(false);
    document.body.style.overflow = '';
  };

  const petCard = item => (
    <PetContainer key={item._id}>
      <PetAvatar src={item.photoUrl} />
      <PetInfoWrap>
        <DelPetBtn onClick={() => handleModalOpen(item)}>
          <Icon id="trash" s="#54ADFF" />
        </DelPetBtn>
        <PetInfoItem>
          <PetInfoTitle>{t('Name')}:</PetInfoTitle> {item.name}
        </PetInfoItem>
        <PetInfoItem>
          <PetInfoTitle>{t('Date_of_Birth')}:</PetInfoTitle>{' '}
          {reverseISODate(item.birthday)}
        </PetInfoItem>
        <PetInfoItem>
          <PetInfoTitle>{t('Breed')}:</PetInfoTitle> {item.breed}
        </PetInfoItem>
        <PetInfoItem>
          <PetInfoTitle>{t('Comments')}:</PetInfoTitle> {item.comments}
        </PetInfoItem>
      </PetInfoWrap>
      {isModalDeleteOpen && (
        <ModalApproveAction close={() => setIsModalDeleteOpen(false)}>
          <Delete
            itemName={item.name}
            approve={() => handleDeletePet(item)}
            close={handleModalClose}
          />
        </ModalApproveAction>
      )}
    </PetContainer>
  );

  return (
    <PetWrap>
      <PetHeader>
        <Title>{t('My_pets')}:</Title>
        <Button onClick={handleClick} type="button" shape="solid" g="8">
          <p>{t('Add_pet')}</p>
          <Icon id="plus-small" s="#FEF9F9" />
        </Button>
      </PetHeader>
      {pets.length ? (
        pets.map(item => petCard(item))
      ) : (
        <NoPetMessage>{t('No_pats_yet')} 😔</NoPetMessage>
      )}
    </PetWrap>
  );
};

export default PetsData;
