import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Loader from 'shared/components/Loader';
import Container from 'shared/components/Container';
import Title from 'shared/components/Title';
import Search from 'shared/components/Search';
import NewsList from './NewsList';
import Pagination from 'shared/components/Pagination';

import { getAllNews } from 'utils/ApiNews';
import { useSearchParams } from 'react-router-dom';

import { NoSearchResult } from 'shared/components/Search/Search.styles';

const NewsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('search');
  const [search, setSearch] = useState(() => {
    return query ? query : null;
  });
  const page = searchParams.get('page');
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(() => {
    return page ? Number(page) : 1;
  });
  const [fetching, setFetching] = useState(false);
  const [totalPages, setTotalPages] = useState(null);
  const [error, setError] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    const params = {};
    if (page) {
      params.page = currentPage;
    }
    if (search) {
      params.search = search;
    }

    const fetchNews = async params => {
      try {
        setError(false);
        setFetching(true);
        const { data } = await getAllNews(params);
        setNews(data.results);
        setTotalPages(data.totalPages);
      } catch (error) {
        setError(error);
      } finally {
        setFetching(false);
      }
    };

    fetchNews(params);
  }, [currentPage, search, page]);

  const onSubmit = values => {
    const params = { page: 1, search: values.search };
    setSearch(values.search);
    setCurrentPage(1);
    setSearchParams(params);
  };

  return (
    <Container>
      <Title>{t('News')}</Title>
      <Search
        onFormSubmit={onSubmit}
        setCurrentPage={setCurrentPage}
        setQuery={setSearch}
      />
      {error && <p>{error.message}</p>}
      {fetching && (
        <div
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%, -65%)',
            zIndex: 1000,
          }}
        >
          <Loader />
        </div>
      )}
      {Boolean(news.length) ? (
        <NewsList items={news} />
      ) : (
        !fetching && <NoSearchResult>{t('No_result')}</NoSearchResult>
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
