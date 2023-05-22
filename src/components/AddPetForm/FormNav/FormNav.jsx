import { NavContainer, Step } from './FormNav.styles';
import { useTranslation } from 'react-i18next';

const FormNav = ({ currentStep }) => {
  const { t } = useTranslation();
  return (
    <NavContainer>
      <Step active={currentStep === 1}>{t('Choose_option')}</Step>
      <Step active={currentStep === 2} disabled={currentStep < 2}>
        {t('Personal_details')}
      </Step>
      <Step active={currentStep === 3} disabled={currentStep < 3}>
        {t('More_info')}
      </Step>
    </NavContainer>
  );
};

export default FormNav;
