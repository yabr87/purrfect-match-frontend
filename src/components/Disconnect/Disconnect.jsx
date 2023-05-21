import Container from '../../shared/components/Container';
import { Disconnected, Title, Image } from './Disconnect.styles';
import { useTranslation } from 'react-i18next';

const Disconnect = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Disconnected>
        <Title>
          <h2>{t('disconnect_title')}</h2>
        </Title>
        <Image />
      </Disconnected>
    </Container>
  );
};

export default Disconnect;
