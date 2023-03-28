import Container from 'components/Container/Container';
import { Copyright, IconBook, Wrapper } from './Footer.styled';

function Footer() {
  return (
    <Container>
      <Wrapper>
        <IconBook />
        <Copyright>@ Phonebook 2023</Copyright>
      </Wrapper>
    </Container>
  );
}

export default Footer;
