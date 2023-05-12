import React from 'react';
// import Section from 'shared/components/Section';
import Search from 'shared/components/Search/Search';
import Title from 'shared/components/Title';
import { Cover } from './NoticesSearch.styles';

const NoticesSearch = () => {
  const handleSubmit = (values, action) => {
    console.log(values);
  };
  return (
    <Cover>
      <Title>Find your favorite pet</Title>
      <Search initValue={{ search: '' }} handleSubmit={handleSubmit} />
    </Cover>
  );
};

export default NoticesSearch;
