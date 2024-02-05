import React from 'react';
import Lead from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import Student from '../Student/Student';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Main({
  loggedIn,
  setOpenMenu,
}) {

  const headerClass = 'header';
  const headerAccountIconClass = 'header__account-icon-background header__account-icon-background-blue';
  
  return (
    <>
    <Header
            loggedIn={loggedIn}
            onOpenMenu={setOpenMenu}
            className={headerClass}
            classNameIcon={headerAccountIconClass}/>
    <main className="main">
      <Lead/>
      <AboutProject/>
      <Techs/>
      <Student/>
    </main>
    <Footer />
    </>
  )
}

export default Main;
