import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import useValidation from '../../utils/useValidation';

function Login({
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
        <section>
          <AuthForm
            titleText='Рады видеть!'
            inputsData={INPUTS_DATA}
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
