import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
  console.log(pets);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchMyPets());
  }, [dispatch]);

  const handleClick = () => {
    navigate('/add-pet', { replace: true });
  };

  const handleDeletePet = item => {
    dispatch(deleteMyPet(item._id));
    setIsModalDeleteOpen(false);
    toast.success(`${item.name}: remove`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const petCard = item => (
    <PetContainer key={item._id}>
      <PetAvatar src={item.photoUrl} />
      <PetInfoWrap>
        <DelPetBtn onClick={() => setIsModalDeleteOpen(true)}>
          <Icon id="trash" s="#54ADFF" />
        </DelPetBtn>
        <PetInfoItem>
          <PetInfoTitle>Name:</PetInfoTitle> {item.name}
        </PetInfoItem>
        <PetInfoItem>
          <PetInfoTitle>Date of Birth:</PetInfoTitle>{' '}
          {reverseISODate(item.birthday)}
        </PetInfoItem>
        <PetInfoItem>
          <PetInfoTitle>Breed:</PetInfoTitle> {item.breed}
        </PetInfoItem>
        <PetInfoItem>
          <PetInfoTitle>Comments:</PetInfoTitle> {item.comments}
        </PetInfoItem>
      </PetInfoWrap>
      {isModalDeleteOpen && (
        <ModalApproveAction close={() => setIsModalDeleteOpen(false)}>
          <Delete
            approve={() => handleDeletePet(item)}
            close={() => setIsModalDeleteOpen(false)}
          />
        </ModalApproveAction>
      )}
    </PetContainer>
  );

  return (
    <>
      <PetWrap>
        <PetHeader>
          <Title>My pets:</Title>
          <Button onClick={handleClick} type="button" shape="solid" g="8">
            <p>Add pet</p>
            <Icon id="plus-small" s="#FEF9F9" />
          </Button>
        </PetHeader>
        {pets.length ? (
          pets.map(item => petCard(item))
        ) : (
          <NoPetMessage>You have no own added pets yet 😔</NoPetMessage>
        )}
      </PetWrap>
    </>
  );
};

export default PetsData;
