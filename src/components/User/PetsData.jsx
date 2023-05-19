import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
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
import { deleteMyPet, fetchMyPets } from 'redux/pets/myPetsOperations';

const PetsData = () => {
  const [pets, setPets] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setPets(dispatch(fetchMyPets()));
  }, [dispatch]);

  const handleClick = () => {
    console.log('add new pet');
  };

  const handleDeletePet = () => {
    dispatch(deleteMyPet());
  };

  const petCard = item => {
    <PetContainer>
      <PetAvatar />
      <PetInfoWrap>
        <DelPetBtn onClick={handleDeletePet}>
          <Icon id="trash" s="#54ADFF" />
        </DelPetBtn>
        <PetInfoItem>
          <PetInfoTitle>Name:</PetInfoTitle> {item.name}
        </PetInfoItem>
        <PetInfoItem>
          <PetInfoTitle>Date of Birth:</PetInfoTitle> {item.birthday}
        </PetInfoItem>
        <PetInfoItem>
          <PetInfoTitle>Breed:</PetInfoTitle> {item.breed}
        </PetInfoItem>
        <PetInfoItem>
          <PetInfoTitle>Comments:</PetInfoTitle> {item.comments}
        </PetInfoItem>
      </PetInfoWrap>
    </PetContainer>;
  };

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
