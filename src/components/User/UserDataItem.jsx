import PropTypes from 'prop-types';

const UserDataItem = ({ name }) => {
  return (
    <>
      <label>{name}:</label>
      <input />
      <button></button>
    </>
  );
};

export default UserDataItem;

UserDataItem.propTypes = {
  name: PropTypes.string.isRequired,
};
