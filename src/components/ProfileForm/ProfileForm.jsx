import React from 'react';
import FormTitle from '../FormTitle/FormTitle';
import InputField from '../InputField/InputField';
import ProfileUpdateError from '../ProfileUpdateError/ProfileUpdateError';
import SubmitButton from '../SubmitButton/SubmitButton';
import ProfileEditButton from '../ProfileEditButton/ProfileEditButton';
import ProfileSignoutButton from '../ProfileSignOutButton/ProfileSignOutButton';
import Preloader from '../Preloader/Preloader';

function ProfileForm({
  titleText,
  inputsData,
  onChange,
  values,
  errors,
  profileUpdateErrorText,
  isEdited,
  onToggleEditableProfile,
  profileEditButtonSettings,
  profileSignoutButtonSettings,
  onSignOut,
  isLoadingData,
  onSubmit,
  submitButtonSettings,
  formIsValid,
  isUpdateUserProfileError,
}) {

  const formInputs = inputsData.map((item) => (
    <div
      key={item.key}
      className='profile__form_input-container'>
      <label className='profile__form_input-label'>
        {item.label}
        <InputField
          className='profile__form-input'
          settings={item}
          onChange={onChange}
          value={values[item.name]}/>
      </label>
      <span
        className='profile__form_input-error'>
        {errors[item.name]}
      </span>
    </div>
  ));

  return (
    <form
      onSubmit={onSubmit}
      className='profile__form'
      noValidate>
      <div className='profile__form-title'>
        <FormTitle
          titleText={titleText}
        />
      </div>
      <fieldset
        className='profile__form_input-fieldset'
        disabled={isLoadingData || !isEdited}>
        {formInputs}
      </fieldset>
      <div className='profile__form-container'>
        {isUpdateUserProfileError && (
          <ProfileUpdateError 
          errorText={profileUpdateErrorText}/>
        )}
        {isEdited ? (
          <SubmitButton
            disabled={!formIsValid}
            settings={submitButtonSettings}
            className='profile__form_submit-button'/>
        ) : (
          <>
            {isLoadingData && (
              <Preloader />
            )}
            <ProfileEditButton
              onClick={onToggleEditableProfile}
              title={profileEditButtonSettings}/>
            <ProfileSignoutButton
              title={profileSignoutButtonSettings}
              onSignOut={onSignOut}/>
          </>
        )}
      </div>
    </form>
  )
}

export default ProfileForm;
