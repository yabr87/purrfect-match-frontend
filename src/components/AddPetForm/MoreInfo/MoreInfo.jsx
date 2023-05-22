import PropTypes from 'prop-types';
import { Field } from 'formik';
import { useTranslation } from 'react-i18next';
import ImageUploader from 'shared/components/ImageUploader';
import { Error, FormLabel, StyledField } from '../AddPetForm.styles';
import {
  AdaptiveBoxOne,
  AdaptiveBoxTwo,
  IconDollar,
  ImageLabel,
  MoreInfoRadio,
  MoreInfoWrapper,
  RadioBox,
  TextField,
} from './MoreInfo.styles';
import Icon from 'shared/components/Icon';

const MoreInfo = ({
  option,
  handleChange,
  handleBlur,
  values,
  touched,
  errors,
}) => {
  const { t } = useTranslation();
  return (
    <MoreInfoWrapper option={option}>
      <AdaptiveBoxOne>
        {option !== 'my-pet' && (
          <>
            <div role="group" aria-labelledby="choose-pet-option">
              <FormLabel>{t('The_Sex')}</FormLabel>
              <RadioBox sex={values.sex} style={{position: 'relative'}}>
                <MoreInfoRadio checked={values.sex === 'female'}>
                  <Icon id="female" w="10" h="18" />
                  {t('female')}
                  <Field
                    type="radio"
                    name="sex"
                    value="female"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    checked={values.sex === 'female'}
                  />
                </MoreInfoRadio>
                <MoreInfoRadio checked={values.sex === 'male'}>
                  <Icon id="male" w="10" h="18" />
                  {t('male')}
                  <Field
                    type="radio"
                    name="sex"
                    value="male"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    checked={values.sex === 'male'}
                  />
                </MoreInfoRadio>
              <Error name="sex" component="p" />
              </RadioBox>
            </div>
          </>
        )}
        <ImageLabel option={option}>
          <p>{t('Add_photo')}</p>
          <ImageUploader
            onChange={handleChange}
            name="photo"
            value={values.photo}
          ></ImageUploader>
        </ImageLabel>
        <Error name="photo" component="p" />
      </AdaptiveBoxOne>
      <AdaptiveBoxTwo>
        {option !== 'my-pet' && (
          <>
            <FormLabel htmlFor="location">
              {t('Location')}
              <StyledField
                name="location"
                placeholder={t('Type_your_location')}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.location}
                errors={touched.location && errors.location}
              />
              <Error name="location" component="p" />
            </FormLabel>
          </>
        )}
        {option === 'sell' && (
          <FormLabel htmlFor="price">
            {t('Price')}
            <StyledField
              name="price"
              placeholder={t('Type_of_price')}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
              errors={touched.price && errors.price}
            />
            <IconDollar id="dollar" s="none" f="currentColor" w="20" h="20" />
            <Error name="price" component="p" />
          </FormLabel>
        )}
        <FormLabel htmlFor="comments">
          {t('Comments')}
          <TextField
            as="textarea"
            name="comments"
            placeholder={t('Type_a_comment')}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.comments}
            errors={touched.comments && errors.comments}
          />
          <Error name="comments" component="p" />
        </FormLabel>
        {option !== 'my-pet' && (
          <div>
            <FormLabel htmlFor="promo">
              {values.promo ? (
                <p>
                  {t('Raise_your_ad_only_for')} {values.promo}$!
                </p>
              ) : (
                <p>{t('Drag_the_scroll_to_raise_your_ad')}!</p>
              )}
              <StyledField
                type="range"
                id="promo"
                name="promo"
                min="0"
                max="30"
                placeholder={t('Raise_your_ad')}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.promo}
                errors={touched.promo && errors.promo}
              />
              <Error name="promo" component="p" />
            </FormLabel>
          </div>
        )}
      </AdaptiveBoxTwo>
    </MoreInfoWrapper>
  );
};

MoreInfo.propTypes = {
  option: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
};

export default MoreInfo;
