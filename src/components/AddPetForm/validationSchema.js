import * as Yup from 'yup';

const validationSchema = (currentStep, selectedCategory, t) => {
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
          `${t('only_letters_apostrophes_dashes_spaces')}`
        )
        .required(`${t('Title_is_required')}`)
        .min(4, `${t('Title_at_least_4')}`)
        .max(20, `${t('Title_not_exceed_20')}`),
      name: Yup.string()
        .required(`${t('Name_is_required')}`)
        .matches(
          /^[a-zA-Zа-яА-ЯІіЇїЄєҐґ]+(([' -][a-zA-Zа-яА-ЯІіЇїЄєҐґ ])?[a-zA-Zа-яА-ЯІіЇїЄєҐґ]*)*$/,
          `${t('Name_letters_hyphens_apostrophe_dash_spaces')}`
        )
        .min(2, `${t('Name_at_least_2')}`)
        .max(16, `${t('Name_not_exceed_16')}`),
      birthday: Yup.string().required(`${t('Birthday_is_required')}`),
      breed: Yup.string()
        .required(`${t('Breed_is_required')}`)
        .matches(
          /^[a-zA-Zа-яА-ЯІіЇїЄєҐґ]+(([',. -][a-zA-Zа-яА-ЯІіЇїЄєҐґ ])?[a-zA-Zа-яА-ЯІіЇїЄєҐґ]*)*$/,
          `${t('Breed_letters_hyphens_apostrophes_commas_periods_spaces')}`
        )
        .min(2, `${t('Breed_at_least_2')}`)
        .max(16, `${t('Breed_not_exceed_16')}`),
    });
  }

  if (currentStep === 3) {
    schema = schema.shape({
      photo: Yup.string().required(`${t('finish_upload_photo')}`),
      comments: Yup.string()
        .required(`${t('Comments_are_required')}`)
        .min(8, `${t('Comments_at_least_8')}`)
        .max(120, `${t('Comments_not_exceed_120')}`),
      sex: Yup.string()
        .required(`${t('Sex_is_required')}`)
        .oneOf(['male', 'female']),
      location: Yup.string()
        .required(`${t('Location_is_required')}`)
        .matches(/^[\p{L}\s,']+$/u, `${t('Invalid_city_format')}`)
        .min(2, `${t('Location_at_least_2')}`)
        .max(20, `${t('Location_not_exceed_20')}`),
      price: Yup.number()
        .typeError(`${t('Price_must_be_number')}`)
        .required(`${t('Price_is_required')}`),
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
