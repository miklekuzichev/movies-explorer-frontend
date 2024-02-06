import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import useFormWithValidation from '../../hooks/useFormValidation';

function Register({
  isLoadingSignup,
}) {

  const isRegistrationError = false;
  const registrationErrorText = '';

  const {
    values,
    errors,
    isValid,
    handleChange,
  } = useFormWithValidation({});

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

  const QUESTION_TEXT = {
    questionText: 'Уже зарегистрированы?',
  };

  return (
    <main
      className='register'
    >
      <section>
        <AuthForm
          titleText='Добро пожаловать!'
          inputsData={INPUTS_DATA}
          onChange={handleChange}
          values={values}
          errors={errors}
          submitButtonSettings={SUBMIT_BUTTON_SETTINGS}
          formAuthQuestionSettings={QUESTION_TEXT}
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
