import PropTypes from 'prop-types';
import { Field } from 'formik';
import ImageUploader from 'shared/components/ImageUploader';
import { Error, FormLabel, StyledField } from '../AddPetForm.styles';
import { MoreInfoWrapper, TextField } from './MoreInfo.styles';

const MoreInfo = ({ option, handleChange, handleBlur, values }) => {
  return (
    <MoreInfoWrapper>
      <FormLabel>
        {option === 'my-pet' ? (
          <span>Add photo</span>
        ) : (
          <span>Load the pet&#96;s image:</span>
        )}
        <ImageUploader
          onChange={handleChange}
          name="photo"
          value={values.photo}
              ></ImageUploader>
              
        <Error name="photo" component="p" />
      </FormLabel>
      {option !== 'my-pet' && (
        <>
          <p> The Sex: </p>
          <div role="group" aria-labelledby="choose-pet-option">
            <label htmlFor="radio">
              Male
              <Field
                type="radio"
                name="sex"
                value="male"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            <label htmlFor="radio">
              Female
              <Field
                type="radio"
                name="sex"
                value="female"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Error name="sex" component="p" />
            </label>
          </div>
          <FormLabel htmlFor="location">
            Location
            <StyledField
              name="location"
              placeholder="Type of location"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.location}
            />
            <Error name="location" component="p" />
          </FormLabel>
          {option === 'sell' && (
            <FormLabel htmlFor="price">
              Price
              <StyledField
                name="price"
                placeholder="Type of price"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
              />
              <Error name="price" component="p" />
            </FormLabel>
          )}
        </>
      )}

      <FormLabel htmlFor="comments">
        Comments
        <TextField
          as="textarea"
          name="comments"
          placeholder="Type breed"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.comments}
              />
              
        <Error name="comments" component="p" />
      </FormLabel>
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
