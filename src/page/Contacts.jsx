import React from "react";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactFilter } from "components/ContactFilter/ContactFilter";
import { ContactList } from "components/ContactList/ContactList";
import { fetchContacts } from "redux/contacts/operations";
import { selectError, selectIsLoading } from "redux/contacts/contact-selector";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader, Group } from '@mantine/core';


export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading)
    const error = useSelector(selectError)

    useEffect(()=>{
        dispatch(fetchContacts());
    },[dispatch])

    return(
        <div style={{marginTop: '150px'}}>
            <h1 style={{textAlign: 'center', textTransform: 'uppercase'}}>Phonebook</h1>
            <ContactForm/>
            <ContactFilter/>
            {(isLoading && !error && (
                <Group position="center" mt='15px' mb='15px'>
                    <Loader/>
                </Group>
            )) || <ContactList/>}
        </div>
    )
}