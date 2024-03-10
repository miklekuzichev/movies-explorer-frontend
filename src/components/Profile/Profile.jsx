import React, { useEffect, useContext, useState } from 'react';
import ProfileForm from '../ProfileForm/ProfileForm';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useValidation from '../../utils/useValidation';
import Header from '../Header/Header';

function Profile({
  loggedIn,
  setOpenMenu,
  onSignOut,
  onUpdateCurrentUser,
  isLoadingUpdateCurrentUser,
  updUserResStatus,
  errorMessage,
}) {

  const currentUserData = useContext(CurrentUserContext);

  const [isUpdateError, setIsUpdateUserProfileError] = useState(false);
  const [updateErrorText, setUpdateUserProfileErrorText] = useState('');
  const [isValidForm, setFormValid] = useState(false);

  const headerClass = 'header header__black';
  const headerAccountIconClass = 'header__account-icon-background header__account-icon-background-gray';
  
  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm
  } = useValidation({});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdateCurrentUser(values)
    handleToggleEditProfile();
    resetForm(currentUserData);
  };

  const [isEdited, setIsEdited] = useState(false);

  const handleToggleEditProfile = () => {
    setIsEdited(!isEdited);
    setIsUpdateUserProfileError(false);
    setUpdateUserProfileErrorText('');
  };

  const SUBMIT_SETTINGS = {
    type: 'submit',
    title: 'Сохранить',
  };
/*
  const INPUT_DATA = [
    {
      key: 1,
      type: 'text',
      required: true,
      id: 'name',
      label: 'Имя',
      placeholder: 'Ваше имя',
      name: 'name',
      regexp: '[a-zA-Z -]{2,30}',
      customErrorMessage: 'Поле name может содержать только латиницу, пробел или дефис: a-zA-Z -',
    },
    {
      key: 2,
      name: 'email',
      label: 'E-mail',
      placeholder: 'Ваш email',
      type: 'email',
      id: 'email',
      required: true,
    },
  ];
*/
  const TITLE_TEXT = `Привет, ${currentUserData.data ? currentUserData.data.name : currentUserData.name ? currentUserData.name : values.name ? values.name : ''}!`;

  useEffect(() => {
    if(currentUserData.data) {
      resetForm({email: currentUserData.data.email, name: currentUserData.data.name});
    }  else  {
      resetForm({email: currentUserData.email, name: currentUserData.name});
    }

    
}, [currentUserData, resetForm]);

  useEffect(() => {
    setFormValid(isValid);
  }, [isValid, values])

  useEffect(() => {
    if(currentUserData.data) {
      if (currentUserData.data.email === values.email && currentUserData.data.name === values.name) {
        setFormValid(false);
      }
    }
  }, [currentUserData, values])

  return (
    <>
    <Header
            loggedIn={loggedIn}
            onOpenMenu={setOpenMenu}
            className={headerClass}
            classNameIcon={headerAccountIconClass}
    />
    <main>
      <section className='profile'>
        <ProfileForm
          titleText={TITLE_TEXT}
          //inputsData={INPUT_DATA}
          onChange={handleChange}
          values={values}
          errors={errors}
          onSubmit={handleSubmit}
          submitButtonSettings={SUBMIT_SETTINGS}
          isValidForm={isValidForm}
          isEdited={isEdited}
          onToggleEditableProfile={handleToggleEditProfile}
          profileEditButtonSettings='Редактировать'
          profileSignoutButtonSettings='Выйти из аккаунта'
          profileUpdateErrorText={updateErrorText}
          isUpdateUserProfileError={isUpdateError}
          onSignOut={onSignOut}
          updUserResStatus={updUserResStatus}
          isLoadingData={isLoadingUpdateCurrentUser}
        />
      </section>
    </main>
    </>
  )
}

export default Profile;
