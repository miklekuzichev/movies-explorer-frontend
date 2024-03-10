import React from 'react';

function MoviesButton({
  onClick,
  isSaved,
  locationPathname,
}) {

    const saveFilmClass =  (locationPathname === '/movies') && isSaved ? 'films__container-button films__container-button-active' : 'films__container-button films__container-button-save';
    const saveFilmIconClass = (locationPathname === '/saved-movies') ? 'films__button films__button-deleted' :  isSaved ? "films__button films__button-saved" : 'films__button-hide';

  return (
    <button 
      className={saveFilmClass}
      type='button'
      onClick={onClick}
    >
        {(locationPathname === '/saved-movies') ? '' : (isSaved) ? '' : 'Сохранить'}
        <span className={saveFilmIconClass}></span>
    </button>
  )
}

export default MoviesButton;
