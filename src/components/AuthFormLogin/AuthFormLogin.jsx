import React from 'react';
import FormTitle from '../FormTitle/FormTitle';

import SubmitButton from '../SubmitButton/SubmitButton';
import Logo from '../Logo/Logo';
import FormAuthQuestion from '../FormAuthQuestion/FormAuthQuestion';
import Preloader from '../Preloader/Preloader';
import AuthError from '../AuthError/AuthError';
import RouteLink from '../RouteLink/RouteLink';

function AuthFormLogin({
  titleText,
  onChange,
  values,
  errors,
  onSubmit,
  submitButtonSettings,
  formAuthQuestionSettings,
  routeLinkSettings,
  formIsValid,
  authErrorText,
  isAuthError,
  isLoadingData,
}) {

  return (
      <form
        onSubmit={onSubmit}
        className='auth-form'
        noValidate>
        <div className='auth-form__title'>
          <Logo />
          <FormTitle
            titleText={titleText}
          />
        </div>
        <fieldset
          className='auth-form__input-fieldset'
          disabled={isLoadingData}>

          <div
            key={1}
            className='auth-form__input-container'>
            <label className='auth-form__input-label'>
              E-mail
                <input
                  className='auth-form__input'
                  type='email'
                  id='email'
                  value={values['email'] || ''}
                  pattern='^[a-zA-Z0-9_.+\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$'
                  placeholder='E-mail'
                  name='email'
                  onChange={onChange}
                  required
                />
            </label>
            <span
              className='auth-form__input-error'
              aria-live="polite">
              {errors['email']}
            </span>
          </div>
          <div
            key={2}
            className='auth-form__input-container'>
            <label className='auth-form__input-label'>
              Пароль
                <input
                  className='auth-form__input'
                  type='password'
                  id='password'
                  minLength='8'
                  maxLength='30'
                  value={values['password'] || ''}
                  placeholder='Пароль'
                  name='password'
                  onChange={onChange}
                  required
                />
            </label>
            <span
              className='auth-form__input-error'
              aria-live="polite">
              {errors['password']}
            </span>
          </div>

          {isAuthError && (
            <AuthError
              errorText={authErrorText}
            />
          )}
        </fieldset>
        <div className='auth-form__button-container'>
          <SubmitButton
            disabled={!formIsValid || isLoadingData}
            settings={submitButtonSettings}
            className='auth-form__submit-button'
          />
          <FormAuthQuestion
            settings={formAuthQuestionSettings}
          >
            <RouteLink
              linkPath={routeLinkSettings.linkPath}
              linkTitle={routeLinkSettings.linkTitle}
            />
          </FormAuthQuestion>
        </div>
        {isLoadingData && (<Preloader/>)}
      </form>
  )
}

export default AuthFormLogin;
