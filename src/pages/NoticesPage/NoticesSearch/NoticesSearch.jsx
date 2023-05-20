import React from 'react';
import { useTranslation } from 'react-i18next';

import Search from 'shared/components/Search/Search';
import Title from 'shared/components/Title';

const NoticesSearch = ({ setCurrentPage, setSearchParams, setTitle }) => {
  const { t } = useTranslation();

  const onSubmit = values => {
    const params = { page: 1, title: values.search };
    setCurrentPage(1);
    setTitle(values.search);
    setSearchParams(params);
  };

  return (
    <>
      <Title>{t('Find_your_favorite_pet')}</Title>
      <Search
        onFormSubmit={onSubmit}
        setCurrentPage={setCurrentPage}
        setQuery={setTitle}
      />
    </>
  );
};

export default NoticesSearch;
