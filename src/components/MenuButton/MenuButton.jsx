import React from 'react';

const MenuButton = React.memo((props) => {
  return (
    <button
      title='открыть меню'
      className="header__container-link-button"
      onClick={props.onOpenMenu}/>
  )
});

export default MenuButton;
