import React from 'react';

import Search from 'shared/components/Search/Search';
import Title from 'shared/components/Title';
import { Cover } from './NoticesSearch.styles';
import { getNotices } from 'utils/ApiNotices';

const NoticesSearch = ({ setItems }) => {
  return (
    <Cover>
      <Title>Find your favorite pet</Title>
      <Search onFormSubmit={getNotices} setItems={setItems} />
    </Cover>
  );
};

export default NoticesSearch;
