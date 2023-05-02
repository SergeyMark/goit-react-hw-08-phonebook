import React from "react";
import { Route, Routes } from "react-router-dom";
// import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { Layout } from "./Layout";
import Home from "page/Home";
import Registr from "page/Register";
import Login from "page/Login";
import Contacts from "page/Contacts";
import { useAuth } from "../hooks/useAuth";
import { refreshUser } from "redux/auth/auth-operations";



export const App = () => {
  const dispatch = useDispatch();
  const {isRefreshing} = useAuth();
  

  // useEffect(()=>{
  //   dispatch(fetchContacts());
  // }, [dispatch])

  useEffect(()=>{
    dispatch(refreshUser());
  }, [dispatch])

  return isRefreshing ? (
    <p>Refreshing user</p>
  ):(
    <>
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
    </>
  );
};
