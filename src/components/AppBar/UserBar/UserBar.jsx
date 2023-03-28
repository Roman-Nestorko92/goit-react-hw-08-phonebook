import useLogoutUser from 'hooks/useLogoutUser';
import {
  Button,
  Email,
  GroupWrapper,
  Text,
  TextWrapper,
  UserIcon,
  UserName,
  Wrapper,
} from './UserBar.styled';
const { useSelector } = require('react-redux');
const { getName, getEmail } = require('redux/auth/auth-selecors');

function UserBar() {
  const userName = useSelector(state => getName(state));
  const UserEmail = useSelector(state => getEmail(state));
  const logout = useLogoutUser();

  return (
    <Wrapper>
      <GroupWrapper>
        <UserIcon />
        <TextWrapper>
          <Text>
            Welcome, <UserName>{userName}</UserName>
          </Text>
          <Email>{UserEmail}</Email>
        </TextWrapper>
      </GroupWrapper>
      <Button type="button" onClick={logout}>
        Logout
      </Button>
    </Wrapper>
  );
}

export default UserBar;
