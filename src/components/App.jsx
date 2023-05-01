import React from "react";
import { Route, Routes } from "react-router-dom";
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from "redux/contacts/contact-selector";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { Layout } from "./Layout";
import Home from "page/Home";
import Registr from "page/Register";
import Login from "page/Login";
import Contacts from "page/Contacts";



export const App = () => {
  const dispatch = useDispatch();
  const IsLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(()=>{
    dispatch(fetchContacts());
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path="/register" element={
          <RestrictedRoute redirectTo="/contacts" component={<Registr/>}/>
        }/>
        <Route path="/login" element={
          <RestrictedRoute redirectTo="/contacts" component={<Login/>}/>
        }/>
        <Route path="/contacts" element={
          <PrivateRoute redirectTo="/login" component={<Contacts/>}/>
        }/>
        <Route path="*" navigateTo="/" element={<Home/>} />
      </Route>
    </Routes>
  );
};
