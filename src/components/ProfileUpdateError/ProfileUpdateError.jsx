import React from 'react';

function ProfileUpdateError({ errorText }) {

  return (
    <span
      className='profile__update-error'>
      {errorText}
    </span>
  )
}

export default ProfileUpdateError;
