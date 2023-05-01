import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactFilter } from "components/ContactFilter/ContactFilter";
import { ContactList } from "components/ContactList/ContactList";


export default function Contacts() {
    return(
        <div>
            <ContactForm/>
            <ContactFilter/>
            <ContactList/>
        </div>
    )
}