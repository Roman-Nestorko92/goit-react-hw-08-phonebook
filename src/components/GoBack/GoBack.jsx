import propTypes from 'prop-types';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Button, Label } from './GoBack.styled';

function GoBack({ text, path }) {
  const navigate = useNavigate();
  const goToPage = () => navigate(path);

  return (
    <Button type="button" onClick={goToPage}>
      <FaLongArrowAltLeft />
      <Label>{text}</Label>
    </Button>
  );
}

GoBack.prototype = {
  text: propTypes.string,
  path: propTypes.string,
};

export default GoBack;
