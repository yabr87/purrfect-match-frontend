import React, { useState } from 'react';

import Button from 'shared/components/Button';
import Icon from 'shared/components/Icon';

import { useMedia } from 'shared/hooks/useMedia';

import {
  FilterContainer,
  FilterOptions,
  FiltersTitle,
} from './NoticesFilters.styles';

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
          <div>
            <h3 onClick={handleAgeClick}>By age</h3>
            {isAgeOpen && (
              <div>
                <label>
                  <input
                    type="checkbox"
                    value="young"
                    onChange={handleAgeChange}
                  />
                  3-12m
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="adult"
                    onChange={handleAgeChange}
                  />
                  1 year
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="old"
                    onChange={handleAgeChange}
                  />
                  2 year
                </label>
              </div>
            )}
          </div>
          <div>
            <h3 onClick={handleGenderClick}>By gender</h3>
            {isGenderOpen && (
              <div>
                <label>
                  <input
                    type="checkbox"
                    value="male"
                    onChange={handleGenderChange}
                  />
                  male
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="female"
                    onChange={handleGenderChange}
                  />
                  female
                </label>
              </div>
            )}
          </div>
        </FilterOptions>
      )}
    </FilterContainer>
  );
}

export default NoticesFilters;
