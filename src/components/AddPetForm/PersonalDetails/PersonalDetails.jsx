import PropTypes from 'prop-types';
import { Error, FormLabel, StyledField } from '../AddPetForm.styles';
import { DetailsWrapper } from './PersonalDetails.styles';

const PersonalDetails = ({ option, handleChange, handleBlur, values, touched, errors,isValid }) => {
    return (
        <DetailsWrapper>
            {option !== 'my-pet' && (
                    <FormLabel htmlFor="title">Title of add: 
                    <StyledField
                        name="title"
                        placeholder="Type name pet"
                        onChange={handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adorable Puppies for Adoption"
                        onBlur={handleBlur}
                        value={values.title}
                    />
                        <Error name="title" component="p" />
                        </FormLabel>
            )}
            <FormLabel htmlFor="name">
                Name Pet
                <StyledField
                    name="name"
                    placeholder="Type name pet"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Bobby, Buddy"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                />
                <Error name="name" component="p" />
            </FormLabel>
            <FormLabel htmlFor="birthday">
                Date of birth
                <StyledField
                    name="birthday"
                    placeholder="Type date of birth"
                    pattern="^(0?[1-9]|[12]\d|3[01])[\/\-](0?[1-9]|1[012])[\/\-](19|20)\d{2}$"
                    title="Please enter your pet's date of birth in the format DD/MM/YYYY or DD-MM-YYYY (e.g. 01/01/2020 or 01-01-2020)"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.birthday}
                />
                <Error name="birthday" component="p" />
            </FormLabel>
            <FormLabel htmlFor="breed">
                Breed
                <StyledField
                    name="breed"
                    placeholder="Type breed"
                    pattern="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
                    title="Please enter your pet's breed using only letters, hyphens, apostrophes, commas, periods, and spaces. (For example: Golden Retriever, Siamese, Bulldog)"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.breed}
                />
                <Error name="breed" component="p" />
            </FormLabel>
            {!isValid && (
                  <p>Please fill all the fields</p>
                )}
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
