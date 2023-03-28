import { Item, Link, List } from './Navigations.styled';

const { useSelector } = require('react-redux');
const { getIsLoggedIn } = require('redux/auth/auth-selecors');

function Navigations() {
  const isLoggedIn = useSelector(state => getIsLoggedIn(state));

  return (
    <List>
      <Item>
        <Link to="/">Home</Link>
      </Item>
      {isLoggedIn && (
        <Item>
          <Link to="/contacts">Contacts</Link>
        </Item>
      )}
    </List>
  );
}

export default Navigations;
