import Button from 'shared/components/Button';
import {
  Title,
  ContainerView,
  ButtonWrap,
  PetCardData,
  PetImage,
  PetDataListWrap,
  PetDataList,
  PetDataItem,
  PetComents,
  Wrap,
} from './PetCard.styles';

import Icon from 'shared/components/Icon';

const PetCard = ({ pet, close, approve }) => {
  return (
    <ContainerView>
      <PetCardData>
        <Wrap>
          <PetImage></PetImage>
          <PetDataListWrap>
            <Title as="h2">
              Сute dog looking <br />
              for a home
            </Title>
            <PetDataList>
              <PetDataItem>Name: {}</PetDataItem>
              <PetDataItem>Birthday: {}</PetDataItem>
              <PetDataItem>Breed: {}</PetDataItem>
              <PetDataItem>Place: {}</PetDataItem>
              <PetDataItem>The sex: {}</PetDataItem>
              <PetDataItem>Email: {}</PetDataItem>
              <PetDataItem>Phone: {}</PetDataItem>
            </PetDataList>
          </PetDataListWrap>
        </Wrap>
        <PetComents>
          Comments: Rich would be the perfect addition to an active family that
          loves to play and go on walks. I bet he would love having a doggy
          playmate too!
        </PetComents>
      </PetCardData>
      <ButtonWrap>
        <Button
          type="button"
          onBtnClick={close}
          w="256"
          h="40"
          style={{
            marginBottom: '8px',
          }}
        >
          Cancel
        </Button>
        <Button
          type="button"
          onBtnClick={approve}
          w="256"
          h="40"
          shape="solid"
          g="8"
        >
          Add to
          <Icon id="heart" s="white" />
        </Button>
      </ButtonWrap>
    </ContainerView>
  );
};

export default PetCard;
