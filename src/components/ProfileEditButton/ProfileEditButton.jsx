import React from 'react';

function ProfileEditButton({
  title,
  onClick,
}) {

  return (
    <button
      className='profile__edit_button'
      onClick={onClick}>
      {title}
    </button>
  )
}

export default ProfileEditButton;
