import React from 'react';

function InputField(props) {
  return (
    <input
      className={props.className}
      type={props.settings.type}
      id={props.settings.id}
      minLength={props.settings.minLength}
      maxLength={props.settings.maxLength}
      value={props.value || ''}
      pattern={props.settings.regexp}
      aria-label={props.settings.ariaLabel}
      placeholder={props.settings.placeholder}
      name={props.settings.name}
      onChange={props.onChange}
      required={props.settings.required}/>
  )
}

export default InputField;
