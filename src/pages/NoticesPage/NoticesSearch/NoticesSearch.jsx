import React from 'react';

import Search from 'shared/components/Search/Search';
import Title from 'shared/components/Title';
import { Cover } from './NoticesSearch.styles';
import { getPetBySerch } from '../NoticesPage';

const NoticesSearch = () => {
  return (
    <Cover>
      <Title>Find your favorite pet</Title>
      <Search onFormSubmit={getPetBySerch} />
    </Cover>
  );
};

export default NoticesSearch;
