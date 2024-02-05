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

  return (
    <main className='not-found'>
      <div className='not-found__container'>
        <h1 className='not-found__title'>
          {TEXT}
        </h1>
        <p className='not-found__subtitle'>
          {MESSAGE}
        </p>
      </div>
      <button
          className='not-found__go-back-button'
          onClick={handleGoBackBtnClick}
        >
          {BUTTON_TITLE}
        </button>
    </main>
  )
}

export default NotFound;
