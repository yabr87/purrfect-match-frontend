import { useState, useEffect, useCallback } from 'react';

import NewsList from '../NewsList';
import CircleButton from 'shared/components/CircleButton';
import { getAllNews } from 'utils/ApiNews';

const NewsPage = () => {
  const [items, setItems] = useState([]);
  // const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    const fetchAllNews = async () => {
      try {
        setLoading(true);
        //       const { hits } = await getAllNews(query, page);
        const data = await getAllNews(page);
        // console.log('data:', data);

        setItems([...data.results]);
        // setItems(prevItems => [...prevItems, ...data.results]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllNews();
  }, [page]);

  const loadMore = useCallback(() => {
    setPage(prevPage => prevPage + 1);
  }, []);

  return (
    <>
      {error && <p>{error.message}</p>}

      {loading && !error && <div>Loading...</div>}

      {Boolean(items.length) && !error && <NewsList items={items} />}
      <CircleButton onClick={loadMore}>{page}</CircleButton>
    </>
  );
};

export default NewsPage;
