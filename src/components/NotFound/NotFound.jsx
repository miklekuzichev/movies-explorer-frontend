import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {

  const navigate = useNavigate();
  const TEXT = '404';
  const MESSAGE = 'Страница не найдена';
  const BUTTON_TITLE = 'Назад';

  const STYLE_SETTINGS = {
    title: 'not-found__title',
    message: 'not-found__subtitle',
    goBackButton: 'not-found__go-back_button',
  };

  return (
    <main className='not-found'>
      <div className='not-found__container'>
        <h1 className='not-found__title'>
          {TEXT}
        </h1>
        <p className='not-found__subtitle'>
          {MESSAGE}
        </p>
        <button
          className={STYLE_SETTINGS.goBackButton}
          onClick={() => navigate(-1)}
        >
          {BUTTON_TITLE}
        </button>
      </div>
      
    </main>
  )
}

export default NotFound;
