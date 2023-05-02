import { useDispatch, useSelector } from "react-redux"; 
import { deleteContact } from "redux/contacts/operations";
import { selectVisibleContacts } from "redux/selectors";
import { Group, List, Button } from "@mantine/core";
import { Check } from 'tabler-icons-react';


export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <Group position="center">
      {contacts.length > 0 && (
        <List 
          spacing="xs" 
          size="xl" 
          center 
          icon={ <Check size={24} strokeWidth={3} color={'green'} style={{marginTop: '8px'}}/> }
        >
            {contacts.map (({id, name, number}) => (
                <List.Item key={id} >
                  <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <span style={{fontSize: '25px'}}>{name}</span> : <span style={{fontSize: '25px'}}>{number}</span>
                      <Button 
                        radius="xs" size="xs" uppercase
                        type="button"
                        onClick={() => {
                          const action = deleteContact(id);
                          dispatch(action);
                        }}
                        style={{marginLeft: '10px'}}
                      >
                        Delete
                      </Button>
                    </div>
                </List.Item>
            ))}
        </List>
      )}
    </Group>
  )
}