import React from 'react';
import FormTitle from '../FormTitle/FormTitle';
import ProfileUpdateError from '../ProfileUpdateError/ProfileUpdateError.jsx';
import SubmitButton from '../SubmitButton/SubmitButton';
import ProfileEditButton from '../ProfileEditButton/ProfileEditButton';
import ProfileSignoutButton from '../ProfileSignOutButton/ProfileSignOutButton';
import Preloader from '../Preloader/Preloader';

function ProfileForm({
  titleText,
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
  isValidForm,
  isUpdateUserProfileError,
  updUserResStatus,
}) {

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
        className='profile__form-input-fieldset'
        disabled={isLoadingData || !isEdited}>

        <div
          key={1}
          className='profile__form-input-container'>
          <label className='profile__form-input-label'>
            Имя
            <input
              className='profile__form-input'
              type='text'
              id='name'
              minLength='2'
              maxLength='30'
              value={values.data ? values.data['name'] : values['name'] || ''}
              //value={values.email || ''}
              pattern='^[A-Za-zА-Яа-яЁё\-\s]+$'
              placeholder='Ваше имя'
              name='name'
              onChange={onChange}
              required
            />          
          </label>
          <span
            className='profile__form-input-error'>
            {errors['name'] && 'Поле name может содержать только латиницу, пробел или дефис: a-zA-Z -'}
          </span>
        </div>

        <div
          key={2}
          className='profile__form-input-container'>
          <label className='profile__form-input-label'>
            E-mail
            <input
              className='profile__form-input'
              type='email'
              id='email'
              minLength='2'
              maxLength='30'
              value={values.data ? values.data['email'] : values['email'] || ''}
              placeholder='Ваш email'
              name='email'
              onChange={onChange}
              required
            />          
          </label>
          <span
            className='profile__form-input-error'>
            {errors['email']}
          </span>
        </div>

      </fieldset>
      <div className='profile__form-container'>
        {true && (
          <ProfileUpdateError 
          errorText={updUserResStatus}/>
        )}
        {isEdited ? (

          <SubmitButton
            disabled={!isValidForm}
            settings={submitButtonSettings}
            className='profile__form-submit-button'/>
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
