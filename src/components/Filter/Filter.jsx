import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/contacts-slice';
import { Input, Label, Text } from './Filter.styled';

function Filter() {
  const dispatch = useDispatch();

  const changeFieldFilter = e => {
    const value = e.currentTarget.value;
    dispatch(changeFilter(value));
  };

  return (
    <Label>
      <Text>Find contacts by name</Text>
      <Input type="text" onChange={changeFieldFilter} name="filter" />
    </Label>
  );
}

export default Filter;
