import React, { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';
import useCurrentSize from '../../utils/useCurrentSize';
import { WIDTH_LARGE, WIDTH_MEDIUM, WIDTH_SMALL, NUMBER_MOVIES_TO_RENDER_LARGE, NUMBER_MOVIES_TO_RENDER_MEDIUM, NUMBER_MOVIES_TO_RENDER_SMALL, NUMBER_MOVIES_TO_ADD_LARGE, NUMBER_MOVIES_TO_ADD_MEDIUM } from '../../constants/constants';

function MoviesCardList({
  locationPathname,
  data,
  onSaveMovie,
  onDeleteSavedMovie,
}) {

  const [moviesToRender, setMoviesToRender] = useState([]);
  const [isShowButtonActive, setIsShowButtonActive] = useState(false);
  const [numberMoviesToRender, setNumberMoviesToRender] = useState(0);
  const [numberMoviesToAdd, setNumberMoviesToAdd] = useState(0);

  const size = useCurrentSize();

  const countMoviesToRender = () => {
    if (size.width >= WIDTH_LARGE) {
      setNumberMoviesToRender(NUMBER_MOVIES_TO_RENDER_LARGE);
      setNumberMoviesToAdd(NUMBER_MOVIES_TO_ADD_LARGE);
    } else if (size.width < WIDTH_LARGE && size.width >= WIDTH_MEDIUM) {
      setNumberMoviesToRender(NUMBER_MOVIES_TO_RENDER_MEDIUM);
      setNumberMoviesToAdd(NUMBER_MOVIES_TO_ADD_MEDIUM);
    } else if (size.width < WIDTH_MEDIUM && size.width >= WIDTH_SMALL) {
      setNumberMoviesToRender(NUMBER_MOVIES_TO_RENDER_SMALL);
      setNumberMoviesToAdd(NUMBER_MOVIES_TO_ADD_MEDIUM);
    };
  };

  const handleShowMoreMoviesButtonClick = () => {
    setMoviesToRender(data.slice(0, moviesToRender.length + numberMoviesToAdd));
    if (moviesToRender.length >= data.length - numberMoviesToAdd) {
      setIsShowButtonActive(false);
    }
  }

  useEffect(() => {
    countMoviesToRender();
  }, [size.width])

  useEffect(() => {
    if (locationPathname === '/movies') {
      setMoviesToRender(data.slice(0, numberMoviesToRender));
      if (data.length <= numberMoviesToRender) {
        setIsShowButtonActive(false);
      } else {
        setIsShowButtonActive(true);
      };
    } else if (locationPathname === '/saved-movies') {
      setMoviesToRender(data);
      setIsShowButtonActive(false);
    }
  }, [data, numberMoviesToRender])

  const moviesCardsMarkup = moviesToRender.map((item) => (
    <li
      key={item._id || item.id}
      className="films__container-item"
    >
      <MoviesCard
        data={item}
        locationPathname={locationPathname}
        onSaveMovie={onSaveMovie}
        onDeleteSavedMovie={onDeleteSavedMovie}
      />
    </li>
  ))
  return (
    <section className="films" aria-label="Галерея фильмов">
      <ul className="films__container">
        {moviesCardsMarkup}
      </ul>
      {locationPathname === '/movies' && isShowButtonActive ? (
        <ShowMoreButton
        onClick={handleShowMoreMoviesButtonClick}
        />
      ) : null}
    </section>
  )
}

export default MoviesCardList;
