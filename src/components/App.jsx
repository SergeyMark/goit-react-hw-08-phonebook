import React from "react";
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from "redux/contacts/contact-selector";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const IsLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(()=>{
    dispatch(fetchContacts());
  }, [dispatch])

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm/>
      <ContactFilter/>
      {(IsLoading && !error && (
        <>
          <br/>
          <p>in progress... Wait</p>
        </>
      )) || <ContactList/>}
    </div>
  );
};
