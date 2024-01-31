import React from 'react';

function MoviesButton({
  onSaveFilm,
  onDeleteFilm,
}) {
    const saveFilmClass = onSaveFilm ? "films__container-button films__container-button-active" : 'films__container-button films__container-button-save';
    const saveFilmIconClass = onSaveFilm ? "films__button films__button-saved" : onDeleteFilm ? 'films__button films__button-deleted' : 'films__button-hide';

  return (
    <button className={saveFilmClass} type="submit">
        {(onSaveFilm) ? '' : (onDeleteFilm) ? '' : 'Сохранить'}
        <span className={saveFilmIconClass}></span>
    </button>
  )
}

export default MoviesButton;
