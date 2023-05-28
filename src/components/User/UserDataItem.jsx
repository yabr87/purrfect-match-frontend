import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { UserInput, ItemContainer, EditInputBtn, UserLabel } from './';
import Icon from 'shared/components/Icon/Icon';
import { useSelector, useDispatch } from 'react-redux';
import { update } from 'redux/auth/authOperations';
import { convertToISODate } from 'utils/convertToISODate';
import { schema } from 'components/User/userValidation';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { reverseISODate } from 'utils/reverseISODate';

const UserDataItem = ({ name, type, pattern, value, placeholder }) => {
  const userData = useSelector(store => store.auth.user[name]) ?? '';

  const [data, setData] = useState('');

  useEffect(() => {
    setData(
      name === 'birthday' && userData ? reverseISODate(userData) : userData
    );
  }, [userData, name]);

  const [disable, setDisable] = useState(true);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleInputEdit = () => {
    setDisable(false);
  };

  const handleInputSubmit = async () => {
    const reqData = name === 'birthday' ? convertToISODate(data) : data;
    try {
      if (data === value) {
        setDisable(true);
        return;
      }
      const isValid = await schema(name, t).isValid(reqData);
      if (isValid) {
        const req = { [name]: reqData };
        dispatch(update(req));
        toast.success(`${name} ${t('is_updated_succesfully')}`, {
          position: toast.POSITION.TOP_LEFT,
        });
        setDisable(true);
      }
    } catch (error) {
      toast.error(`${t('alert_Not_correct_value!')}!`, {
        position: toast.POSITION.TOP_LEFT,
      });
    }
  };

  return (
    <ItemContainer>
      <UserLabel>{t(name.charAt(0).toUpperCase() + name.slice(1))}:</UserLabel>
      <UserInput
        type={type}
        value={data}
        onChange={e => setData(e.target.value)}
        pattern={pattern}
        placeholder={placeholder}
        name={name}
        disabled={disable}
        autoFocus={!disable}
      />
      {disable ? (
        <EditInputBtn onClick={handleInputEdit}>
          <Icon id="edit" f="#54ADFF" s="none" />
        </EditInputBtn>
      ) : (
        <EditInputBtn onClick={handleInputSubmit}>
          <Icon id="complite" s="#00C3AD" />
        </EditInputBtn>
      )}
    </ItemContainer>
  );
};

export default UserDataItem;

UserDataItem.propTypes = {
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
};
