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
        .required('Title is required'),
      name: Yup.string()
        .required('Name is required')
        .matches(
          /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
          'Name may contain only letters, apostrophe, dash, and spaces. For example: Bobby, Buddy'
        ),
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
        ),
    });
  }

  if (currentStep === 3) {
    schema = schema.shape({
      photo: Yup.string().required('Photo is required'),
      comments: Yup.string().required('Comments is required'),
      sex: Yup.string().required('Sex is required'),
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
