import Icon from 'shared/components/Icon/Icon';
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
// import Button from 'shared/components/Button';
// import Icon from 'shared/components/Icon/Icon';

const PetsData = () => {
  // const handleClick = () => {
  //   console.log('add new pet');
  // };

  return (
    <>
      <PetWrap>
        <PetHeader>
          <Title>My pets:</Title>
          {/* <Button onClick={handleClick} type="button">
        <Icon id="cross-small" s={props => props.theme.colors.background} />
      </Button> */}
        </PetHeader>
        <PetContainer>
          <PetAvatar />
          <PetInfoWrap>
            <DelPetBtn>
              <Icon id="trash" s="#54ADFF" />
            </DelPetBtn>
            <PetInfoItem>
              <PetInfoTitle>Name:</PetInfoTitle> ...
            </PetInfoItem>
            <PetInfoItem>
              <PetInfoTitle>Date of Birth:</PetInfoTitle> ...
            </PetInfoItem>
            <PetInfoItem>
              <PetInfoTitle>Breed:</PetInfoTitle> ...
            </PetInfoItem>
            <PetInfoItem>
              <PetInfoTitle>Comments:</PetInfoTitle> ...
            </PetInfoItem>
          </PetInfoWrap>
        </PetContainer>
      </PetWrap>
    </>
  );
};

export default PetsData;
