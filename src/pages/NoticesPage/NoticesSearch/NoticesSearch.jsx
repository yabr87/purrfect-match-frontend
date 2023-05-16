import React from 'react';
// import Section from 'shared/components/Section';
import Search from 'shared/components/Search/Search';
import Title from 'shared/components/Title';
// import { Cover } from './NoticesSearch.styles';

const NoticesSearch = () => {
  const handleSubmit = (values, action) => {
    console.log(action);

    // getPetBySerch(values.search );

    // export const getPetBySerch = async (query, category = "sell", page = 1) => {
    //   const { data } = await instance.get('/', {
    //     params: {
    //       query,
    //       category,
    //       page,
    //     },
    //   });
    //   return data;
    // };
  };
  return (
    <>
      <Title>Find your favorite pet</Title>
      <Search initValue={{ search: '' }} handleSubmit={handleSubmit} />
    </>
  );
};

export default NoticesSearch;
