import * as Yup from 'yup';

const validationSchema = ( currentStep, selectedCategory) => {
  let schema = Yup.object();

  if (currentStep === 1) {
    schema = schema.shape({
      category: Yup.string()
        .required()
        .oneOf(['my-pet', 'sell', 'lost-found', 'for-free']),
    });
  }

  if (currentStep === 2) {
    schema = schema.shape({
      title: Yup.string()
        .matches(
          /^[a-zA-Zа-яА-ЯІіЇїЄєҐґ]+(([' -][a-zA-Zа-яА-ЯІіЇїЄєҐґ ])?[a-zA-Zа-яА-ЯІіЇїЄєҐґ]*)*$/,
          'Title may contain only letters, apostrophes, dashes, and spaces. For example: Adorable Puppies for Adoption'
        )
        .required('Title is required')
        .min(2, ' Title be at least 2 characters')
        .max(20, 'Title must not exceed 20 characters'),
      name: Yup.string()
        .required('Name is required')
        .matches(
          /^[a-zA-Zа-яА-ЯІіЇїЄєҐґ]+(([' -][a-zA-Zа-яА-ЯІіЇїЄєҐґ ])?[a-zA-Zа-яА-ЯІіЇїЄєҐґ]*)*$/,
          'Name may contain only letters, apostrophe, dash, and spaces. For example: Bobby, Buddy'
        )
        .min(2, 'Name must be at least 2 characters')
        .max(16, 'Name must not exceed 16 characters'),
      birthday: Yup.string()
        .required('Birthday is required'),
      breed: Yup.string()
        .required('Breed is required')
        .matches(
          /^[a-zA-Zа-яА-ЯІіЇїЄєҐґ]+(([',. -][a-zA-Zа-яА-ЯІіЇїЄєҐґ ])?[a-zA-Zа-яА-ЯІіЇїЄєҐґ]*)*$/,
          "Please enter your pet's breed using only letters, hyphens, apostrophes, commas, periods, and spaces. (For example: Golden Retriever, Siamese, Bulldog)"
        )
        .min(2, 'Breed must be at least 2 characters')
        .max(16, 'Breed must not exceed 16 characters'),
    });
  }

  if (currentStep === 3) {
    schema = schema.shape({
      photo: Yup.string().required('To finish form, please upload foto'),
      comments: Yup.string()
        .required('Comments is required')
        .min(8, 'Comments must be at least 8 characters')
        .max(120, 'Comments must not exceed 120 characters'),
      sex: Yup.string().required('Sex is required').oneOf(['male', 'female']),
      location: Yup.string()
        .required('Location is required')
        .matches(/^[\p{L}\s,']+$/u, 'Invalid city format'),
      price: Yup.number()
        .typeError('Price must be a number')
        .required('Price is required'),
    });
  }

  if (selectedCategory === 'my-pet') {
    schema = schema.omit(['title', 'sex', 'price', 'location']);
  }

  if (selectedCategory === 'lost-found' || selectedCategory === 'for-free') {
    schema = schema.omit(['price']);
  }

  return schema;
};

export default validationSchema;
