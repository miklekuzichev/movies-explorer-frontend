import React from 'react';

function MoviesButton({
  onSaveFilm,
  onDeleteFilm,
}) {
    const saveFilmClass = onSaveFilm ? "films-container__button films-container_button_active" : 'films-container__button films-container__button_save';
    const saveFilmIconClass = onSaveFilm ? "films__button films__button_saved" : onDeleteFilm ? 'films__button films__button_deleted' : 'films__button_hide';

  return (
    <button className={saveFilmClass} type="submit">
        {(onSaveFilm) ? '' : (onDeleteFilm) ? '' : 'Сохранить'}
        <span className={saveFilmIconClass}></span>
    </button>
  )
}

export default MoviesButton;
