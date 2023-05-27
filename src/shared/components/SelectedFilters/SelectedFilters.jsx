import { useState, useEffect } from 'react';
import Icon from '../Icon';
import {
  SelectedFiltersList,
  SelectedFiltersItem,
} from './SelectFilters.styles.js';

const SelectedFilters = ({ filters = [], setSex, setAge, ...props }) => {
  const [selectedFilters, setSelectedFilters] = useState(filters);
  useEffect(() => {
    setSelectedFilters(filters);
  }, [filters]);

  const handleRemove = value => {
    let updatedFilters = selectedFilters.filter(
      filter => filter.value !== value
    );

    if (value === 'male' || value === 'female') {
      setSex(null);
    } else {
      const newAge = updatedFilters
        .filter(filter => !['male', 'female'].includes(filter.value))
        .map(filter => filter.value);
      setAge(newAge);
    }
    setSelectedFilters(updatedFilters);
  };

  return (
    <SelectedFiltersList>
      {selectedFilters.map((filter, index) => (
        <SelectedFiltersItem key={`${filter.value}-${index}`}>
          <span>{filter.label}</span>
          <Icon
            id="cross-small"
            style={{ display: 'inline' }}
            onClick={() => handleRemove(filter.value)}
          />
        </SelectedFiltersItem>
      ))}
    </SelectedFiltersList>
  );
};

export default SelectedFilters;
