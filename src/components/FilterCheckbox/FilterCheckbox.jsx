import React, { useState } from 'react';

function FilterCheckbox(props) {

  const [onFocus, setOnFocus] = useState(false);

  const handleFocus = () => {
    setOnFocus(true);
  };

  const handleFocusOff = () => {
    setOnFocus(false);
  };

  return (
    <label
      className={onFocus ? 'search-form__checkbox-label search-form__checkbox-label_focus' : 'search-form__checkbox-label'}
      onFocus={handleFocus}
      onBlur={handleFocusOff}
    >
      <input
        className='search-form__checkbox-input'
        name={props.settings.name}
        required={props.settings.required}
        type={props.settings.type}
        id={props.settings.id}
        onChange={(evt) => props.onClick(evt.target.checked)}
        value={props.value}
        checked={props.checkboxState}
      />
      <span
        className='search-form__checkbox-slider'
      />
      {props.settings.label}
    </label>
  )
}

export default FilterCheckbox;
