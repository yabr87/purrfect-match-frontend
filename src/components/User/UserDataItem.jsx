import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input, ItemContainer, EditInputBtn } from './';
import Icon from 'shared/components/Icon/Icon';
import { useSelector } from 'react-redux';
import { updateUserInfo } from 'utils/Api';

const UserDataItem = ({ name, type, pattern, value }) => {
  const [data, setData] = useState(value);
  const [disable, setDisable] = useState(true);
  const token = useSelector(store => store.auth.token);

  useEffect(() => {
    setData(value);
  }, [value]);

  const handleInputEdit = () => {
    setDisable(false);
  };

  const handleInputSubmit = async () => {
    const req = { [name]: data };
    await updateUserInfo(token, req);
  };

  return (
    <ItemContainer>
      <label>{name}:</label>
      <Input
        type={type}
        value={data}
        onChange={e => setData(e.target.value)}
        pattern={pattern}
        name={name}
        disabled={disable}
        autoFocus={!disable}
      />
      {disable ? (
        <EditInputBtn onClick={handleInputEdit}>
          <Icon id="edit" s="#54ADFF" />
        </EditInputBtn>
      ) : (
        <EditInputBtn onClick={handleInputSubmit}>
          <Icon id="check" s="#00C3AD" />
        </EditInputBtn>
      )}
    </ItemContainer>
  );
};

export default UserDataItem;

UserDataItem.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  pattern: PropTypes.string,
};
