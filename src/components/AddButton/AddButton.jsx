import propTypes from 'prop-types';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { Button, ButtonText } from './AddButton.styled';

function AddButton({ text }) {
  return (
    <Button to="/contacts/add">
      <ButtonText>{text}</ButtonText>
      <BsFillPersonPlusFill size={20} />
    </Button>
  );
}

AddButton.prototype = {
  text: propTypes.string,
};

export default AddButton;
