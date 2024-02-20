import React from 'react';
import logo from '../../images/Logo/logo.svg';

const Logo = React.memo(() => {
  return (
    <a href="./" className="header__container-link"><img src={logo} alt="Лого шапки сайта" className="header__container-link-logo"/></a>                 
  )
});

export default Logo;
