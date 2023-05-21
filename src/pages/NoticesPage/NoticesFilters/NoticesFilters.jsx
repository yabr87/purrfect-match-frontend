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

const NoticesFilters = React.memo(({ setSex, setSearchParams }) => {
  const isUpToWidth480 = useMedia(['(max-width: 480px)'], [true], false);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  // const [isAgeOpen, setIsAgeOpen] = useState(false);
  // const [isGenderOpen, setIsGenderOpen] = useState(false);
  // const [age, setAge] = useState(null);

  const { t } = useTranslation();

  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  // const handleAgeClick = () => {
  //   setIsAgeOpen(!isAgeOpen);
  // };

  // const handleGenderClick = () => {
  //   setIsGenderOpen(!isGenderOpen);
  // };

  const handleAgeChange = event => {
    //console.log('handleAgeChange:', event);
    // const value = event.target.value;
    // setAge(prevState =>
    //   prevState.includes(value)
    //     ? prevState.filter(item => item !== value)
    //     : [...prevState, value]
    // );
    // fetchData();
  };

  const ageFilterItems = [
    { label: `3-12${t('m')}`, value: 'young' },
    { label: `1 ${t('year')}`, value: 'adult' },
    { label: `2 ${t('years')}`, value: 'old' },
  ];

  const genderFilterItems = [
    { label: `${t('male')}`, value: 'male' },
    { label: `${t('female')}`, value: 'female' },
  ];

  const [isMaleChecked, setIsMaleChecked] = useState(false);
  const [isFemaleChecked, setIsFemaleChecked] = useState(false);

  const handleGenderChange = event => {
    const gender = event.values.length > 0 ? event.values[0] : null;
    //const isChecked = event.target.checked;
    //const gender = event.target.value;
    //setSearchParams({ page: 1, sex: isChecked ? gender : null });
    //setSex(isChecked ? gender : null);
    //setIsMaleChecked(gender === 'male' && isChecked);
    //setIsFemaleChecked(gender === 'female' && isChecked);

    setSearchParams({ page: 1, sex: gender });
    setSex(gender);
    setIsMaleChecked(gender === 'male');
    setIsFemaleChecked(gender === 'female');
  };

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
            <Filter
              filters={genderFilterItems}
              title={t('By_gender')}
              name="sex"
              isSingleSelection={true}
              onChange={handleGenderChange}
            ></Filter>
            <Filter
              filters={ageFilterItems}
              title={t('By_age')}
              name="age"
              isSingleSelection={false}
              onChange={handleAgeChange}
            ></Filter>
          </div>
        </FilterOptions>
      )}
    </FilterContainer>
  );
});

export default NoticesFilters;
