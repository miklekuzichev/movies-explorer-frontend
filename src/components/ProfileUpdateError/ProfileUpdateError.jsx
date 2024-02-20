import React from 'react';

function ProfileUpdateError({ errorText }) {

  return (
    <span
      className='profile__update_error'>
      {errorText}
    </span>
  )
}

export default ProfileUpdateError;
