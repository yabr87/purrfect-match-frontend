import Container from 'shared/components/Container';
import { Title, Pictures, PicturesContainer } from './MainPage.styles';

const MainPage = () => {
  return (
    <Container>
      <Title>Take good care of your small pets</Title>
      <PicturesContainer>
        <Pictures />
      </PicturesContainer>
    </Container>
  );
};

export default MainPage;
