import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNavigation = React.memo((props) => {

  const AUTH_LINKS = [
    {
      id: 1,
      title: 'Регистрация',
      link: '/signup',
      className: 'header__auth-link header__auth-link-color-white',
    },
    {
      id: 2,
      title: 'Войти',
      link: '/signin',
      className: 'header__auth-link header__auth-link-bgcolor-green',
    },
  ];

  const authNavigationLinksMarkup = AUTH_LINKS.map((item) => (
    <li
      key={item.id}
      className="header__container-auth-nav-list-item">
      <NavLink
        className={item.className}
        to={item.link}>
        {item.title}
      </NavLink>
    </li>

  ));

  return (
    <nav className="header__auth-links">
      <ul className="header__auth-nav-list">
        {authNavigationLinksMarkup}
      </ul>
    </nav>
  )
});

export default AuthNavigation;
