import Container from 'shared/components/Container';
import Section from 'shared/components/Section';
import Title from 'shared/components/Title';
// import Search from 'shared/components/Search';
import NewsList from './NewsList';

import items from './items.json';

const NewsPage = () => {
  return (
    <Container>
      <Section>
        <Title>News</Title>
        {/* <Search ininitValue={{ search: '' }} /> */}

        <div
          style={{
            width: '250px',
            outline: '1px solid red',
            position: 'relative',
          }}
        ></div>
        <NewsList items={items} />
      </Section>
    </Container>
  );
};

export default NewsPage;
