import { useState, useEffect } from 'react';
import Loader from 'shared/components/Loader';
import Container from 'shared/components/Container';
import Title from 'shared/components/Title';
import Search from 'shared/components/Search';
import NewsList from './NewsList';
import Pagination from 'shared/hooks/pagination';
// import Button from 'shared/components/Button';

import { getAllNews } from 'utils/ApiNews';
import { useSearchParams } from 'react-router-dom';

const NewsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(() => {
    const page = searchParams.get('page');
    return page ? Number(page) : 1;
  });
  const [fetching, setFetching] = useState(false);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    setFetching(true);
    const params = { page: currentPage };

    if (search) {
      params.search = search;
    }
    const fetchNews = async params => {
      try {
        const { data } = await getAllNews(params);
        setNews(data.results);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.log(error);
      } finally {
        setFetching(false);
      }
    };
    fetchNews(params);
  }, [currentPage, search]);

  const onSubmit = async values => {
    const params = { page: 1, search: values.search };
    try {
      const { data } = await getAllNews(params);
      setNews(data.results);
      setTotalPages(data.totalPages);
      setCurrentPage(1);
    } catch (error) {
      console.log(error);
    } finally {
      setFetching(false);
    }
    setSearchParams(params);
  };

  // setNews(pageItems);
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
      <Title>News</Title>
      <Search onFormSubmit={onSubmit} setItems={setNews} />

      {/* {error && <p>{error.message}</p>} */}

      {/* {loading && <div>Loading...</div>} */}
      {fetching && <Loader />}
      {Boolean(news.length) ? (
        <NewsList items={news} />
      ) : (
        <div>There is no result</div>
      )}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          setFetching={setFetching}
        />
      )}
      {/* <Button onClick={loadMore}>Load more</Button> */}
    </Container>
  );
};

export default NewsPage;
