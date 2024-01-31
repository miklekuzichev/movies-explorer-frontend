import React from 'react';
import Lead from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import Student from '../Student/Student';

function Main() {
  return (
    <main className="main">
      <Lead/>
      <AboutProject/>
      <Techs/>
      <Student/>
    </main>
  )
}

export default Main;
