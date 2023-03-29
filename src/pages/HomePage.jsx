import homePhone from '../img/phone.png';
import Container from 'components/Container/Container';

function HomePage() {
  return (
    <Container>
      <img src={homePhone} alt="phoneBook" />
    </Container>
  );
}

export default HomePage;
