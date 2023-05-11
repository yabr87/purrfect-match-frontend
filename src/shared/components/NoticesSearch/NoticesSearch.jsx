import React from 'react';
import { SearchInput } from './Search.styles';
import clear from '../../../svg/clear.svg';
import search from '../../../svg/search.svg';

import { Form, Formik } from 'formik';
const NoticesSearch = () => {
  const handleSubmit = (values, action) => {
    // console.log(values);
    // console.log(action);
  };

  return (
    <Formik
      initialValues={{ search: '' }}
      onClick={(v, a) => {
        console.log(v, a);
      }}
      onSubmit={handleSubmit}
    >
      <Form style={{ width: '608px', height: '44px' }}>
        <SearchInput name="search" type="text" placeholder="Search" />
        <button
          style={{
            cursor: 'pointer',
            width: '24px',
            height: '24px',
            border: 'none',
            padding: 0,
            backgroundColor: 'transparent',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // position: 'absolute',
          }}
          type="submit"
        >
          <img src={search} alt="search" />
        </button>
        <div style={{ cursor: 'pointer', width: '24px', height: '24px' }}>
          <img src={clear} alt="clear" />
        </div>
      </Form>
    </Formik>
  );
};

export default NoticesSearch;
