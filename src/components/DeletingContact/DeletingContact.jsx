import propTypes from 'prop-types';
import useDeletingContact from 'hooks/useDeletingContact';
import { ButtonCancel, Item, List, Name, Text } from './DeletingContact.styled';

function DeletingContact({ id, name, toggleModal }) {
  const { isDeleting, deleteSelectedContact } = useDeletingContact(
    id,
    name,
    toggleModal
  );

  return (
    <>
      <Text>
        Are you sure you want delete a contact <Name>{name}</Name>?
      </Text>
      <List>
        <Item>
          <ButtonCancel type="button" onClick={toggleModal}>
            Cancel
          </ButtonCancel>
        </Item>
        <Item>
          <ButtonCancel type="button" onClick={deleteSelectedContact}>
            {isDeleting ? '...' : 'Delete'}
          </ButtonCancel>
        </Item>
      </List>
    </>
  );
}

DeletingContact.prototype = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  toggleModal: propTypes.func.isRequired,
};

export default DeletingContact;
