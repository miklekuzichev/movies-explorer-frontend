import React from 'react';
import img from '../../images/Movies/v_pogone_za_banksy.png';
import MoviesButton from '../MoviesButton/MoviesButton';

function MoviesCard({
  onSaveFilm,
  onDeleteFilm,
}) {

  return (
      <div className="films__container-item">
        <div className="films__container-title">
          <h2 className="films__container-text">В погоне за Бенкси</h2>
          <span className="films__container-time">0ч 42м</span>
        </div>
        <img src={img} alt="Картинка постера фильма" className="films__container-image"/> 
          <MoviesButton
          onSaveFilm={onSaveFilm}
          onDeleteFilm={onDeleteFilm}
          />
      </div>
  )
}

export default MoviesCard;
