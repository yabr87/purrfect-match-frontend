import React from 'react';

import Search from 'shared/components/Search/Search';
import Title from 'shared/components/Title';

const NoticesSearch = ({ setCurrentPage, setSearchParams, setTitle }) => {
  const onSubmit = values => {
    const params = { page: 1, title: values.search };
    setCurrentPage(1);
    setTitle(values.search);
    setSearchParams(params);
  };

  return (
    <>
      <Title>Find your favorite pet</Title>
      <Search
        onFormSubmit={onSubmit}
        setCurrentPage={setCurrentPage}
        setQuery={setTitle}
      />
    </>
  );
};

export default NoticesSearch;
