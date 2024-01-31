import React from 'react';
import promo_img from '../../images/Promo/text__COLOR_landing-logo.png';

const PROMO_TEXT = 'Листайте ниже, чтобы узнать больше про этот проект и его создателя.';
const PROMO_BUTTON_TEXT = 'Узнать больше';

function Promo(props) {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__content">
          <h1 className="promo__title">Учебный проект студента факультета<br/>Веб-разработки.</h1>
          <p className="promo__subtitle">{PROMO_TEXT}</p>
          <a href="#intro" className="promo__button">{PROMO_BUTTON_TEXT}</a>
        </div>
        <figure className="promo__figure">
          <img src={promo_img} alt="Изображение глобуса, составленное из маленьких слов WEB" className="promo__image"/>
        </figure>
        {props.children}
      </div>
    </section>
  )
}

export default Promo;
