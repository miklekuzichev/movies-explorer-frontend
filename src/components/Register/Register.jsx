import React, { useState, useEffect } from 'react';
import AuthForm from '../AuthForm/AuthForm';
import useValidation from '../../utils/useValidation';
import { REGISTRATION_ERRORS } from '../../constants/constants';

function Register({
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

  const INPUTS_DATA = [
    {
      key: 1,
      required: true,
      type: 'text',
      id: 'name',
      regexp: '[a-zA-Z -]{2,30}',
      label: 'Имя',
      customErrorMessage: 'Поле name может содержать только латиницу, пробел или дефис: a-zA-Z -',
      placeholder: 'Имя',
      name: 'name',
    },
    {
      key: 2,
      required: true,
      type: 'email',
      id: 'email',
      inputClassName: '',
      labelClassName: '',
      label: 'E-mail',
      placeholder: 'E-mail',
      name: 'email',
    },
    {
      key: 3,
      required: true,
      type: 'password',
      label: 'Пароль',
      minLength: 8,
      maxLength: 30,
      placeholder: 'Пароль',
      id: 'password',
      inputClassName: '',
      labelClassName: '',
      name: 'password',
    },
  ];

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

  return (
    <main
      className='register'
    >
      <section>
        <AuthForm
          titleText='Добро пожаловать!'
          inputsData={INPUTS_DATA}
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
