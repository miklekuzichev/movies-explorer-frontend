import React from 'react';
import logo from '../../images/Logo/logo.svg';

const Logo = React.memo(() => {
  return (
    <a href="./" className="header__link_logo"><img src={logo} alt="Лого шапки сайта" className="header__logo"/></a>                 
  )
});

export default Logo;
