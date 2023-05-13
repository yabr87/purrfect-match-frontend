import Container from 'shared/components/Container';
import Section from 'shared/components/Section';
import Title from 'shared/components/Title';
// import Search from 'shared/components/Search';

const NewsPage = () => {
  return (
    <Container>
      <Section>
        <Title>News</Title>
        {/* <Search /> */}

        <div
          style={{
            width: '250px',
            outline: '1px solid red',
            position: 'relative',
          }}
        ></div>
      </Section>
    </Container>
  );
};

export default NewsPage;
