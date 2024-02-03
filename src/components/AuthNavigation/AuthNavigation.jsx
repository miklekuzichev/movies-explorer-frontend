import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNavigation = React.memo((props) => {

  const AUTH_LINKS = [
    {
      id: 1,
      title: 'Регистрация',
      link: '/signup',
      className: 'header__auth_link header__auth_link_color_white',
    },
    {
      id: 2,
      title: 'Войти',
      link: '/signin',
      className: 'header__auth_link header__auth_link_bgcolor_green',
    },
  ];

  const authNavigationLinksMarkup = AUTH_LINKS.map((item) => (
    <li
      key={item.id}
      className="header__auth_nav_list_item">
      <NavLink
        className={item.className}
        to={item.link}>
        {item.title}
      </NavLink>
    </li>

  ));

  return (
    <nav className="header__auth_links">
      <ul className="header__auth_nav_list">
        {authNavigationLinksMarkup}
      </ul>
    </nav>
  )
});

export default AuthNavigation;
