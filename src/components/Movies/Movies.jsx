import React from 'react';
import { useLocation } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import Notification from '../Notification/Notification';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies({
  loggedIn,
  setOpenMenu,
  isLoadingData,
  //moviesData,
  //onSaveFilm,
  //onDeleteFilm,
}) {

  const location = useLocation();
  const headerClass = 'header header__black';
  const headerAccountIconClass = 'header__account-icon-background header__account-icon-background-gray';
  
  return (
    <>
    <Header
            loggedIn={loggedIn}
            onOpenMenu={setOpenMenu}
            className={headerClass}
            classNameIcon={headerAccountIconClass}
    />
    <main>
      <SearchForm/>
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
        //data={moviesData}
        //onSaveFilm={onSaveFilm}
        //onDeleteFilm={onDeleteFilm}
      />
    </main>
    <Footer />
    </>
  )
}

export default Movies;
