import React from 'react';

function ShowMoreButton({
  onClick,
}) {

  return (
    <button
      className='films__button'
      onClick={onClick}>
      Ещё
    </button>
  )
}

export default ShowMoreButton;
