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
  FiltersItems,
  ContainerItem,
  FilterChose,
  Item,
} from './NoticesFilters.styles';
import Checkbox from '../../../shared/components/Checkbox';

function NoticesFilters({ setSex }) {
  const isUpToWidth480 = useMedia(['(max-width: 480px)'], [true], false);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isAgeOpen, setIsAgeOpen] = useState(false);
  const [isGenderOpen, setIsGenderOpen] = useState(false);
  // const [age, setAge] = useState(null);
  const [gender, setGender] = useState([]);

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
    // const value = event.target.value;
    // setAge(prevState =>
    //   prevState.includes(value)
    //     ? prevState.filter(item => item !== value)
    //     : [...prevState, value]
    // );
    // fetchData();
  };

  const handleGenderChange = event => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    setGender(prevState =>
      isChecked
        ? [...prevState, value]
        : prevState.filter(item => item !== value)
    );
    console.log(gender);
    setSex(isChecked ? value : null);
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
          pos="absolute"
          t="0"
          r="0"
          style={{
            width: 40,
            height: 40,
          }}
          onClick={handleFilterClick}
        ></CircleButton>
      ) : (
        <Button style={{ width: '152px' }} onClick={handleFilterClick}>
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
                    onChange={handleGenderChange}
                  ></Checkbox>
                  <Checkbox
                    value="female"
                    label={t('female')}
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
