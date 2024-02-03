import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import useFormValidation from '../../hooks/useFormValidation';

function Login({
  isLoadingSignin,
 }) {

  const {
    values,
    errors,
    isValid,
    handleChange
  } = useFormValidation({});

  const ROUTE_LINK = {
    linkTitle: 'Регистрация',
    linkPath: '/signup',
  };

  const SUBMIT_BUTTON = {
    type: 'submit',
    title: 'Войти',
  };

  const QUESTION_TEXT = {
    questionText: 'Ещё не зарегистрированы?',
  };

  const INPUTS_DATA = [
    {
      key: 1,
      inputClassName: '',
      labelClassName: '',
      type: 'email',
      id: 'email',
      label: 'E-mail',
      placeholder: 'E-mail',
      name: 'email',
      required: true,
    },
    
    {
      key: 2,
      inputClassName: '',
      labelClassName: '',
      type: 'password',
      id: 'password',
      label: 'Пароль',
      placeholder: 'Пароль',
      name: 'password',
      minLength: 8,
      required: true,
    },
  ];

  return (
    <main
      className='login'>
      <AuthForm
        titleText='Рады видеть!'
        inputsData={INPUTS_DATA}
        submitButtonSettings={SUBMIT_BUTTON}
        formAuthQuestionSettings={QUESTION_TEXT}
        routeLinkSettings={ROUTE_LINK}
        onChange={handleChange}
        values={values}
        errors={errors}
        formIsValid={isValid}
        isLoadingData={isLoadingSignin}/>
    </main>
  )
}

export default Login;
