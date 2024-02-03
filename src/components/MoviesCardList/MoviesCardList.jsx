import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';

function MoviesCardList({
  locationPathname,
  onSaveFilm,
  onDeleteFilm,
}) {

  const isShowButtonActive = true;
 
  return (
    <section className="films" aria-label="Галерея фильмов">
      <div className="films__container">
      <MoviesCard
        onSaveFilm={onSaveFilm}
        onDeleteFilm={onDeleteFilm}
      />
      <MoviesCard
        onSaveFilm={onSaveFilm}
        onDeleteFilm={onDeleteFilm}
      />
      <MoviesCard
        onSaveFilm={onSaveFilm}
        onDeleteFilm={onDeleteFilm}
      />
      <MoviesCard
        onSaveFilm={onSaveFilm}
        onDeleteFilm={onDeleteFilm}
      />
      <MoviesCard
        onSaveFilm={onSaveFilm}
        onDeleteFilm={onDeleteFilm}
      />
      <MoviesCard
        onSaveFilm={onSaveFilm}
        onDeleteFilm={onDeleteFilm}
      />
      </div>
      {locationPathname === '/movies' && isShowButtonActive ? (
        <ShowMoreButton
        />
      ) : null}
    </section>
  )
}

export default MoviesCardList;
