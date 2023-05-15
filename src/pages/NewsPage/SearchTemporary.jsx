import { useState, memo, useCallback } from 'react';
import PropTypes from 'prop-types';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Searchbar = ({ onFormSubmit }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // if (search.trim() === '') {
    //   return Notify.info('Please enter a search query.', {
    //     fontSize: '17px',
    //     position: 'center-center',
    //   });
    // }
    onFormSubmit(search);
  };

  const handleChange = useCallback(e => {
    setSearch(e.target.value);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">
        <span>Search</span>
      </button>

      <input
        value={search}
        onChange={handleChange}
        name="search"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default memo(Searchbar);
