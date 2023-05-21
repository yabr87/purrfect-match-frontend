import React, { useEffect, useState } from 'react';
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
  ...props
}) => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const selectedFiltersFull = {
      name: name,
      values: selectedFilters,
    };
    onChange(selectedFiltersFull);
  }, [selectedFilters, name, onChange]);

  const handleChange = ({ target }) => {
    if (target.checked) {
      if (isSingleSelection) {
        setSelectedFilters(prevState => [target.value]);
      } else {
        setSelectedFilters(prevState => [...prevState, target.value]);
      }
    } else {
      setSelectedFilters(prevState =>
        prevState.filter(item => item !== target.value)
      );
    }
  };

  const isChecked = value => {
    return !!selectedFilters.find(item => item === value);
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
          {filters.map(({ label, value }) => (
            <Checkbox
              key={'filter_' + value}
              value={value}
              label={label}
              isChecked={isChecked.bind(this, value)}
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
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  name: PropTypes.string,
  isSingleSelection: PropTypes.bool,
  title: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
