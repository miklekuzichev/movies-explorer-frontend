import React from 'react';

const MenuButton = React.memo((props) => {
  return (
    <button
      title='открыть меню'
      className="menu__button"
      onClick={props.onOpenMenu}/>
  )
});

export default MenuButton;
