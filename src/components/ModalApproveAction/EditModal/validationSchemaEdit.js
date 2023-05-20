import * as Yup from 'yup';

const validationSchemaEdit = (category) => {
    let schema = Yup.object();
    
    schema = schema.shape({
      title: Yup.string()
        .matches(
          /^[a-zA-Zа-яА-ЯІіЇїЄєҐґ]+(([' -][a-zA-Zа-яА-ЯІіЇїЄєҐґ ])?[a-zA-Zа-яА-ЯІіЇїЄєҐґ]*)*$/,
          'Title may contain only letters, apostrophes, dashes, and spaces. For example: Adorable Puppies for Adoption'
        )
        .required()
        .min(2, ' Title be at least 2 characters')
        .max(20, 'Title must not exceed 20 characters'),
      name: Yup.string()
        .required()
        .matches(
          /^[a-zA-Zа-яА-ЯІіЇїЄєҐґ]+(([' -][a-zA-Zа-яА-ЯІіЇїЄєҐґ ])?[a-zA-Zа-яА-ЯІіЇїЄєҐґ]*)*$/,
          'Name may contain only letters, apostrophe, dash, and spaces. For example: Bobby, Buddy'
        )
        .min(2, 'Name must be at least 2 characters')
        .max(16, 'Name must not exceed 16 characters'),
      birthday: Yup.string()
        .required()
        .matches(/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/, 'Invalid date format (dd.mm.yyyy)'),
      breed: Yup.string()
        .required()
        .matches(
          /^[a-zA-Zа-яА-ЯІіЇїЄєҐґ]+(([',. -][a-zA-Zа-яА-ЯІіЇїЄєҐґ ])?[a-zA-Zа-яА-ЯІіЇїЄєҐґ]*)*$/,
          "Please enter your pet's breed using only letters, hyphens, apostrophes, commas, periods, and spaces. (For example: Golden Retriever, Siamese, Bulldog)"
        )
        .min(2, 'Breed must be at least 2 characters')
        .max(16, 'Breed must not exceed 16 characters'),
      photo: Yup.string().required('To finish form, please upload foto'),
      comments: Yup.string()
        .required()
        .min(8, 'Comments must be at least 8 characters')
        .max(120, 'Comments must not exceed 120 characters'),
      sex: Yup.string().required('Sex is required').oneOf(['male', 'female']),
      location: Yup.string()
        .required()
        .matches(/^[\p{L}\s,']+$/u, 'Invalid city format'),
      price: Yup.number()
        .typeError('Price must be a number')
            .required(),
      points: Yup.number()
            .optional()
      .min(0)
      .max(30)
    });


  if (category !== 'sell') {
    schema = schema.omit(['price']);
  }

  return schema;
};

export default validationSchemaEdit;
