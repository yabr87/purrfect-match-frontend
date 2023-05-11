import Button from 'shared/components/Button';
import Container from 'shared/components/Container';
import Section from 'shared/components/Section';
import { Title } from './Logout.styles';

const Logout = ({ close }) => {
  const CloseModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      close();
    }
  };

  const ApproveLogout = () => [];

  return (
    <Container>
      <Section>
        <Title>Already leaving?</Title>
        <Button type="button" onBtnClick={CloseModal}>
          Cancel
        </Button>
        <Button type="button" onBtnClick={ApproveLogout}>
          Logout
        </Button>
      </Section>
    </Container>
  );
};

export default Logout;
