import React from 'react';

function ShowMoreButton({
  onClick,
}) {

  return (
    <button
      className='films__more-button'
      type="button"
      onClick={onClick}>
      Ещё
    </button>
  )
}

export default ShowMoreButton;
