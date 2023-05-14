import React from 'react';
import {
  SearchForm,
  SearchInput,
  IconBlock,
  IconButton,
} from './Search.styles';
import Icon from 'shared/components/Icon';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Search = ({ initValue, handleSubmit }) => {
  const validation = Yup.object({
    search: Yup.string().required('Type something'),
  });

  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={message => (
          <p style={{ color: 'tomato', marginLeft: '20px' }}>{message}</p>
        )}
      />
    );
  };

  return (
    <Formik
      initialValues={initValue}
      onSubmit={handleSubmit}
      validationSchema={validation}
    >
      {props => (
        <SearchForm>
          <SearchInput
            name="search"
            type="text"
            placeholder="Search"
            onBlur={() => props.setErrors(null)}
          />
          <FormError name="search" />
          <IconBlock>
            <IconButton type="submit">
              <Icon id="search" f="#54ADFF" s="none" />
            </IconButton>
            {props.values.search && (
              <IconButton type="button" onClick={props.resetForm}>
                <Icon id="cross" s="#FFC107" style={{ strokeWidth: '1.5px' }} />
              </IconButton>
            )}
          </IconBlock>
        </SearchForm>
      )}
    </Formik>
  );
};

export default Search;
