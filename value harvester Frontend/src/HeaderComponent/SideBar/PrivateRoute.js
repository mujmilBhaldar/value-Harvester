import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
  const logUser = sessionStorage.getItem('loginUser');
  const loginUser = JSON.parse(logUser);
  const auth = loginUser;

  return auth ? <Outlet /> : <Navigate to="/" />;

};