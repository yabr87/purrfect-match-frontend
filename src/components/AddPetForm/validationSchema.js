import * as Yup from 'yup';

const validationSchema = (selectedOption, currentStep) => {
  let schema = Yup.object();
  
  if (currentStep === 2) {
    schema = schema.shape({
      title: Yup.string().required('Title is required'),
      name: Yup.string().required('Name is required'),
      birthday: Yup.string().required('Birthday is required'),
      breed: Yup.string().required('Breed is required'),
    });
  }

  if (currentStep === 3) {
    schema = schema.shape({
      photo: Yup.string().required('Photo is required'),
      comments: Yup.string().required('Comments is required'),
      sex: Yup.string().required('Sex is required'),
      location: Yup.string().required('Location is required'),
      price: Yup.number().required('Price is required'),
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