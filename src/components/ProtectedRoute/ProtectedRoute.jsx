import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({
  component: Component,
  loggedIn,
  redirectTo,
  ...props
}) {

  return (
    loggedIn ? (
        <Component
          {...props}
        />) : (
        <Navigate
          to={redirectTo}/>
        )
  )
}

export default ProtectedRoute;
