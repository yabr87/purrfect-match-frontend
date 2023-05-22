import Container from '../../shared/components/Container';
import { useTranslation } from 'react-i18next';
import { Title, Pictures, SectionWrapper } from './Main.styles';

const Main = () => {
  const { t } = useTranslation();
  return (
    <SectionWrapper>
      <Container>
        <Title>{t('mainPage_title')}</Title>
      </Container>
      <Pictures />
    </SectionWrapper>
  );
};

export default Main;
