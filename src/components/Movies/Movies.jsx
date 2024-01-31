import React from 'react';
import { useLocation } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import Notification from '../Notification/Notification';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({
  isLoadingData,
  moviesData,
  onSaveMovie,
  onDeleteSavedMovie,
}) {

  let location = useLocation();

  return (
    <main>
      <SearchForm
      />

      {/*!isLoadingData && isNoMoviesFound*/ false && (
        <Notification/>
      )}

      {isLoadingData && (
        <Preloader/>
      )}
      {/*isMoviesApiError*/false && (
        <Notification/>
      )}
      <MoviesCardList
        locationPathname={location.pathname}
        data={moviesData}
        onSaveMovie={onSaveMovie}
        onDeleteSavedMovie={onDeleteSavedMovie}
      />
    </main>
  )
}

export default Movies;
