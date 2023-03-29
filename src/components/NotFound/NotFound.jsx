import propTypes from 'prop-types';
import Container from 'components/Container/Container';
import { StyledLink, Text, Title, Wrapper } from './NotFound.styled';

function NotFound({ data, status }) {
  return (
    <Container>
      <Wrapper>
        <Title>
          Sorry {status} {data} bad
        </Title>
        <Text>Something went wrong!</Text>
        <StyledLink to="/">Go back to the main page</StyledLink>
      </Wrapper>
    </Container>
  );
}

NotFound.prototype = {
  data: propTypes.string,
  status: propTypes.number,
};

export default NotFound;
