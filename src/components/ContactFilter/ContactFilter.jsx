import { useDispatch, useSelector } from "react-redux"; 
import { filterContact } from "redux/filter/filterSlice";
import { selectContacts } from "redux/contacts/contact-selector";


export const ContactFilter = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  return(
    <>
      {contacts.length > 0 && (
        <div>
            <label>Find contacts by name </label>
              <input
                type="text"
                name="filter"
                onChange={event => {
                  const { value } = event.target;
                  const action = filterContact(value)
                  dispatch(action)
                }}
              />
        </div>
      )}
    </>
  )
}
