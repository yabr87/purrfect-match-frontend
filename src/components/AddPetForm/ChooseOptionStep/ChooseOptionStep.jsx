import PropTypes from 'prop-types';
import { Field } from 'formik';
import { RadioContainer, RadioLabel } from './ChooseOptionStep.styles';
import { useTranslation } from 'react-i18next';

const ChooseOptionStep = ({
  handleBlur,
  values,
  handleChange,
  onSelectCategory,
}) => {
  const { t } = useTranslation();
  const handleCategoryChange = category => {
    handleChange({ target: { name: 'category', value: category } });
    onSelectCategory(category);
  };

  return (
    <RadioContainer role="group" aria-labelledby="choose-pet-option">
      <RadioLabel checked={values.category === 'my-pet'}>
        <Field
          type="radio"
          name="category"
          value="my-pet"
          onChange={() => handleCategoryChange('my-pet')}
          onBlur={handleBlur}
          checked={values.category === 'my-pet'}
        />
        {t('is_your_pet')}
      </RadioLabel>
      <RadioLabel checked={values.category === 'sell'}>
        <Field
          type="radio"
          name="category"
          value="sell"
          onChange={() => handleCategoryChange('sell')}
          onBlur={handleBlur}
          checked={values.category === 'sell'}
        />
        {t('is_sell')}
      </RadioLabel>
      <RadioLabel checked={values.category === 'lost-found'}>
        <Field
          type="radio"
          name="category"
          value="lost-found"
          onChange={() => handleCategoryChange('lost-found')}
          onBlur={handleBlur}
          checked={values.category === 'lost-found'}
        />
        {t('is_lost_found')}
      </RadioLabel>
      <RadioLabel checked={values.category === 'for-free'}>
        <Field
          type="radio"
          name="category"
          value="for-free"
          onChange={() => handleCategoryChange('for-free')}
          onBlur={handleBlur}
          checked={values.category === 'for-free'}
        />
        {t('is_in_good_hands')}
      </RadioLabel>
    </RadioContainer>
  );
};

ChooseOptionStep.propTypes = {
  handleBlur: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
};

export default ChooseOptionStep;
