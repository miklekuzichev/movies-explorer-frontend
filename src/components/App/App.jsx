import React, { useEffect, useState, useCallback } from 'react';
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import CurrentUserContext from '../../contexts/CurrentUserContext';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Menu from '../Menu/Menu';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import searchFilter from '../../utils/SearchFilter';
import { SHORT_MOVIE_DURATION } from '../../constants/constants';

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn') ||  false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [currentUserData, setCurrentUserData] = useState({});
  const [isLoadingSignup, setIsLoadingSignup] = useState(false);
  const [isLoadingSignin, setIsLoadingSignin] = useState(false);
  const [registrationResStatus, setRegistrationResStatus] = useState(null);
  const [authResStatus, setAuthResStatus] = useState(null);
  const [tokenAuthResStatus, setTokenAuthResStatus] = useState(null);
  const [isLoadingMoviesData, setIsLoadingMoviesData] = useState(false);
  const [moviesApiResStatus, setMoviesApiResStatus] = useState(null);
  const [moviesData, setMoviesData] = useState([]);
  const [shortMoviesData, setShortMoviesData] = useState([]);
  const [shortMoviesDataSave, setShortMoviesDataSave] = useState([]);
  const [isLoadingUpdateCurrentUser, setIsLoadingUpdateCurrentUser] = useState(false);
  const [updateCurrentUserResStatus, setUpdateCurrentUserResStatus] = useState(null);
  const [foundSavedMoviesData, setFoundSavedMoviesData] = useState([]);
  const [isSavedMoviesEmpty, setIsSavedMoviesEmpty] = useState(false);
  const [getSavedMoviesResStatus, setGetSavedMoviesResStatus] = useState(null);
  const [isNoSavedMoviesFound, setIsNoSavedMoviesFound] = useState(false);
  const [isNoMoviesFound, setIsNoMoviesFound] = useState(false);
  const [isCheckboxActive, setIsCheckboxActive] = useState(false);
  const [isCheckboxActiveSave, setIsCheckboxActiveSave] = useState(false);
  const [searchRequest, setSearchRequest] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const setOpenMenu = () => {
    setMenuIsOpen(true);
  };

  const setCloseMenu = () => {
    setMenuIsOpen(false);
  };

  const handleSignOut = (evt) => {
    evt.preventDefault();
    setLoggedIn(false);
    setMoviesData([]);
    setShortMoviesData([]);
    setShortMoviesDataSave([]);
    setCurrentUserData({});
    setFoundSavedMoviesData([]);
    localStorage.clear(); // очищаем хранилище при выходе пользователя
    setSearchRequest({});
    navigate('/');
  };

  const getInitialSavedMoviesIds = () => {
    const initialSavedMoviesIds = [];

    foundSavedMoviesData.forEach((savedMovie) => {
      initialSavedMoviesIds.push(savedMovie.movieId);
    });
    return initialSavedMoviesIds;
  };

  

  const markAsSaved = (foundMoviesArr) => {
    const initialSavedMoviesIdsArr = getInitialSavedMoviesIds();
    foundMoviesArr.forEach((foundMovie) => {
      foundMovie.saved = initialSavedMoviesIdsArr.some((savedMovieId) => savedMovieId === foundMovie.id);
    })

    foundSavedMoviesData.forEach((savedMovie) => {
      foundMoviesArr.forEach((foundMovie) => {
        if (foundMovie.id === savedMovie.movieId) {
          foundMovie._id = savedMovie._id;
        }
      })
    })
    return foundMoviesArr;
  }




  const handleSearchSavedMoviesData = (searchQueries = {}, isAfterDelete = false) => {
    const token = localStorage.getItem('jwt');

    if (token){
      mainApi.getSavedMovies(token)
        .then((res) => {
          setGetSavedMoviesResStatus(res.status);
          if (res.data.length === 0) {
            setIsSavedMoviesEmpty(true);
            setFoundSavedMoviesData(res.data);
            return;
          } else {
            setIsSavedMoviesEmpty(false);
          }

          const savedMoviesData = res.data.reverse();
          const filteredSavedMovies = searchFilter(searchQueries, savedMoviesData);

          if (filteredSavedMovies.length === 0) {
            setIsNoSavedMoviesFound(true);
          } else {
            setIsNoSavedMoviesFound(false);
          }
          setFoundSavedMoviesData(filteredSavedMovies);
          setShortMoviesDataSave(handleFilter(filteredSavedMovies));
        })
        .catch((err) => {
          console.log(err);
          setMoviesApiResStatus(err)
        })
    }
  }

const handleSearchMoviesData = (searchQueries = {}) => {

  const localMoviesData = JSON.parse(localStorage.getItem('movies'));
  setSearchRequest(searchQueries);

  if (localMoviesData) {
    const filteredMovies = searchFilter(searchQueries, localMoviesData);
    if (filteredMovies.length === 0) {
      setIsNoMoviesFound(true);
    } else {
      setIsNoMoviesFound(false);
    }
    localStorage.setItem('filtered-previously-movies', JSON.stringify(markAsSaved(filteredMovies)));
    setRequestToLocalStorage('lastRequest', searchQueries);
    setRequestToLocalStorage('checkboxState', isCheckboxActive);
    setMoviesData(filteredMovies);
  }
};

function getLastRequestFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function setRequestToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
    
function handleCheckboxClick(value) {
  setIsCheckboxActive(value);
}

function handleCheckboxClickSave(value) {
  setIsCheckboxActiveSave(value);
}

function handleFilter(moviesArr) {
  return moviesArr.filter((movie) => {
    return movie.duration <= SHORT_MOVIE_DURATION;
  });
}

function filterShotMoviesHandler() {
  setShortMoviesData(handleFilter(moviesData));    
}

function filterShotMoviesHandlerSave() {
  setShortMoviesDataSave(handleFilter(foundSavedMoviesData));
}

useEffect(() => {
  filterShotMoviesHandler();
}, [searchRequest, isCheckboxActive]);

useEffect(() => {
  filterShotMoviesHandlerSave();
}, [isCheckboxActiveSave]);

// Регистрация пользователя
//
const handleRegister = (data) => {
  setIsLoadingSignup(true);
  mainApi.register(data)
    .then((res) => {
      setRegistrationResStatus(res.status);
      handleLogin({
        email: data.email,
        password: data.password
      },);
    })
    .catch((err) => {
      setRegistrationResStatus(err);
    })
    .finally(() => {
      setIsLoadingSignup(false);
    })
};

// Проверка токена
//
const checkToken = () => {
  const token = localStorage.getItem('jwt');
  if (token) {
    mainApi.checkToken(token)
      .then((res) => {
        setTokenAuthResStatus(res.status);
        setCurrentUserData(res.data);
        setLoggedIn(true);
      })
      .catch((err) => {
        setTokenAuthResStatus(err)
      })
  }
}

// Авторизация пользователя
//
const handleLogin = (data) => {
  setIsLoadingSignin(true);

  mainApi.authorize(data)
    .then((res) => {
      setAuthResStatus(res.status);
      localStorage.setItem('jwt', res.data._id);
      console.log('jwt ', res.data._id);
      setLoggedIn(true);
      localStorage.setItem('loggedIn', true);
      navigate('/movies');
    })
    .then(() => {
      checkToken();
    })
    .catch((err) => {
      setAuthResStatus(err);
    })
    .finally(() => {
      setIsLoadingSignin(false);
    })
};

// Ручка обновления текущего пользователя
//
const handleUpdateCurrenUser = (data) => {

  const token = localStorage.getItem('jwt');
  if (token) {
    setIsLoadingUpdateCurrentUser(true);
    mainApi.updateCurrentUserProfile(data, token)
      .then((res) => {
        setCurrentUserData(res.data);
        setUpdateCurrentUserResStatus('Данные успешно обновлены!');
        localStorage.setItem('currentUserData', JSON.stringify(res.data));
      })
      .catch((err) => {
        setUpdateCurrentUserResStatus(err.message);
      })
      .finally(() => {
        setIsLoadingUpdateCurrentUser(false);
      })
  };
};

// Функция удаления лайка
//
const markAsUnsaved = (id) => {
  moviesData.forEach((movie) => {
    if (movie.saved) {
      if (movie._id === id) {
        delete movie.saved;
        delete movie._id;
      }
    }
  })
}

