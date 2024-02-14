import React, { useState, useEffect } from 'react';
import Preloader from '../Preloader/Preloader';
import Notification from '../Notification/Notification';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { NO_MOVIES_FOUND_TEXT, MOVIES_ERRORS_TEXTS } from '../../constants/constants';

function Movies({
  loggedIn,
  setOpenMenu,
  isLoadingData,
  moviesData,
  shortMoviesData,
  isNoMoviesFound,
  onSubmit,
  resStatus,
  onSaveMovie,
  onDeleteSavedMovie,
  handleSearchSavedMoviesData,
  handleCheckboxClick,
  isCheckboxActive,
  searchRequest,
  locationPathname,
}) {

  const headerClass = 'header header__black';
  const headerAccountIconClass = 'header__account-icon-background header__account-icon-background-gray';
  const [isMoviesApiError, setIsMoviesApiError] = useState(false);

  const handleSubmit = (data) => {
    onSubmit(data);
  }

  const handleErrors = () => {
    if (resStatus) {
      switch (resStatus) {
        case 200:
          setIsMoviesApiError(false);
          break;
        default:
          setIsMoviesApiError(true);
          break;
      };
    };
  };

  useEffect(() => {
    handleErrors();
  }, [resStatus])

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
      {!isLoadingData && isNoMoviesFound && (
        <Notification
        text={NO_MOVIES_FOUND_TEXT.BASE_TEXT}
        />
      )}
      {isLoadingData && (
        <Preloader/>
      )}
      {isMoviesApiError && (
        <Notification
        text={MOVIES_ERRORS_TEXTS.BASE_ERROR}
        />
      )}
      <MoviesCardList
        locationPathname={locationPathname}
        data={isCheckboxActive ? shortMoviesData : moviesData}//{moviesData}
        onSaveMovie={onSaveMovie}
        onDeleteSavedMovie={onDeleteSavedMovie}
      />
    </main>
    <Footer />
    </>
  )
}

export default Movies;
