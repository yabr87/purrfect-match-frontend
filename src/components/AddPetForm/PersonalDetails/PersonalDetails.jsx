import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays } from 'date-fns';
import { Error, FormLabel, StyledField } from '../AddPetForm.styles';
import { DetailsWrapper } from './PersonalDetails.styles';
import { useFormikContext } from 'formik';
import { useTranslation } from 'react-i18next';

const PersonalDetails = ({
  option,
  handleChange,
  handleBlur,
  values,
  touched,
  errors,
  isValid,
}) => {
  const { setFieldValue } = useFormikContext();
  const birthdayDate = values.birthday ? new Date(values.birthday) : null;
  const maxDate = addDays(new Date(), 0);
  const { t } = useTranslation();

  return (
    <DetailsWrapper>
      {option !== 'my-pet' && (
        <FormLabel htmlFor="title">
          {t('Title_of_add')}
          <StyledField
            name="title"
            placeholder={t('Type_title_of_publication')}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
            errors={touched.title && errors.title}
          />
          <Error name="title" component="p" />
        </FormLabel>
      )}
      <FormLabel htmlFor="name">
        {t('Name_Pet')}
        <StyledField
          name="name"
          placeholder={t('Type_name_of_the_pet')}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          errors={touched.name && errors.name}
        />
        <Error name="name" component="p" />
      </FormLabel>
      <FormLabel>
        {t('Date_of_Birth')}
        <StyledField
          as={DatePicker}
          name="birthday"
          placeholderText="DD.MM.YYYY"
          onChange={date => setFieldValue('birthday', date)}
          onBlur={handleBlur}
          selected={birthdayDate}
          value={values.birthday}
          dateFormat="dd.MM.yyyy"
          maxDate={maxDate}
          errors={touched.birthday && errors.birthday}
        />
        <Error name="birthday" component="p" />
      </FormLabel>
      <FormLabel htmlFor="breed">
        {t('Breed')}
        <StyledField
          name="breed"
          placeholder={t('Type_breed')}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.breed}
          errors={touched.breed && errors.breed}
        />
        <Error name="breed" component="p" />
      </FormLabel>
      {!isValid && <Error>{t('Please_fill_all_the_fields')}</Error>}
    </DetailsWrapper>
  );
};

PersonalDetails.propTypes = {
  option: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
};

export default PersonalDetails;
