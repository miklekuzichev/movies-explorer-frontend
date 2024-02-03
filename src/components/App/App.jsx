import React from 'react';
import {
  Route,
  Routes,
  useNavigate,
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
import Preloader from '../Preloader/Preloader';
import Menu from '../Menu/Menu';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [isLoadingData, setIsLoadingData] = React.useState(true);
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const [currentUserData, setCurrentUserData] = React.useState({});

  const setOpenMenu = () => {
    setMenuIsOpen(true);
  };

  const setCloseMenu = () => {
    setMenuIsOpen(false);
  };

  const navigate = useNavigate();

  React.useEffect(() => {

    const handleWindowLoad = () => {
      setIsLoadingData(false);
    };

    window.addEventListener('load', handleWindowLoad);

    return () => window.removeEventListener('load', handleWindowLoad);
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUserData}>
      <div className='app'>
        <Routes>
          <Route
            exact
            path='/'
            element={
                isLoadingData ? (
                    <Preloader />
                  ) : (
                    <Main
                      loggedIn={false}
                      setOpenMenu={setOpenMenu}
                    />
                  )
            }
          />
          <Route
            exact
            path='/movies'
            element={
              <ProtectedRoute
                        component={Movies}
                        redirectTo={'/signin'}
                        loggedIn={true}
                        setOpenMenu={setOpenMenu}
                        isLoadingData={isLoadingData}
                        />
            }
          />
            <Route
                path='/saved-movies'
                element={
                    <ProtectedRoute
                        component={SavedMovies}
                        redirectTo={'/signin'}
                        loggedIn={loggedIn}
                        setOpenMenu={setOpenMenu}
                        onSaveFilm={false}
                        onDeleteFilm={true}
                        />
                }
            />
            <Route
                path='/profile'
                element={
                    <ProtectedRoute
                        loggedIn={true}
                        setOpenMenu={setOpenMenu}
                        redirectTo={'/signin'}
                        component={Profile}/>
                }
            />
            <Route
                path='/signup'
                element={
                    <Register
                        isLoadingSignup={isLoadingData}
                    />
                }
            />

            <Route
                path='/signin'
                element={
                    <Login
                        isLoadingSignin={isLoadingData}/>
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
