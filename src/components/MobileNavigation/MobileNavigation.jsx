import React from 'react';
import { NavLink } from 'react-router-dom';

const MobileNavigation = React.memo((props) => {

  const MOBILE_NAVIGATION_LINKS = [
    {
      id: 1,
      title: 'Главная',
      link: '/',
      classname: 'mobile-navigation__link',
      onClick: () => {
        props.onModalClose();
      },
      exact: true,
    },
    {
      id: 2,
      title: 'Фильмы',
      link: '/movies',
      classname: 'mobile-navigation__link',
      onClick: () => {
        props.onModalClose();
      },
      exact: false,
    },
    {
      id: 3,
      title: 'Сохранённые фильмы',
      link: '/saved-movies',
      classname: 'mobile-navigation__link',
      onClick: () => {
        props.onModalClose();
      },
      exact: false,
    },
  ];

  const mobileNavigationLinksMarkup = MOBILE_NAVIGATION_LINKS.map((item) => (
    <li
      key={item.id}
      className="mobile-navigation__nav-list-item"
    >
      <NavLink
        className={({ isActive }) =>
          isActive ? 'mobile-navigation__link mobile-navigation__link-active' : 'mobile-navigation__link'
        }
        to={item.link}
        onClick={item.onClick}
        exact={item.exact}
      >
        {item.title}
      </NavLink>
    </li>
  ));

  return (
    <nav className="mobile-navigation">
      <ul className="mobile-navigation__nav-list">
        {mobileNavigationLinksMarkup}
      </ul>
    </nav>
  )
})

export default MobileNavigation;
