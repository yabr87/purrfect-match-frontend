import React, { useState } from 'react';

import Button from 'shared/components/Button';
import Icon from 'shared/components/Icon';

import { useMedia } from 'shared/hooks/useMedia';
import CircleButton from 'shared/components/CircleButton';
import {
  FilterContainer,
  FilterOptions,
  FiltersTitle
} from './NoticesFilters.styles';
import Filter from '../../../shared/components/Filter/Filter';

function NoticesFilters({ fetchData }) {
  const isUpToWidth480 = useMedia(['(max-width: 480px)'], [true], false);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isAgeOpen, setIsAgeOpen] = useState(false);
  const [isGenderOpen, setIsGenderOpen] = useState(false);
  // const [age, setAge] = useState(null);
  // const [gender, setGender] = useState(null);

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

   const handleGenderChange = event => {
    // const value = event.target.value;
    // setGender(prevState =>
    //   prevState.includes(value)
    //     ? prevState.filter(item => item !== value)
    //     : [...prevState, value]
    // );
    // fetchData();
  };

  const ageFilterItems = [
    {label: '3-12m', value: 'young'},
    {label: '1 year', value: 'adult'},
    {label: '2 years', value: 'old'}
  ]

  const genderFilterItems = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'}
  ]

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
      ) : (
        isFilterOpen ?
        <Button type="button" w="152" shape="solid" onClick={handleFilterClick}>
          Filter <Icon id="filters" />
        </Button>
        :
        <Button w="152" onClick={handleFilterClick}>
          Filter
          <Icon id="filters" />
        </Button>
      )}
      {isFilterOpen && (
        <FilterOptions>
          <FiltersTitle>Filters</FiltersTitle>
          <div style={{position: 'relative'}}>
            <Filter filters={ageFilterItems} name="age" title="age" onChange={handleAgeChange}></Filter>
            <Filter filters={genderFilterItems} name="gender" title="gender" onChange={handleGenderChange}></Filter>
          </div>
        </FilterOptions>
      )}
    </FilterContainer>
  );
}

export default NoticesFilters;
