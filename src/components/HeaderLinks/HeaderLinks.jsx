import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLinks = React.memo((props) => {

  return (
    <nav className="header__links">
      <Link className="header__link" to="/movies">Фильмы</Link>
      <Link className="header__link" to="/saved-movies">Сохранённые фильмы</Link>
      <div className="header__account">
        <Link className="header__account-text" to="/profile">Аккаунт</Link>
        <Link className={props.classNameIcon} to="/profile"><span className="header__account-icon"></span></Link>
      </div>
    </nav>
  )
})

export default HeaderLinks;
