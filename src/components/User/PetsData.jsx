import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Title,
  PetContainer,
  PetAvatar,
  PetHeader,
  PetWrap,
  PetInfoWrap,
  PetInfoItem,
  PetInfoTitle,
  DelPetBtn,
} from './';
import Button from 'shared/components/Button';
import Icon from 'shared/components/Icon/Icon';
import { deleteMyPet, fetchMyPets } from 'redux/pets/myPetsOperations';
import { selectMyPets } from 'redux/pets/myPetsSelectors';

const PetsData = () => {
  const { results: pets = [] } = useSelector(selectMyPets);
  console.log(pets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyPets());
  }, [dispatch]);

  const handleClick = () => {
    console.log('add new pet');
  };

  const handleDeletePet = id => {
    dispatch(deleteMyPet(id));
  };

  const petCard = item => (
    <PetContainer key={item._id}>
      <PetAvatar />
      <PetInfoWrap>
        <DelPetBtn onClick={() => handleDeletePet(item._id)}>
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
          <p>You have no own added pets yet(</p>
        )}
      </PetWrap>
    </>
  );
};

export default PetsData;
