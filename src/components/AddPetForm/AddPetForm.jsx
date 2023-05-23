import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { useTranslation } from 'react-i18next';
import FormWrapper from './FormWrapper';
import ChooseOptionStep from './ChooseOptionStep';
import PersonalDetails from './PersonalDetails';
import MoreInfo from './MoreInfo';

import Button from 'shared/components/Button';
import Icon from 'shared/components/Icon/Icon';
import { ButtonsBox, FormButton } from './AddPetForm.styles';
import validationSchema from './validationSchema';

import { addNotice } from 'utils/ApiNotices';
import { addMyPet } from 'utils/ApiMyPets';
import Loader from 'shared/components/Loader';
import { toast } from 'react-toastify';
import useAuth from 'shared/hooks/useAuth';

const initialState = {
  category: 'sell',
  title: '',
  name: '',
  birthday: '',
  breed: '',
  photo: '',
  comments: '',
  sex: '',
  location: '',
  price: '',
  promo: 0,
};

const AddPetForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState(
    initialState.category
  );
  const { user } = useAuth();

  const handleSubmit = async (values, { resetForm }) => {
    const newPet = Object.keys(values).reduce((acc, key) => {
      if (key === 'category' && values[key] === 'my-pet') {
        return acc;
      }
      return values[key] ? { ...acc, [key]: values[key] } : acc;
    }, {});

    newPet.birthday = newPet.birthday.toISOString();

    if (user.balance < newPet.promo) {
      toast.error(t('alert_insufficient_funds'));
      return;
    }

    try {
      if (selectedCategory !== 'my-pet') {
        await addNotice(newPet);
        navigate(`/notices/${selectedCategory}`);
      } else {
        await addMyPet(newPet);
        navigate(`/user`);
      }
      toast.success(t('alert_Pet_added_successfully'));
      resetForm();
    } catch (error) {
      toast.error(`${t('alert_Failed_to_add_pet')}:${error}`);
    }
  };

  const handleGoBack = () => {
    setCurrentStep(step => step - 1);
  };

  const handleNext = () => {
    setCurrentStep(step => step + 1);
  };

  const handleCancel = () => {
    navigate(-1);
  };
  const handleCategoryChange = category => {
    setSelectedCategory(category);
  };

  return (
    <Formik
      initialValues={initialState}
      onSubmit={handleSubmit}
      validationSchema={validationSchema(currentStep, selectedCategory, t)}
    >
      {({
        isSubmitting,
        handleChange,
        handleBlur,
        values,
        errors,
        isValid,
        touched,
        initialErrors,
      }) => (
        <Form>
          {isSubmitting ? (
            <Loader />
          ) : (
            <FormWrapper
              currentStep={currentStep}
              category={selectedCategory}
              text={
                selectedCategory === 'lost-found'
                  ? t('Add_lost_pet')
                  : selectedCategory === 'sell'
                  ? t('Add_pet_for_sale')
                  : selectedCategory === 'my-pet'
                  ? t('Add_my_pet')
                  : t('Add_pet')
              }
            >
              {currentStep === 1 && (
                <ChooseOptionStep
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                  onSelectCategory={handleCategoryChange}
                />
              )}
              {currentStep === 2 && (
                <PersonalDetails
                  option={selectedCategory}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                  touched={touched}
                  errors={errors}
                  isValid={isValid}
                />
              )}

              {currentStep === 3 && (
                <MoreInfo
                  option={selectedCategory}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                  touched={touched}
                  errors={errors}
                />
              )}

              <ButtonsBox category={selectedCategory}>
                {currentStep === 1 && (
                  <FormButton
                    type="button"
                    w="248"
                    h="48"
                    onClick={handleCancel}
                  >
                    <span>
                      <Icon id="arrow-left" />
                      {t('Cancel')}
                    </span>
                  </FormButton>
                )}
                {currentStep !== 1 && (
                  <FormButton
                    type="button"
                    w="248"
                    h="48"
                    onClick={handleGoBack}
                  >
                    <span>
                      <Icon id="arrow-left" />
                      {t('Back')}
                    </span>
                  </FormButton>
                )}
                {currentStep !== 3 && (
                  <Button
                    type="button"
                    w="248"
                    h="48"
                    shape="solid"
                    onClick={handleNext}
                    disabled={
                      currentStep === 2 &&
                      (!values.name ||
                        !values.birthday ||
                        !values.breed ||
                        Object.keys(errors).length > 0)
                    }
                  >
                    {t('Next')}
                    <Icon id="paw" f="currentColor" s="none" />
                  </Button>
                )}

                {currentStep === 3 && (
                  <Button
                    type="submit"
                    w="248"
                    h="48"
                    shape="solid"
                    disabled={isSubmitting}
                  >
                    {t('Done')}
                    <Icon id="paw" f="currentColor" s="none" />
                  </Button>
                )}
              </ButtonsBox>
            </FormWrapper>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default AddPetForm;
