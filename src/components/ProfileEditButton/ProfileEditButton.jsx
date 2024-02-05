import React from 'react';

function ProfileEditButton({
  title,
  onClick,
}) {

  return (
    <button
      className='profile__edit-button'
      onClick={onClick}>
      {title}
    </button>
  )
}

export default ProfileEditButton;
