import React from 'react';
// import Section from 'shared/components/Section';
import Search from 'shared/components/Search/Search';
import Title from 'shared/components/Title';
import axios from 'axios';
import { Cover } from './NoticesSearch.styles';

const NoticesSearch = ({ categoryName }) => {
  const getPetBySerch = async (title, category = 'sell') => {
    const { data } = await axios.get(
      'https://purrfect-match.onrender.com/api/notices',
      {
        params: {
          title,
          category,
        },
      }
    );
    return data;
  };
  const handleSubmit = (values, action) => {
    console.log(values);
    getPetBySerch(values.search, categoryName);
  };
  return (
    <Cover>
      <Title>Find your favorite pet</Title>
      <Search initValue={{ search: '' }} handleSubmit={handleSubmit} />
    </Cover>
  );
};

export default NoticesSearch;
