import { Field } from 'formik';
import { FormLabel } from '../AddPetForm.styles';
import { DetailsWrapper } from './PersonalDetails.styles';

const PersonalDetails = ({ option }) => {
  return (
    <DetailsWrapper>
      {option !== 'my-pet' && (
        <>
          <FormLabel htmlFor="title">Title of add: </FormLabel>
          <Field name="title" placeholder="Type name pet" />
        </>
      )}
      <FormLabel htmlFor="name">
        Name Pet
        <Field
          name="name"
          placeholder="Type name pet"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Bobby, Buddy"
        />
      </FormLabel>
      <FormLabel htmlFor="birthday">
        Date of birth
        <Field name="birthday" placeholder="Type date of birth" />
      </FormLabel>
      <FormLabel htmlFor="breed">
        Breed
        <Field name="breed" placeholder="Type breed" />
      </FormLabel>
    </DetailsWrapper>
  );
};

export default PersonalDetails;
