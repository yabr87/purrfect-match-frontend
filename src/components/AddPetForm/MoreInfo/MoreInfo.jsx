import PropTypes from 'prop-types'
import { Field } from 'formik';
import ImageUploader from 'shared/components/ImageUploader';
import { FormLabel } from '../AddPetForm.styles';

const MoreInfo = ({ option, handleChange, handleBlur, values  }) => {
  
  return (
    <>
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
                  field={values.photo}
        ></ImageUploader>
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
            </label>
          </div>
          <FormLabel htmlFor="location">
            Location
            <Field
              name="location"
              placeholder="Type of location"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.location}
            />
          </FormLabel>
          {option === 'sell' && (
            <FormLabel htmlFor="price">
              Price
              <Field
                name="price"
                placeholder="Type of price"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
              />
            </FormLabel>
          )}
        </>
      )}

      <FormLabel htmlFor="comments">
        Comments
        <Field
          as="textarea"
          name="comments"
          placeholder="Type breed"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.comments}
        />
      </FormLabel>
    </>
  );
};

MoreInfo.propTypes = {
  option: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
};

export default MoreInfo;
