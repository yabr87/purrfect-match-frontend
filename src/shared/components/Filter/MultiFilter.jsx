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


/*
  let filterssss = [
    {
      name: 'age',
      options: [
        { label: `1${t('year')}`, value: '1' },
        { label: `2 ${t('year')}`, value: '2' },
        { label: `3 ${t('years')}`, value: '3' }
      ]
    },
    {
      name: 'gender',
      options: [
        { label: `${t('male')}`, value: 'male' },
        { label: `${t('female')}`, value: 'female' }
      ]
    }
  ];
 */

const MultiFilter = ({
  filters = [],
  isSingleSelection = false,
  onChange,
  ...props
}) => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isOpen, setIsOpen] = useState([false, false]);

  useEffect(() => {
    console.log('11111', selectedFilters);
    //onChange(selectedFilters);
  }, [selectedFilters, onChange]);

  const handleChange = ({ name, target }) => {
    console.log('name:', name, 'TARGET:', target);
    const isSingleSelection = filters.find(filter => filter.name === name).isSingleSelection;

    if (target.checked) {
      setSelectedFilters(prevState => addSelectedFilterToState(prevState, isSingleSelection, name, target));
    } else {
      setSelectedFilters(prevState => removeSelectedFilter(prevState, name, target));
    }
    //console.log('selectedFilters:', selectedFilters);
  };

  const addSelectedFilterToState = (prevState, isSingleSelection, name, target) => {
    let prevStateCopy = [...prevState];
    let filterGroupIndex = -1;
    let filterGroup;
    for (let i = 0; i<prevStateCopy.length; i++) {
      if (prevStateCopy[i].name === name) {
        filterGroup = prevStateCopy[i];
        filterGroupIndex = i;
        break;
      }
    }

    if (filterGroupIndex >= 0) {
      filterGroup.options = isSingleSelection
        ? [target]
        : [...filterGroup.options, target];
      prevStateCopy[filterGroupIndex] = filterGroup;
    } else {
      filterGroup = {
        name,
        options: [target]
      }
      return [...prevStateCopy, filterGroup];
    }

    return prevStateCopy;
  }

  const removeSelectedFilter = (prevState, name, target) => {
    const filterGroups = [...prevState];
    let filterGroup = filterGroups.find(filter => filter.name === name);

    const filterToUnselectIndex = filterGroup.options.findIndex(filter => filter.value === target.value);
    if (filterToUnselectIndex >= 0) {
      filterGroup.options.splice(filterToUnselectIndex, 1);
    }

    console.log('filterGroups:', filterGroups);
    return filterGroups;
  }

  const isChecked = (name, value) => {
    const filterGroup = selectedFilters.find(filter => filter.name === name);
    //console.log('name:', name, 'value:', value, 'filterGroup:', filterGroup, 'result:', (filterGroup !== undefined && filterGroup.options.find(item => item === value)));
    const res = filterGroup !== undefined && filterGroup.options !== undefined;
    if (res) {
      const f = filterGroup.options.find(item => item.value === value);
      return f !== undefined && f !== null;
      console.log('F', f);
      console.log('name:', name, 'value:', value, 'filterGroup:', filterGroup, 'filterGroup.options:', filterGroup.options, 'result:', );
    }
    return filterGroup !== undefined && filterGroup.options !== undefined ;
  };

  const collapseHandler = (index) => {
    const newState = [...isOpen];
    newState[index] = !newState[index];
    setIsOpen(newState);
  };

  return (
    <>
    {filters.map(({ name, title, options }, index) => (
      <ContainerItem key={name + '_' + 'title'}>
        <FiltersItems onClick={collapseHandler.bind(this, index)}>
          <Icon id={!isOpen[index] ? 'down' : 'up'} />
          <Item>{title}</Item>
        </FiltersItems>
        {isOpen[index] && (
          <FilterChose>
            {options.map(({ label, value }) => (
              <Checkbox
                key={'filter_' + value}
                value={value}
                label={label}
                name={name}
                isChecked={isChecked.bind(this, name, value)}
                onChange={handleChange}
              ></Checkbox>
            ))}
          </FilterChose>
        )}
      </ContainerItem>
      ))}
    </>
  );
};

/*MultiFilter.propTypes = {
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
};*/

export default MultiFilter;
