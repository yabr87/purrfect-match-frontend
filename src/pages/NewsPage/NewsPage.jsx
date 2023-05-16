// import { useState, useEffect, useCallback } from 'react';

import Container from 'shared/components/Container';
import Section from 'shared/components/Section';
import Title from 'shared/components/Title';
// import SearchTemporary from './SearchTemporary';
// import Search from 'shared/components/Search';
import NewsList from './NewsList';
// import Button from 'shared/components/Button';

// import { getAllNews } from 'utils/news-api';

import items from './items.json';

const NewsPage = () => {
  // const [items, setItems] = useState([]);
  // const [query, setQuery] = useState('');
  // const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const onFormSubmit = useCallback(
  //   search => {
  //     if (search === query) return;
  //     setQuery(search);
  //     setPage(1);
  //     setItems([]);
  //     setError(null);
  //   },
  //   [query]
  // );

  // useEffect(() => {
  //   const fetchAllNews = async () => {
  //     try {
  //       setLoading(true);
  //       const { hits } = await getAllNews(query, page);
  //       // setItems([...hits]);
  //       console.log('hits:', hits);
  //       setItems(prevItems => [...prevItems, ...hits]);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchAllNews();
  // }, [page]);

  // const loadMore = useCallback(() => {
  //   setPage(prevPage => prevPage + 1);
  // }, []);

  return (
    <Container>
      <Section>
        <Title>News</Title>
        <div>Search Form</div>

        {/* <SearchTemporary onFormSubmit={onFormSubmit} /> */}
        {/* <Search ininitValue={{ search: '' }} /> */}

        {/* {error && <p>{error.message}</p>} */}

        {/* {loading && <div>Loading...</div>} */}

        {Boolean(items.length) && <NewsList items={items} />}
        {/* <Button onClick={loadMore}>Load more</Button> */}
      </Section>
    </Container>
  );
};

export default NewsPage;
