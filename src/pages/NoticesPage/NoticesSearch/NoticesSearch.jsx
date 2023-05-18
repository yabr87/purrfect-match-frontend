import React from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import Search from 'shared/components/Search/Search';
import Title from 'shared/components/Title';
// import { Cover } from './NoticesSearch.styles';
import { getNotices } from 'utils/ApiNotices';

const NoticesSearch = ({
  setItems,
  setTotalPages,
  setFetching,
  setCurrentPage,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { categoryName } = useParams();
  const onSubmit = values => {
    const params = { page: 1, title: values.search };
    if (['sell', 'lost-found', 'for-free'].includes(categoryName)) {
      params.category = categoryName;
    }
    if (categoryName === 'favorite') {
      params.favorite = true;
    }
    if (categoryName === 'own') {
      params.own = true;
    }
    setCurrentPage(1);
    getNotices(params)
      .then(({ data }) => {
        setItems(data.results);
        setTotalPages(data.totalPages);
      })
      .catch(e => console.log(e))
      .finally(setFetching(false));

    setSearchParams(params);
  };
  return (
    <>
      <Title>Find your favorite pet</Title>
      <Search onFormSubmit={onSubmit} />
    </>
  );
};

export default NoticesSearch;
