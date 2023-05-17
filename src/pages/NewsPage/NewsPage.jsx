import Container from 'shared/components/Container';
import Title from 'shared/components/Title';
import Search from 'shared/components/Search';
import News from './News';

const NewsPage = () => {
  return (
    <Container>
      <Title>News</Title>
      <Search />
      <News />
    </Container>
  );
};

export default NewsPage;
