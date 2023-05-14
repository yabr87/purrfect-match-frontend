import * as Yup from 'yup';

const validationSchema = Yup.object({
  option: Yup.string().required('Please choose an option'),
  petName: Yup.string().when('option', {
    is: (option) => option === 'personalDetails',
    then: Yup.string().required('Please enter your pet name'),
  }),
  petBirthDate: Yup.date().when('option', {
    is: (option) => option === 'personalDetails',
    then: Yup.date()
      .required('Please enter your pet birth date')
      .max(new Date(), 'Pet birth date cannot be in the future'),
  }),
  petBreed: Yup.string().when('option', {
    is: (option) => option === 'personalDetails',
    then: Yup.string().required('Please enter your pet breed'),
  }),
  petPhoto: Yup.mixed().when('option', {
    is: (option) => option === 'moreInfo',
    then: Yup.mixed().required('Please select a pet photo'),
  }),
  personalComment: Yup.string().when('option', {
    is: (option) => option === 'moreInfo',
    then: Yup.string().required('Please enter your personal comment'),
  }),
  location: Yup.string().when('option', {
    is: (option) => option === 'moreInfo',
    then: Yup.string().required('Please enter your location'),
  }),
});

export default validationSchema;
