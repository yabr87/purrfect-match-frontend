import { useState } from 'react';
import Icon from '../Icon';

const SelectedFilters = ({ filters = [], onChange, ...props }) => {
  const [selectedFilters, setSelectedFilters] = useState(filters);
  const handleRemove = (value) => {
    const res = selectedFilters.filter(el => el.value !== value);
    setSelectedFilters(res);
    onChange(res);
  }

  return (
    <ul style={{display:'inline'}}>
      {selectedFilters.map((filter, index) => (
        <li key={filter.value} style={{display:'inline-flex', marginRight: '5px' ,borderRadius: '20px', backgroundColor: '#FFFFFF', padding: '8px 16px',
          gap: '4px', justifyContent: 'space-between',boxShadow: '3px 8px 14px rgba(136, 198, 253, 0.19)',
          alignItems: 'center', color: '#54ADFF', fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '12px',}}>
            <span>
              {filter.label}
            </span>
            <Icon id="cross-small" style={{display:'inline'}} onClick={handleRemove.bind(this, filter.value)}/>
        </li>
      ))}
    </ul>
  );
};

export default SelectedFilters;
