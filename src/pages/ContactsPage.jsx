import Container from 'components/Container/Container';
import AddButton from 'components/AddButton/AddButton';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import Message from 'components/Message/Message';
import { useGetContactsQuery } from 'redux/contacts/contact-api';

function ContactsPage() {
  const { data: contacts } = useGetContactsQuery();

  return (
    <Container title={contacts}>
      <AddButton text="Add new contact" />
      <Filter />
      {contacts && contacts.length > 0 ? (
        <ContactList />
      ) : (
        <Message message="Contact list is empty." />
      )}
    </Container>
  );
}

export default ContactsPage;
