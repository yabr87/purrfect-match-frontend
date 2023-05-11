import React from 'react';
import {
  SearchForm,
  SearchInput,
  IconBlock,
  IconButton,
  IconSearchBar,
} from './Search.styles';
import clear from 'svg/clear.svg';
import search from 'svg/search.svg';

import { Formik } from 'formik';
const NoticesSearch = () => {
  const handleSubmit = (values, action) => {
    console.log(values);
  };

  return (
    <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
      {props => (
        <SearchForm>
          <SearchInput name="search" type="text" placeholder="Search" />
          <IconBlock>
            <IconButton type="submit">
              <IconSearchBar src={search} alt="search" />
            </IconButton>
            <IconButton type="button" onClick={props.resetForm}>
              <IconSearchBar src={clear} alt="clear" />
            </IconButton>
          </IconBlock>
        </SearchForm>
      )}
    </Formik>
  );
};

export default NoticesSearch;
