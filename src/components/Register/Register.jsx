import React, { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import AuthFormRegister from '../AuthFormRegister/AuthFormRegister';
import useValidation from '../../utils/useValidation';
import { REGISTRATION_ERRORS } from '../../constants/constants';

function Register({
  loggedIn,
  isLoadingSignup,
  onRegister,
  regResStatus,
}) {

  const [isRegistrationError, setIsRegistrationError] = useState(false);
  const [registrationErrorText, setRegistrationErrorText] = useState('');

  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm
  } = useValidation({});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onRegister(values);
  };
  
  const SUBMIT_BUTTON_SETTINGS = {
    type: 'submit',
    title: 'Зарегистрироваться',
  };

  const ROUTE_LINK_SETTINGS = {
    linkTitle: 'Войти',
    linkPath: '/signin',
  };

  const errorHandler = () => {
    if (regResStatus) {
      switch (regResStatus) {
        case 409:
          setRegistrationErrorText(REGISTRATION_ERRORS.CONFLICT_EMAIL);
          setIsRegistrationError(true);
          break;
        case 400:
          setRegistrationErrorText(REGISTRATION_ERRORS.BAD_REQUEST);
          setIsRegistrationError(true);
          break;
        case 200:
          setRegistrationErrorText('');
          setIsRegistrationError(false);
          resetForm();
          break;
        default:
          setRegistrationErrorText(REGISTRATION_ERRORS.BAD_REQUEST);
          setIsRegistrationError(true);
          break;
      };
    };
  };

  useEffect(() => {
    errorHandler();
  }, [regResStatus]);

  return loggedIn ? (
    <Navigate to="/" replace />
  ) : (
    <main
      className='register'
    >
      <section>
        <AuthFormRegister
          titleText='Добро пожаловать!'
          onChange={handleChange}
          onSubmit={handleSubmit}
          values={values}
          errors={errors}
          submitButtonSettings={SUBMIT_BUTTON_SETTINGS}
          formAuthQuestionSettings='Уже зарегистрированы?'
          routeLinkSettings={ROUTE_LINK_SETTINGS}
          formIsValid={isValid}
          authErrorText={registrationErrorText}
          isAuthError={isRegistrationError}
          isLoadingData={isLoadingSignup}
        />
      </section>
    </main>
  )
}

export default Register;
