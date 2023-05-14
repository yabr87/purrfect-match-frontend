import { Field } from 'formik';
import { useState } from 'react';
import ImageUploader from 'shared/components/ImageUploader';
import { FormLabel } from '../AddPetForm.styles';

const MoreInfo = ({ option, handleChange, handleBlur, values, setFieldValue  }) => {
  const [checkedValue, setCheckedValue] = useState('');

  const handleRadioButtons = e => {
    setCheckedValue(e.target.value);
    };
    

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
                checked={checkedValue === 'male'}
                onChange={handleRadioButtons}
                onBlur={handleBlur}
              />
            </label>
            <label htmlFor="radio">
              Female
              <Field
                type="radio"
                name="sex"
                value="female"
                checked={checkedValue === 'female'}
                onChange={handleRadioButtons}
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

export default MoreInfo;
