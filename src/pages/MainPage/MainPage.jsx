import Container from 'shared/components/Container';
import { Title, Pictures, SectionWrapper } from './MainPage.styles';

const MainPage = () => {
  return (
    <SectionWrapper>
      <Container>
        <Title>Take good care of your small pets</Title>
      </Container>
      <Pictures />
    </SectionWrapper>
  );
};

export default MainPage;
