import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies({
  loggedIn,
  onSaveFilm,
  setOpenMenu,
  onDeleteFilm,
}) {

  const location = useLocation();
  const headerClass = 'header header__color_black';
  const headerAccountIconClass = 'header__account_icon_background header__account_icon_background_gray';
  
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
        //onSubmit={handleSubmit}
      />
      <MoviesCardList
        locationPathname={location.pathname}
        onSaveFilm={onSaveFilm}
        onDeleteFilm={onDeleteFilm}
      />
    </main>
    <Footer />
    </>
  )
}

export default SavedMovies;
