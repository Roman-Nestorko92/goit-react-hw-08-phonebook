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
import { useSelector } from 'react-redux';
import { getName, getEmail } from 'redux/auth/auth-selecors';
import useLogoutUser from 'hooks/useLogoutUser';

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
