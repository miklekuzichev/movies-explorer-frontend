import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import Notification from '../Notification/Notification';

function SavedMovies({
  onDeleteSavedMovie,
  savedMovies,
  isSavedMoviesEmpty,
  isLoadingData,
  isNoSavedMoviesFound,
}) {

  const [isMoviesApiError, setIsMoviesApiError] = React.useState(false);
  setIsMoviesApiError(false);

  return (
    <main>
      <SearchForm/>
      {!isLoadingData && isSavedMoviesEmpty && (
        <Notification/>
      )}
      {!isLoadingData && isNoSavedMoviesFound && (
        <Notification/>
      )}
      {isMoviesApiError && (
        <Notification/>
      )}
      <MoviesCardList
        data={savedMovies}
        onDeleteSavedMovie={onDeleteSavedMovie}/>
    </main>
  )
}

export default SavedMovies;
