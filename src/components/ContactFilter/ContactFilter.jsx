import { useDispatch, useSelector } from "react-redux"; 
import { filterContact } from "redux/filter/filterSlice";
import { selectContacts } from "redux/contacts/contact-selector";
import { Group, TextInput } from "@mantine/core";
import { AddressBook } from 'tabler-icons-react';

export const ContactFilter = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  return(
    <Group position="center" mt='35px' mb='35px'>
      {contacts.length > 0 && (
        <div>
            <TextInput
              type="text"
              name="filter"
              label='Find contacts by name '
              icon={<AddressBook />}
              variant="filled"
              placeholder="Your email"
              size="md"
              onChange={event => {
                const { value } = event.target;
                const action = filterContact(value)
                dispatch(action)
              }}
            />
        </div>
      )}
    </Group>
  )
}
