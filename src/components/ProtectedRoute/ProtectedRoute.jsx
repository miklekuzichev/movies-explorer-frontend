import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({
  component: Component,
  redirectTo,
  ...props
}) {

  return (
    props.loggedIn ? (
        <Component
          {...props}
        />) : (
        <Navigate
          to={redirectTo}/>
        )
  )
}

export default ProtectedRoute;
