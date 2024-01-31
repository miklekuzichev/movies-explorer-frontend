import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNavigation = React.memo((props) => {

  const AUTH_LINKS = [
    {
      id: 1,
      title: 'Регистрация',
      link: '/signup',
      className: 'auth-header__link auth-header__link_color_white',
    },
    {
      id: 2,
      title: 'Войти',
      link: '/signin',
      className: 'auth-header__link auth-header__link_bgcolor_green',
    },
  ];

  const authNavigationLinksMarkup = AUTH_LINKS.map((item) => (
    <li
      key={item.id}
      className="auth-header__nav-list-item">
      <NavLink
        className={item.className}
        to={item.link}>
        {item.title}
      </NavLink>
    </li>

  ));

  return (
    <nav className="auth-header__links">
      <ul className="auth-header__nav-list">
        {authNavigationLinksMarkup}
      </ul>
    </nav>
  )
});

export default AuthNavigation;
