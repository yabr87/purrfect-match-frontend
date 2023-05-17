import { Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'utils/theme';

import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { refresh } from 'redux/auth/authOperations';
import Switcher from 'components/themeSwitcher/Switcher';

import SharedLayout from 'layouts/SharedLayout';
import MainPage from 'pages/MainPage';
import NoticesPage from '../../pages/NoticesPage/NoticesPage';
import AddPetPage from 'pages/AddPetPage';
import ErrorPage from 'pages/ErrorPage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import UserPage from 'pages/UserPage';
import NewsPage from 'pages/NewsPage';
import OurFriendsPage from 'pages/OurFriendsPage';

// const HomePage = lazy(() => import('pages/HomePage'));
import RestrictedRoute from 'routes/RestrictedRoute';
import PrivateRoute from 'routes/PrivateRoute';

// const RegisterPage = lazy(() => import('pages/RegisterPage'));
// const LoginPage = lazy(() => import('pages/LoginPage'));

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);
  const onClick = () => {
    setCurrentTheme(currentTheme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <Switcher onClick={onClick} />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/notices/:categoryName" element={<NoticesPage />} />
          <Route
            path="/add-pet"
            element={
              <PrivateRoute redirectTo="/login" component={<AddPetPage />} />
            }
          />
          <Route path="/notices" element={<Navigate to="/notices/sell" />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/user"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/user" component={<LoginPage />} />
            }
          />
          <Route
            path="/user"
            element={
              <PrivateRoute redirectTo="/login" component={<UserPage />} />
            }
          />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/friends" element={<OurFriendsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
