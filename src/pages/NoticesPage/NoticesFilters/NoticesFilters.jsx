import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Button from 'shared/components/Button';
import Icon from 'shared/components/Icon';

import { useMedia } from 'shared/hooks/useMedia';
import CircleButton from 'shared/components/CircleButton';
import {
  FilterContainer,
  FilterOptions,
  FiltersTitle,
} from './NoticesFilters.styles';
import Filter from '../../../shared/components/Filter/Filter';
import MultiFilter from '../../../shared/components/Filter/MultiFilter';

const NoticesFilters = React.memo(({ setSex, setAge, filters, setSearchParams }) => {
  const isUpToWidth480 = useMedia(['(max-width: 480px)'], [true], false);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { t } = useTranslation();

  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleAgeChange = event => {
    const ageValues = event.values;
    setAge(ageValues);
    // setSearchParams({ page: 1, age: ageValues });
  };

  const handleGenderChange = event => {
    const gender = event.values.length > 0 ? event.values[0] : null;
    setSex(gender);
    // setSearchParams({ page: 1, sex: gender });
  };

  const ageFilterItems = [
    { label: `0-12 ${t('months')}`, value: '0' },
    { label: `1 ${t('year')}`, value: '1' },
    { label: `from 2 ${t('years')}`, value: '2' },
  ];

  const genderFilterItems = [
    { label: `${t('male')}`, value: 'male' },
    { label: `${t('female')}`, value: 'female' },
  ];*/

  let filterssss = [
    {
      name: 'age',
      title: 'By age',
      isSingleSelection: false,
      options: [
        { label: `1${t('year')}`, value: '1' },
        { label: `2 ${t('year')}`, value: '2' },
        { label: `3 ${t('years')}`, value: '3' }
      ]
    },
    {
      name: 'gender',
      title: 'By gender',
      isSingleSelection: true,
      options: [
        { label: `${t('male')}`, value: 'male' },
        { label: `${t('female')}`, value: 'female' }
      ]
    }
  ];

  return (
    <FilterContainer
      style={{
        position: 'relative',
      }}
    >
      {isUpToWidth480 ? (
        <CircleButton
          id="filters"
          t="0"
          r="0"
          style={{
            width: 40,
            height: 40,
          }}
          onClick={handleFilterClick}
        ></CircleButton>
      ) : isFilterOpen ? (
        <Button type="button" w="152" shape="solid" onClick={handleFilterClick}>
          {t('Filter')}
          <Icon id="filters" />
        </Button>
      ) : (
        <Button w="152" onClick={handleFilterClick}>
          {t('Filter')}
          <Icon id="filters" />
        </Button>
      )}
      {isFilterOpen && (
        <FilterOptions>
          <FiltersTitle>{t('Filters')}</FiltersTitle>
          <div style={{ position: 'relative' }}>
            <MultiFilter
              filters={filterssss}
              name="sex"
              onChange={handleGenderChange}
            ></MultiFilter>
          </div>
        </FilterOptions>
      )}
    </FilterContainer>
  );
});

export default NoticesFilters;
