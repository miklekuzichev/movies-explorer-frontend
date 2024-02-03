import React from 'react';

function FormAuthQuestion({
  settings,
  children,
}) {

  return (
    <p className='auth-form__question_text'>
      {settings.questionText}
      {children}
    </p>
  )
}

export default FormAuthQuestion;
