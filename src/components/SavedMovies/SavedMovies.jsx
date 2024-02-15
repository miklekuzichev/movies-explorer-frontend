import React, { useEffect, useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notification from '../Notification/Notification';
import { MOVIES_ERRORS_TEXTS, NO_MOVIES_FOUND_TEXT } from '../../constants/constants';

function SavedMovies({
  loggedIn,
  savedMovies,
  setOpenMenu,
  isSavedMoviesEmpty,
  shortMoviesData,
  isLoadingData,
  onDeleteSavedMovie,
  isNoSavedMoviesFound,
  getSavedMoviesResStatus,
  handleSearchSavedMoviesData,
  handleCheckboxClick,
  isCheckboxActive,
  searchRequest,
  locationPathname,
}) {

  const [isMoviesApiError, setIsMoviesApiError] = useState(false);
  const headerClass = 'header header__black';
  const headerAccountIconClass = 'header__account-icon-background header__account-icon-background-gray';

  const handleSubmit = (data) => {
    handleSearchSavedMoviesData(data);
  }

  const handleErrors = () => {
    if (getSavedMoviesResStatus) {
      if (getSavedMoviesResStatus === 200) {
        setIsMoviesApiError(false);
      } else {
        setIsMoviesApiError(true);
      }
    };
  };

  useEffect(() => {
    handleErrors();
  }, [getSavedMoviesResStatus])

  useEffect(() => {
    handleSearchSavedMoviesData();
  }, [])

  return (
    <>
    <Header
      loggedIn={loggedIn}
      onOpenMenu={setOpenMenu}
      className={headerClass}
      classNameIcon={headerAccountIconClass}
    />
    <main>
      <SearchForm
        onSubmit={handleSubmit}
        handleCheckboxClick={handleCheckboxClick}
        checkboxState={isCheckboxActive}
        searchRequest={searchRequest}
        locationPathname={locationPathname}
      />
      {isSavedMoviesEmpty && !isLoadingData && (
        <Notification
        text={NO_MOVIES_FOUND_TEXT.BASE_TEXT}
        />
      )}
      {isNoSavedMoviesFound && !isLoadingData && (
        <Notification
          text={NO_MOVIES_FOUND_TEXT.BASE_TEXT}
        />
      )}
      {isMoviesApiError && (
        <Notification
          text={MOVIES_ERRORS_TEXTS.BASE_ERROR}
        />
      )}
      <MoviesCardList
        data={isCheckboxActive ? shortMoviesData : savedMovies}
        locationPathname={locationPathname}
        onDeleteSavedMovie={onDeleteSavedMovie}
      />
    </main>
    <Footer />
    </>
  )
}

export default SavedMovies;
