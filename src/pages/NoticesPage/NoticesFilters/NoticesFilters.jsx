import React, { useState } from 'react';

import Button from 'shared/components/Button';
import Icon from 'shared/components/Icon';

import { useMedia } from 'shared/hooks/useMedia';

import {
  FilterContainer,
  FilterOptions,
  FiltersTitle,
} from './NoticesFilters.styles';

function NoticesFilters() {
  const isUpToWidth480 = useMedia(['(max-width: 480px)'], [true], false);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  //   const [age, setAge] = useState(null);
  //   const [gender, setGender] = useState(null);

  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  //   const handleAgeChange = event => {
  //     setAge(event.target.value);
  //   };

  //   const handleGenderChange = event => {
  //     setGender(event.target.value);
  //   };

  //

  return (
    <FilterContainer
      style={{
        position: 'relative',
      }}
    >
      {isUpToWidth480 ? (
        <Button
          style={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            top: 0,
            right: 0,
            width: 40,
            height: 40,
            background: '#cce4fb',
            borderRadius: '50%',
            border: 'none',
            outline: 'none',
          }}
          onClick={handleFilterClick}
        >
          <Icon id="filters" h="22" w="22" s="#54ADFF" strokeWidth="1.5" />
        </Button>
      ) : (
        <Button style={{ width: '152px' }} onClick={handleFilterClick}>
          Filter
          <Icon id="filters" />
        </Button>
      )}
      {isFilterOpen && (
        <FilterOptions>
          <FiltersTitle>Filters</FiltersTitle>
        </FilterOptions>
      )}
    </FilterContainer>
  );
}

export default NoticesFilters;
