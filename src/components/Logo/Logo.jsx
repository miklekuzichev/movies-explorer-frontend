import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo/logo.svg';

const Logo = React.memo(() => {
  return (
    <Link className="header__container-link" to="/"><img src={logo} alt="Лого шапки сайта" className="header__container-link-logo"/></Link>               
  )
});

export default Logo;
