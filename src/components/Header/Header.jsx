import React from 'react';
import AuthNavigation from '../AuthNavigation/AuthNavigation';
import HeaderLinks from '../HeaderLinks/HeaderLinks';
import Logo from '../Logo/Logo';
import MenuButton from '../MenuButton/MenuButton';

function Header(props) {
  return (
    <header className={props.className}>
      <div className="header__container">
      <Logo />
      {props.loggedIn && (
        <MenuButton
        onOpenMenu={props.onOpenMenu}
      />
      )}
      {props.loggedIn ? (
        <HeaderLinks
          classNameIcon={props.classNameIcon}
        />
      )
      : (
          <AuthNavigation />
        )}
      </div>
    </header>
  )
}

export default Header;
