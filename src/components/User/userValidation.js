import * as yup from 'yup';

export const schema = (inputName, t) => {
  switch (inputName) {
    case 'name':
      yup
        .string()
        .matches(
          /^[a-zA-Zа-яА-ЯІіЇїЄєҐґ]+(([' -][a-zA-Zа-яА-ЯІіЇїЄєҐґ ])?[a-zA-Zа-яА-ЯІіЇїЄєҐґ]*)*$/,
          `${t('Name_letters_hyphens_apostrophe_dash_spaces')}`
        )
        .min(2, `${t('Name_at_least_2')}`)
        .max(16, `${t('Name_not_exceed_16')}`);
      break;
    case 'email':
      yup.string().email();
      break;
    case 'birthday':
      yup
        .string()
        .matches(
          /^(0?[1-9]|[12][0-9]|3[01]).(0?[1-9]|1[012]).((19|20)\d\d)/,
          `${t('Birthday_format_DD.MM.YYYY')}`
        );
      break;
    case 'phone':
      yup
        .string()
        .matches(
          /^\+\d{12}$/,
          `${t('Phone_must_start_with_+_and_contain_12_digits')}`
        );
      break;
    case 'city':
      yup
        .string()
        .required(`${t('Location_is_required')}`)
        .matches(/^[\p{L}\s,']+$/u, `${t('Invalid_city_format')}`)
        .min(2, `${t('Location_at_least_2')}`)
        .max(20, `${t('Location_not_exceed_20')}`);
      break;
    default:
      break;
  }
};
