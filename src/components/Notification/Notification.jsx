import React from 'react';

function Notification({ text }) {

  return (
    <p
      className='notification'
      aria-live="polite"
    >
      {text}
    </p>
  )
}

export default Notification;
