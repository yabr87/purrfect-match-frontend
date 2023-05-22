import { useState, useEffect } from 'react';
import Icon from '../Icon';
import {
  SelectedFiltersList,
  SelectedFiltersItem,
} from './SelectFilters.styles.js';

const SelectedFilters = ({ filters = [], onChange, setAge, ...props }) => {
  const [selectedFilters, setSelectedFilters] = useState(filters);
  useState(filters);
  useEffect(() => {
    setSelectedFilters(filters);
  }, [filters]);

  const handleRemove = value => {
    const newAge = filters
      .filter(el => el.value !== value)
      .map(filter => filter.value);
    setAge(newAge); // оновити стан age
    onChange(newAge); // додати цей рядок, якщо ви хочете викликати зовнішню функцію onChange
  };

  return (
    <SelectedFiltersList>
      {selectedFilters.map((filter, index) => (
        <SelectedFiltersItem key={filter.value}>
          <span>{filter.label}</span>
          <Icon
            id="cross-small"
            style={{ display: 'inline' }}
            onClick={handleRemove.bind(this, filter.value)}
          />
        </SelectedFiltersItem>
      ))}
    </SelectedFiltersList>
  );
};

export default SelectedFilters;
