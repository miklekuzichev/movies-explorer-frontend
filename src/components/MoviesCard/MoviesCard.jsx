import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import MoviesButton from '../MoviesButton/MoviesButton';
import { getFullImageUrl, getTrailerUrl } from '../../utils/getUrl';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function MoviesCard({
  data,
  locationPathname,
  onSaveMovie,
  onDeleteSavedMovie,
}) {
  const currentUserData = useContext(CurrentUserContext);
  const convertTime = (durationMinutes) => {
  const hours = Math.floor(durationMinutes / 60);
  const minutes = Math.floor(durationMinutes % 60);

  return `${hours}ч ${minutes}м`;
}

  const [movieData, setMovieData] = useState({
    country: data.country || 'Нет данных',
    director: data.director || 'Нет данных',
    duration: data.duration || 0,
    year: data.year || 'Нет данных',
    description: data.description || 'Нет данных',
    image: getFullImageUrl(data),
    trailerLink: getTrailerUrl(data),
    nameRU: data.nameRU || 'Нет данных',
    nameEN: data.nameEN || 'Нет данных',
    movieId: data.id,
    thumbnail: getFullImageUrl(data),
    owner: currentUserData.data ? currentUserData.data._id : ''
  })

  const handleClickFavoriteButton = () => {
    if (locationPathname === '/movies') {
      if (!data.saved) {
        onSaveMovie(movieData);
      } else {
        onDeleteSavedMovie(data._id);
      }
    } else if (locationPathname === '/saved-movies') {
      onDeleteSavedMovie(data._id);
    }
  };

  return (
      <>
        <div className="films__container-title">
          <Link className="films__container-text" target="_blank" rel="noreferrer" to={movieData.trailerLink}>{movieData.nameRU || movieData.nameEN}</Link>
          <span className="films__container-time">{convertTime(movieData.duration)}</span>
        </div>
        <img src={movieData.image} alt={movieData.nameRU || movieData.nameEN} className="films__container-image"/> 
          <MoviesButton
          onClick={handleClickFavoriteButton}
          isSaved={data.saved}
          locationPathname={locationPathname}
          />
      </>
  )
}

export default MoviesCard;
