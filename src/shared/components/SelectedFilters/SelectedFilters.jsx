import { useState } from 'react';
import Icon from '../Icon';
import {
  SelectedFiltersList,
  SelectedFiltersItem,
} from './SelectFilters.styles.js';

const SelectedFilters = ({ filters = [], onChange, ...props }) => {
  const [selectedFilters, setSelectedFilters] = useState(filters);
  const handleRemove = value => {
    const res = selectedFilters.filter(el => el.value !== value);
    setSelectedFilters(res);
    onChange(res);
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
