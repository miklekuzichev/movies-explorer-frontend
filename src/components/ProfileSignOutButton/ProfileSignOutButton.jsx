import React from 'react';

function ProfileSignoutButton({
  onSignOut,
  title,
}) {

  return (
    <button
      className='profile__signout-button'
      type='button'
      onClick={onSignOut}>
      {title}
    </button>
  )
}

export default ProfileSignoutButton;
