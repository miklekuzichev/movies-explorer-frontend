import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';

function MoviesCardList({
  locationPathname,
  onSaveMovie,
  onDeleteSavedMovie,
}) {

  const isShowButtonActive = true;
 
  return (
    <section className="films" aria-label="Галерея фильмов">
      <div className="films__container">
      <MoviesCard
        onSaveMovie={onSaveMovie}
        onDeleteSavedMovie={onDeleteSavedMovie}
      />
      <MoviesCard
        onSaveMovie={onSaveMovie}
        onDeleteSavedMovie={onDeleteSavedMovie}
      />
      <MoviesCard
        onSaveMovie={onSaveMovie}
        onDeleteSavedMovie={onDeleteSavedMovie}
      />
      <MoviesCard
        onSaveMovie={onSaveMovie}
        onDeleteSavedMovie={onDeleteSavedMovie}
      />
      <MoviesCard
        onSaveMovie={onSaveMovie}
        onDeleteSavedMovie={onDeleteSavedMovie}
      />
      <MoviesCard
        onSaveMovie={onSaveMovie}
        onDeleteSavedMovie={onDeleteSavedMovie}
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
