import { Field } from 'formik';
import { FormLabel } from '../AddPetForm.styles';
import { DetailsWrapper } from './PersonalDetails.styles';

const PersonalDetails = ({ option, handleChange, handleBlur, values }) => {
  return (
    <DetailsWrapper>
      {option !== 'my-pet' && (
        <>
          <FormLabel htmlFor="title">Title of add: </FormLabel>
          <Field name="title" placeholder="Type name pet" onChange={handleChange}
        onBlur={handleBlur}
        value={values.title} />
        </>
      )}
      <FormLabel htmlFor="name">
        Name Pet
        <Field
          name="name"
          placeholder="Type name pet"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Bobby, Buddy"
                  onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        />
      </FormLabel>
      <FormLabel htmlFor="birthday">
        Date of birth
        <Field name="birthday" placeholder="Type date of birth" onChange={handleChange}
        onBlur={handleBlur}
        value={values.birthday} />
      </FormLabel>
      <FormLabel htmlFor="breed">
        Breed
        <Field name="breed" placeholder="Type breed" onChange={handleChange}
        onBlur={handleBlur}
        value={values.breed}/>
      </FormLabel>
    </DetailsWrapper>
  );
};

export default PersonalDetails;
