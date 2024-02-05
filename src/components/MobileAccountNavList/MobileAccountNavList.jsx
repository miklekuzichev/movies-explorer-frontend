import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as AccountIcon } from '../../images/Header/icon__COLOR_icon-main.svg'

const MobileAccountNavList = React.memo((props) => {

  const MOBILE_ACCOUNT_LINKS = [
    {
      id: 1,
      link: '/profile',
      title: 'Аккаунт',
      className: 'mobile-account__nav-link',
      children: (
        <AccountIcon
          className="mobile-account__nav-link-icon"
        />
      ),
    },
  ];

  const mobileAcountLinksMarkup = MOBILE_ACCOUNT_LINKS.map((item) => (
    <li
      key={item.id}
      className="mobile-account__nav-list-item"
    >
      <Link
        key={item.id}
        className={item.className}
        to={item.link}
        onClick={props.onModalClose}
      >
        {item.title}
        {item.children}
      </Link>
    </li>


  ));

  return (
    <nav
      className="mobile-account__nav"
    >
      <ul
        className="mobile-account__nav-list"
      >
        {mobileAcountLinksMarkup}
      </ul>
    </nav>
  )
});

export default MobileAccountNavList;
