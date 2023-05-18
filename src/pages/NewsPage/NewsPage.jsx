import { useState, useEffect } from 'react';
import Loader from 'shared/components/Loader';
import Container from 'shared/components/Container';
import Title from 'shared/components/Title';
import Search from 'shared/components/Search';
import NewsList from './NewsList';
import Pagination from 'shared/hooks/pagination';

import { getAllNews } from 'utils/ApiNews';
import { useSearchParams } from 'react-router-dom';

const NewsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(() => {
    const page = searchParams.get('page');
    return page && window.innerWidth > 480 ? Number(page) : 1;
  });
  const [fetching, setFetching] = useState(true);
  const [totalPages, setTotalPages] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
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
        setError(error);
        console.log(error);
      } finally {
        setFetching(false);
      }
    };
    fetchNews(params);
    setFetching(false);
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

  return (
    <Container>
      <Title>News</Title>
      <Search onFormSubmit={onSubmit} setItems={setNews} />
      {error && <p>{error.message}</p>}
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
    </Container>
  );
};

export default NewsPage;
