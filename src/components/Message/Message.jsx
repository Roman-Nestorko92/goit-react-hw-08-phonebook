import propTypes from 'prop-types';
import { Wrapper, Text } from './Mesage.styled';

function Message({ message }) {
  return (
    <Wrapper>
      <Text>{message}</Text>
    </Wrapper>
  );
}

Message.prototype = {
  message: propTypes.string,
};

export default Message;
