import { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, ItemContainer, EditInputBtn } from './';
import Icon from 'shared/components/Icon/Icon';

const UserDataItem = ({ name, type, pattern, value }) => {
  const [data, setData] = useState(value);
  const [disable, setDisable] = useState(true);

  const handleInputEdit = () => {
    setDisable(false);
  };

  return (
    <ItemContainer>
      <label>{name}:</label>
      <Input
        type={type}
        value={data}
        onChange={({ target }) => setData(target.value)}
        pattern={pattern}
        name={name}
        disabled={disable}
      />
      <EditInputBtn onClick={handleInputEdit}>
        {disable ? (
          <Icon id="edit" s="#54ADFF" />
        ) : (
          <Icon id="check" s="#00C3AD" />
        )}
      </EditInputBtn>
    </ItemContainer>
  );
};

export default UserDataItem;

UserDataItem.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  pattern: PropTypes.string,
};
