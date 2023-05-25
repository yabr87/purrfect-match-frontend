import React, { useState } from 'react';
import Checkbox from '../Checkbox';
import {
  FilterChose,
  ContainerItem,
  FiltersItems,
  Item,
} from './Filter.styles';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const Filter = ({
  filters = [],
  name,
  title,
  isSingleSelection = false,
  onChange,
  selectedOptions = [],
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = ({ option, checked }) => {
    if (checked) {
      onChange(isSingleSelection ? [option] : [...selectedOptions, option]);
    } else {
      onChange(selectedOptions.filter(item => item !== option));
    }
  };

  const isChecked = value => {
    return !!selectedOptions.find(item => item === value);
  };

  const collapseHandler = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <ContainerItem>
      <FiltersItems onClick={collapseHandler}>
        <Icon id={!isOpen ? 'down' : 'up'} />
        <Item>{title}</Item>
      </FiltersItems>
      {isOpen && (
        <FilterChose>
          {filters.map(({ label, option }) => (
            <Checkbox
              key={option}
              option={option}
              label={label}
              checked={isChecked(option)}
              onChange={handleChange}
            ></Checkbox>
          ))}
        </FilterChose>
      )}
    </ContainerItem>
  );
};

Filter.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      option: PropTypes.string.isRequired,
    })
  ).isRequired,
  name: PropTypes.string,
  isSingleSelection: PropTypes.bool,
  title: PropTypes.string,
  onChange: PropTypes.func,
  selectedOptions: PropTypes.arrayOf(PropTypes.string),
};

export default Filter;
