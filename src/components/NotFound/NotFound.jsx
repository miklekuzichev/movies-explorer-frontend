import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {

  const navigate = useNavigate();

  const handleGoBackBtnClick = () => {
    navigate.goBack();
  };

  const TEXT = '404';
  const MESSAGE = 'Страница не найдена';
  const BUTTON_TITLE = 'Назад';

  const STYLE_SETTINGS = {
    title: 'not-found__title',
    message: 'not-found__subtitle',
    goBackButton: 'not-found__go-back-button',
  };

  return (
    <main className='not__found'>
      <div className='not__found-container'>
        <h1 className='not__found-title'>
          {TEXT}
        </h1>
        <p className='not__found-subtitle'>
          {MESSAGE}
        </p>
      </div>
      <button
          className={STYLE_SETTINGS.goBackButton}
          onClick={handleGoBackBtnClick}
        >
          {BUTTON_TITLE}
        </button>
    </main>
  )
}

export default NotFound;
