import React from 'react';
import {
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';

import CurrentUserContext from '../../contexts/CurrentUserContext';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer'
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Preloader from '../Preloader/Preloader';
import Menu from '../Menu/Menu';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoadingData, setIsLoadingData] = React.useState(true);
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const [currentUserData, setCurrentUserData] = React.useState({});

  const setOpenMenu = () => {
    setMenuIsOpen(true);
  };

  const setCloseMenu = () => {
    setMenuIsOpen(false);
  };

  const exclusionRoutes = [
    '/signin',
    '/signup',
  ];
  const navigate = useNavigate();
  const currentPath = window.location.pathname;

  const headerView = (currentPath === exclusionRoutes[0] || currentPath === exclusionRoutes[1]) ? true : false;
  const headerClass = (currentPath !== '/') ? 'header header__color-black' : 'header';
  const headerAccountIconClass = (currentPath !== '/') ? 'header__account-icon-background header__account-icon-background-gray' : 'header__account-icon-background header__account-icon-background-blue';
  const footerView = (currentPath === exclusionRoutes[0] || currentPath === exclusionRoutes[1] || currentPath === exclusionRoutes[2]) ? true : false;
  
  React.useEffect(() => {

    const handleWindowLoad = () => {
      setIsLoadingData(false);
    };

    window.addEventListener('load', handleWindowLoad);

    return () => window.removeEventListener('load', handleWindowLoad);
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUserData}>
      <div className="app">
      {headerView ? null : (
          <Header
            loggedIn={false}
            onOpenMenu={setOpenMenu}
            className={headerClass}
            classNameIcon={headerAccountIconClass}/>
      )}
        <Routes>
          <Route
            exact
            path="/"
            element={
                isLoadingData ? (
                    <Preloader />
                  ) : (
                    <Main />
                  )
            }
          />
          <Route
            path="/movies"
            redirectTo="/"
            element={
              <ProtectedRoute
                        loggedIn={true}
                        component={Movies}/>
            }
          />
            <Route
                path="/saved-movies"
                redirectTo="/"
                element={
                    <ProtectedRoute
                        loggedIn={true}
                        component={SavedMovies}/>
                }
            />
            <Route
                path="/profile"
                redirectTo="/"
                element={
                    <ProtectedRoute
                        loggedIn={loggedIn}
                        component={Profile}/>
                }
            />
            <Route
                path="/signup"
                element={
                    <Register
                        isLoadingSignup={isLoadingData}
                    />
                }
            />

            <Route
                path="/signin"
                element={
                    <Login
                        isLoadingSignin={isLoadingData}/>
                }
            />
            <Route
                path="*"
                element={
                    <NotFound/>
                }
            />
        </Routes>
        {footerView ? null :
          (<Footer />
        )}
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
