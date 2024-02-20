import React from 'react';

function AuthError({ errorText }) {

  return (
    <span
      className='auth-error'
      aria-live="polite">
      {errorText}
    </span>
  )
}

export default AuthError;
