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

function NoticesFilters({ setSex, setSearchParams }) {
  const isUpToWidth480 = useMedia(['(max-width: 480px)'], [true], false);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isAgeOpen, setIsAgeOpen] = useState(false);
  const [isGenderOpen, setIsGenderOpen] = useState(false);
  // const [age, setAge] = useState(null);

  const { t } = useTranslation();

  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleAgeClick = () => {
    setIsAgeOpen(!isAgeOpen);
  };

  const handleGenderClick = () => {
    setIsGenderOpen(!isGenderOpen);
  };

  const handleAgeChange = event => {
    console.log('handleAgeChange:', event);
    // const value = event.target.value;
    // setAge(prevState =>
    //   prevState.includes(value)
    //     ? prevState.filter(item => item !== value)
    //     : [...prevState, value]
    // );
    // fetchData();
  };

  const ageFilterItems = [
    { label: '3-12m', value: 'young' },
    { label: '1 year', value: 'adult' },
    { label: '2 years', value: 'old' },
  ];

  const genderFilterItems = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ];

  const [isMaleChecked, setIsMaleChecked] = useState(false);
  const [isFemaleChecked, setIsFemaleChecked] = useState(false);

  const handleGenderChange = event => {
    const isChecked = event.target.checked;
    const gender = event.target.value;
    setSearchParams({ page: 1, sex: isChecked ? gender : null });
    setSex(isChecked ? gender : null);
    setIsMaleChecked(gender === 'male' && isChecked);
    setIsFemaleChecked(gender === 'female' && isChecked);
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
            <ContainerItem>
              <FiltersItems onClick={handleAgeClick}>
                <Icon id={!isAgeOpen ? 'up' : 'down'} />
                <Item>{t('By_age')}</Item>
              </FiltersItems>
              {isAgeOpen && (
                <FilterChose>
                  <Checkbox
                    value="young"
                    label={`3-12${t('m')}`}
                    onChange={handleAgeChange}
                  ></Checkbox>
                  <Checkbox
                    value="adult"
                    label={`1 ${t('year')}`}
                    onChange={handleAgeChange}
                  ></Checkbox>
                  <Checkbox
                    value="old"
                    label={`2 ${t('years')}`}
                    onChange={handleAgeChange}
                  ></Checkbox>
                </FilterChose>
              )}
            </ContainerItem>
            <ContainerItem>
              <FiltersItems onClick={handleGenderClick}>
                <Icon id={!isGenderOpen ? 'up' : 'down'} />
                <Item>{t('By_gender')}</Item>
              </FiltersItems>
              {isGenderOpen && (
                <FilterChose>
                  <Checkbox
                    value="male"
                    label={t('male')}
                    isChecked={isMaleChecked}
                    onChange={handleGenderChange}
                  ></Checkbox>
                  <Checkbox
                    value="female"
                    label={t('female')}
                    isChecked={isFemaleChecked}
                    onChange={handleGenderChange}
                  ></Checkbox>
                </FilterChose>
              )}
            </ContainerItem>
          </div>
        </FilterOptions>
      )}
    </FilterContainer>
  );
}

export default NoticesFilters;
