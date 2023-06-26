import React from 'react';

import { toast } from 'react-toastify';

import {
  ModalContainer,
  Title,
  VerifyForm,
  VerifyField,
  VerifyLabel,
} from './VerifyEmail.styles';

import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';

import Loader from 'shared/components/Loader';
import Button from 'shared/components/Button';

const VerifyEmail = props => {
  const { t } = useTranslation();

  const handleSubmit = () => {
    console.log('submit');
  };

  return (
    <ModalContainer>
      <Title>Confirm your email</Title>
      <p>
        Verify Email Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatem aspernatur animi dolorem.
      </p>
      <Formik onSubmit={handleSubmit} initialValues={{ code: '' }}>
        {({
          isSubmitting,
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
        }) => (
          <>
            {isSubmitting ? (
              <Loader />
            ) : (
              <VerifyForm>
                <VerifyLabel htmlFor="code">{t('enter_code')}:</VerifyLabel>
                <VerifyField
                  name="code"
                  placeholder={t('Type_your_new_price')}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.code}
                  errors={touched.code && errors.code}
                />

                <Button w="120" shape="solid">
                  Verify
                </Button>
              </VerifyForm>
            )}
          </>
        )}
      </Formik>
    </ModalContainer>
  );
};
export default VerifyEmail;
