import React from "react";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactFilter } from "components/ContactFilter/ContactFilter";
import { ContactList } from "components/ContactList/ContactList";
import { fetchContacts } from "redux/contacts/operations";
import { selectError, selectIsLoading } from "redux/contacts/contact-selector";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading)
    const error = useSelector(selectError)

    useEffect(()=>{
        dispatch(fetchContacts());
    },[dispatch])

    return(
        <div>
            <h1>Phonebook</h1>
            <ContactForm/>
            <ContactFilter/>
            {(isLoading && !error && (
                <>
                    <br/>
                    <p>in progress... Wait</p>
                </>
            )) || <ContactList/>}
        </div>
    )
}