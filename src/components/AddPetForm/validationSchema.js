import * as Yup from 'yup';

const validationSchema = (selectedOption, currentStep) => {
  let schema = Yup.object();

  if (currentStep === 2) {
    schema = schema.shape({
      title: Yup.string()
        .matches(
          /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
          'Title may contain only letters, apostrophes, dashes, and spaces. For example: Adorable Puppies for Adoption'
        )
        .required('Title is required')
        .min(2, 'Name must be at least 2 characters')
        .max(20, 'Name must not exceed 50 characters'),
      name: Yup.string()
        .required('Name is required')
        .matches(
          /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
          'Name may contain only letters, apostrophe, dash, and spaces. For example: Bobby, Buddy'
        )
        .min(2, 'Name must be at least 2 characters')
        .max(30, 'Name must not exceed 50 characters'),
      birthday: Yup.string()
        .required('Birthday is required')
        .matches(
          /^\d{2}\.\d{2}\.\d{4}$/,
          'Birthday must be in the format dd.dd.dddd'
        ),
      breed: Yup.string()
        .required('Breed is required')
        .matches(
          /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
          "Please enter your pet's breed using only letters, hyphens, apostrophes, commas, periods, and spaces. (For example: Golden Retriever, Siamese, Bulldog)"
        )
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name must not exceed 50 characters'),
    });
  }

  if (currentStep === 3) {
    schema = schema.shape({
      photo: Yup.string().required('To finish form, please upload foto'),
      comments: Yup.string()
        .required('Comments is required')
        .min(10, 'Comments must be at least 10 characters')
        .max(200, 'Comments must not exceed 200 characters'),
      sex: Yup.string().required('Sex is required').oneOf(['male', 'female']),
      location: Yup.string().required('Location is required'),
      price: Yup.number()
        .typeError('Price must be a number')
        .required('Price is required'),
    });
  }

  if (selectedOption === 'my-pet') {
    schema = schema.omit(['title', 'sex', 'price', 'location']);
  }

  if (selectedOption === 'lost-found' || selectedOption === 'for-free') {
    schema = schema.omit(['price']);
  }

  return schema;
};

export default validationSchema;
