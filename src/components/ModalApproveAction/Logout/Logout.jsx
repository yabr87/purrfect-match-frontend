// import Button from 'shared/components/Button';
import Container from 'shared/components/Container';
import Section from 'shared/components/Section';
import { Title } from './Logout.styles';

const Logout = ({ close }) => {
  return (
    <Container>
      <Section>
        <Title as="h2">Already leaving?</Title>
        {/* <Button type="button" text="Cancel" onBtnClick={() => close()} />
        <Button type="button" text="Logout" onBtnClick={ApproveLogout} /> */}
      </Section>
    </Container>
  );
};

export default Logout;
