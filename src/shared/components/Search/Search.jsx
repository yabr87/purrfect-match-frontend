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
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Search = ({ onFormSubmit, setCurrentPage, setQuery }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get('title');
  const search = searchParams.get('search');
  const { t } = useTranslation();

  const clearSearchParam = () => {
    setQuery(null);
    searchParams.delete('title');
    searchParams.delete('page');
    searchParams.delete('search');
    setSearchParams(searchParams);
    setCurrentPage(1);
  };

  const validation = Yup.object({
    search: Yup.string().trim('Type something').required('Type something'),
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
      initialValues={{ search: title || search || '' }}
      onSubmit={onFormSubmit}
      validationSchema={validation}
    >
      {props => (
        <SearchForm autoComplete="off">
          <SearchInput
            name="search"
            type="text"
            placeholder={t('Search')}
            onBlur={() => props.setErrors(null)}
          />
          <FormError name="search" />
          <IconBlock>
            <IconButton type="submit">
              <Icon id="search" f="#54ADFF" s="none" />
            </IconButton>
            {props.values.search && (
              <IconButton
                type="button"
                onClick={() => {
                  props.setValues({ search: '' });
                  clearSearchParam();
                }}
              >
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
