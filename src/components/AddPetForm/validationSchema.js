import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  name: Yup.string().required('Name is required'),
  birthday: Yup.string().required('Birthday is required'),
  breed: Yup.string().required('Breed is required'),
  photo: Yup.string().required('Photo is required'),
  comments: Yup.string(),
  sex: Yup.string().required('Please choose one of provided options'),
  location: Yup.string().required('Location is required'),
  price: Yup.string().required('Price is required'),
});


export default validationSchema;