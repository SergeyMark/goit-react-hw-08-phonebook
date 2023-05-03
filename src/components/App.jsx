import React from "react";
import { Route, Routes } from "react-router-dom";
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
import { Loader, Group } from '@mantine/core';


export const App = () => {
  const dispatch = useDispatch();
  const {isRefreshing} = useAuth();
  
  useEffect(()=>{
    dispatch(refreshUser());
  }, [dispatch])

  return isRefreshing ? (
    <Group position="center" mt='400px' mb='15px'>
        <Loader size="xl" color="dark" variant="dots"/>
    </Group>
  ):(
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path="register" element={
          <RestrictedRoute redirectTo="/contacts" component={<Registr/>}/>
        }/>
        <Route path="login" element={
          <RestrictedRoute redirectTo="/contacts" component={<Login/>}/>
        }/>
        <Route path="contacts" element={
          <PrivateRoute redirectTo="/login" component={<Contacts/>}/>
        }/>
        <Route path="*" navigateTo="/" element={<Home/>} />
      </Route>
    </Routes>
    </>
  );
};
