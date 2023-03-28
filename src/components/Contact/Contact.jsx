import PropTypes from 'prop-types';
import { FaTrash, FaUserEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Modal from 'components/Modal/Modal';
import useShowModal from 'hooks/useShowModal';
import {
  Button,
  ButtonItem,
  ButtonList,
  IconUser,
  Name,
  NameWrapper,
  Number,
  Wrapper,
} from './Contact.styled';

function Contact({ id, name, number }) {
  const { showModal, toggleModal } = useShowModal(false);
  const navigate = useNavigate();

  return (
    <>
      {showModal && <Modal onClose={toggleModal} title={name}></Modal>}

      <Wrapper>
        <NameWrapper>
          <IconUser />
          <Name>{name}</Name>
        </NameWrapper>

        <Number>{number}</Number>

        <ButtonList>
          <ButtonItem>
            <Button type="button" onClick={toggleModal}>
              <FaTrash />
            </Button>
          </ButtonItem>
          <ButtonItem>
            <Button type="button" onClick={() => navigate(`edit/${id}`)}>
              <FaUserEdit />
            </Button>
          </ButtonItem>
        </ButtonList>
      </Wrapper>
    </>
  );
}

Contact.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