// Ручка сохранения фильма
//
const handleSaveFavoriteMovie = (data) => {
  const token = localStorage.getItem('jwt');
  if (token) {
    mainApi.saveMovie(data, token) //moviesData
      .then((res) => {
        setFoundSavedMoviesData([res.data.data, ...foundSavedMoviesData]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        
      })
  } else {
      navigate('/signin');
  };
};

// Ручка удаления сохраненного фильма
//
const handleDeleteSavedMovie = (id) => {
  const token = localStorage.getItem('jwt');
  if (token) {
    mainApi.deleteSavedMovie(id, token)
      .then((res) => {
        markAsUnsaved(id);
        const restShortSavedMovies = shortMoviesDataSave.filter((item) => item._id !== id);
        const restSavedMovies = foundSavedMoviesData.filter((item) => item._id !== id);
        setShortMoviesDataSave(restShortSavedMovies);
        setFoundSavedMoviesData(restSavedMovies);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
      })
  };
}



function checkLastRequest() {
  const lastRequestedCheckboxState = localStorage.getItem('checkboxState');
  const lastRequestedKeyword = localStorage.getItem('lastRequest');
  if (lastRequestedCheckboxState) {
    setIsCheckboxActive(getLastRequestFromLocalStorage('checkboxState'));
  }
  if (lastRequestedKeyword) {
    setSearchRequest(getLastRequestFromLocalStorage('lastRequest'));
  }
  return
}

useEffect(() => {
  checkLastRequest();
}, []);

// Очищаем уведомление об успешном сохранении профиля
//
const resetErrMessage = useCallback((clearMessage='') => {
  setErrorMessage(clearMessage)
}, [setErrorMessage])

useEffect(() => {
  resetErrMessage();
}, [resetErrMessage, navigate]);

// Получаем фильмы по апи
//
useEffect(() => {
checkToken();
const token = localStorage.getItem('jwt');

if (token) {
  setIsLoadingMoviesData(true);
  moviesApi.getMoviesData()
    .then((res) => {
      setMoviesApiResStatus(res.status);
      const moviesData = res.data;
      //const localMoviesData = JSON.parse(localStorage.getItem('movies'));
      const renderedPrevMovies = JSON.parse(localStorage.getItem('filtered-previously-movies'));

      if (renderedPrevMovies) {
        if(isCheckboxActive) {
          setMoviesData(renderedPrevMovies);
          setShortMoviesData(handleFilter(renderedPrevMovies));
        } else {
          setMoviesData(renderedPrevMovies);
        }
      } else {
          localStorage.setItem('movies', JSON.stringify(moviesData));
      }
    })
    .catch((err) => {
      console.log(err);
      setMoviesApiResStatus(err)
    })
    .finally(() => {
      setIsLoadingMoviesData(false);
    })
}
}, [loggedIn])

  return (
    <CurrentUserContext.Provider value={currentUserData}>
      <div className='app'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <Main
                loggedIn={loggedIn}
                setOpenMenu={setOpenMenu}
              />
            }
          />
          <Route
            exact
            path='/movies'
            element={
              <ProtectedRoute
                        component={Movies}
                        redirectTo={'/'}
                        loggedIn={loggedIn}
                        setOpenMenu={setOpenMenu}
                        isNoMoviesFound={isNoMoviesFound}
                        onSubmit={handleSearchMoviesData}
                        resStatus={moviesApiResStatus}
                        moviesData={markAsSaved(moviesData)}
                        shortMoviesData={markAsSaved(shortMoviesData)}
                        isLoadingData={isLoadingMoviesData}
                        onSaveMovie={handleSaveFavoriteMovie}
                        onDeleteSavedMovie={handleDeleteSavedMovie}
                        handleSearchSavedMoviesData={handleSearchSavedMoviesData}
                        handleCheckboxClick={handleCheckboxClick}
                        isCheckboxActive={isCheckboxActive}
                        locationPathname={location.pathname}
                        searchRequest={searchRequest}
                        />
            }
          />
            <Route
                path='/saved-movies'
                element={
                    <ProtectedRoute
                        component={SavedMovies}
                        redirectTo={'/'}
                        loggedIn={loggedIn}
                        setOpenMenu={setOpenMenu}
                        isLoadingData={isLoadingMoviesData}
                        savedMovies={foundSavedMoviesData}
                        shortMoviesData={shortMoviesDataSave}
                        isSavedMoviesEmpty={isSavedMoviesEmpty}
                        getSavedMoviesResStatus={getSavedMoviesResStatus}
                        isNoSavedMoviesFound={isNoSavedMoviesFound}
                        handleSearchSavedMoviesData={handleSearchSavedMoviesData}
                        onDeleteSavedMovie={handleDeleteSavedMovie}
                        handleCheckboxClick={handleCheckboxClickSave}
                        isCheckboxActive={isCheckboxActiveSave}
                        searchRequest={searchRequest}
                        locationPathname={location.pathname}
                        />
                }
            />
            <Route
                path='/profile'
                element={
                    <ProtectedRoute
                        loggedIn={loggedIn}
                        setOpenMenu={setOpenMenu}
                        onSignOut={handleSignOut}
                        onUpdateCurrentUser={handleUpdateCurrenUser}
                        isLoadingUpdateCurrentUser={isLoadingUpdateCurrentUser}
                        updUserResStatus={updateCurrentUserResStatus}
                        errorMessage={errorMessage}
                        redirectTo={'/'}
                        component={Profile}/>
                }
            />
            <Route
                path='/signup'
                element={
                    <Register
                        loggedIn={loggedIn}
                        onRegister={handleRegister}
                        regResStatus={registrationResStatus}
                        errorMessage={errorMessage}
                        isLoadingSignup={isLoadingSignup || isLoadingSignin}
                    />
                }
            />
            <Route
                path='/signin'
                element={
                    <Login
                        loggedIn={loggedIn}
                        isLoadingSignin={isLoadingSignup || isLoadingSignin}
                        onLogin={handleLogin}
                        authResStatus={authResStatus}
                        errorMessage={errorMessage}
                        tokenResStatus={tokenAuthResStatus}
                    />
                }
            />
            <Route
                path='*'
                element={
                    <NotFound/>
                }
            />
        </Routes>
        {menuIsOpen && (
          <Menu
            isOpen={menuIsOpen}
            onClose={setCloseMenu}
          />
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
