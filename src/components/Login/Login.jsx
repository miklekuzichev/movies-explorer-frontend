import React from 'react';
import { Navigate } from "react-router-dom";
import AuthFormLogin from '../AuthFormLogin/AuthFormLogin';
import useValidation from '../../utils/useValidation';

function Login({
  loggedIn,
  onLogin,
  isLoadingSignin,
 }) {

  const {
    values,
    errors,
    isValid,
    handleChange
  } = useValidation({});

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(values);
  };

  const ROUTE_LINK = {
    linkTitle: 'Регистрация',
    linkPath: '/signup',
  };

  const SUBMIT_BUTTON = {
    type: 'submit',
    title: 'Войти',
  };

  return loggedIn ? (
    <Navigate to="/" replace />
  ) : (
    <main
      className='login'>
        <section>
          <AuthFormLogin
            titleText='Рады видеть!'
            submitButtonSettings={SUBMIT_BUTTON}
            formAuthQuestionSettings='Ещё не зарегистрированы?'
            routeLinkSettings={ROUTE_LINK}
            onChange={handleChange}
            onSubmit={handleSubmit}
            values={values}
            errors={errors}
            formIsValid={isValid}
            isLoadingData={isLoadingSignin}/>
        </section>
    </main>
  )
}

export default Login;
