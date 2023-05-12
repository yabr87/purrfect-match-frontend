import Container from 'shared/components/Container';
import Section from 'shared/components/Section';
import { Title, Text } from './Logout.styles';

const Logout = ({ close }) => {
  return (
    <Container>
      <Section>
        <Title as="h2">Congrats!</Title>
        <Text></Text>
      </Section>
    </Container>
  );
};

export default Logout;
