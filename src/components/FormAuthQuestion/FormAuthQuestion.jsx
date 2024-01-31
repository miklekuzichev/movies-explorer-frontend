import React from 'react';

function FormAuthQuestion({
  settings,
  children,
}) {

  return (
    <p className='form-question-text'>
      {settings.questionText}
      {children}
    </p>
  )
}

export default FormAuthQuestion;
