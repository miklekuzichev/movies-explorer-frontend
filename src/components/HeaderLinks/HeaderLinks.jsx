import React from 'react';

const HeaderLinks = React.memo((props) => {

  return (
    <nav className="header__links">
      <a href="/movies" className="header__link">Фильмы</a>
      <a href="/saved-movies" className="header__link">Сохранённые фильмы</a>  
      <div className="header__account">
        <a href="/profile" className="header__account_text">Аккаунт</a>
        <a href="/profile" className={props.classNameIcon}><span className="header__account_icon"></span></a>
      </div>
    </nav>
  )
})

export default HeaderLinks;
