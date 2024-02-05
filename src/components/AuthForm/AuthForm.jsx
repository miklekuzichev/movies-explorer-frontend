import React from 'react';
import FormTitle from '../FormTitle/FormTitle';
import InputField from '../InputField/InputField';
import SubmitButton from '../SubmitButton/SubmitButton';
import Logo from '../Logo/Logo';
import FormAuthQuestion from '../FormAuthQuestion/FormAuthQuestion';
import Preloader from '../Preloader/Preloader';
import AuthError from '../AuthError/AuthError';
import RouteLink from '../RouteLink/RouteLink';

function AuthForm({
  titleText,
  inputsData,
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

  const formInputsMarkup = inputsData.map((item) => (
    <div
      key={item.key}
      className='auth-form__input-container'>
      <label className='auth-form__input-label'>
        {item.label}
        <InputField
          className='auth-form__input'
          settings={item}
          onChange={onChange}
          value={values[item.name]}
        />
      </label>
      <span
        className='auth-form__input-error'
        aria-live="polite">
        {item.regexp && errors[item.name] && item.customErrorMessage}
        {errors[item.name]}
      </span>
    </div>
  ));

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
        {formInputsMarkup}
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
      {isLoadingData && (<Preloader />)}
    </form>
  )
}

export default AuthForm;
