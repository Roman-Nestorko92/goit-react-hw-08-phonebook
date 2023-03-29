import Container from 'components/Container/Container';
import { Wrapper } from './AppBar.styled';
import AuthNav from './AuthNav/AuthNav';
import Logo from './Logo/Logo';
import Navigations from './Navigations/Navigations';
import UserBar from './UserBar/UserBar';

import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selecors';

function AppBar() {
  const isLoggedIn = useSelector(state => getIsLoggedIn(state));

  return (
    <Container>
      <Wrapper>
        <Logo />
        <Navigations />
        {isLoggedIn ? <UserBar /> : <AuthNav />}
      </Wrapper>
    </Container>
  );
}

export default AppBar;
