import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import Button from 'shared/components/Button';
import Icon from 'shared/components/Icon';

import { useMedia } from 'shared/hooks/useMedia';
import CircleButton from 'shared/components/CircleButton';
import {
  FilterContainer,
  FilterOptions,
  FiltersTitle,
  FilterContainerForAllGrup,
} from './NoticesFilters.styles';
import Filter from '../../../shared/components/Filter/Filter';

const NoticesFilters = ({ onFilterOpenChange, sex, age, setSex, setAge }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isUpToWidth480 = useMedia(['(max-width: 480px)'], [true], false);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { t } = useTranslation();

  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleAgeChange = options => {
    setAge(options);
  };

  const handleGenderChange = options => {
    setSex(options[0] ?? null);
  };

  const ageFilterItems = [
    { label: `0-12 ${t('m')}`, option: '0' },
    { label: `1 ${t('year')}`, option: '1' },
    { label: `+2 ${t('years')}`, option: '2' },
  ];

  const genderFilterItems = [
    { label: `${t('male')}`, option: 'male' },
    { label: `${t('female')}`, option: 'female' },
  ];

  useEffect(() => {
    onFilterOpenChange && onFilterOpenChange(isFilterOpen);
  }, [isFilterOpen, onFilterOpenChange]);

  return (
    <FilterContainer ref={containerRef}>
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
        <Button
          style={{
            zIndex: 11,
          }}
          type="button"
          w="152"
          shape="solid"
          onClick={handleFilterClick}
        >
          {t('Select')}
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
          <FilterContainerForAllGrup>
            <Filter
              filters={genderFilterItems}
              selectedOptions={[sex]}
              title={t('By_gender')}
              name="sex"
              isSingleSelection={true}
              onChange={handleGenderChange}
            ></Filter>
            <Filter
              filters={ageFilterItems}
              selectedOptions={age}
              title={t('By_age')}
              name="age"
              isSingleSelection={false}
              onChange={handleAgeChange}
            ></Filter>
          </FilterContainerForAllGrup>
        </FilterOptions>
      )}
    </FilterContainer>
  );
};

export default React.memo(NoticesFilters);
