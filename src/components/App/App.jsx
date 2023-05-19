import React, { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'utils/theme2';

import { I18nextProvider } from 'react-i18next';
import i18n from '../../utils/languages/i18n';

import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { refresh } from 'redux/auth/authOperations';
import Switcher from 'components/ThemeSwitcher';

import RestrictedRoute from 'routes/RestrictedRoute';
import PrivateRoute from 'routes/PrivateRoute';
import SharedLayout from 'layouts/SharedLayout';
import { useRef } from 'react';

const MainPage = lazy(() => import('pages/MainPage'));
const NoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));
const AddPetPage = lazy(() => import('pages/AddPetPage'));
const ErrorPage = lazy(() => import('pages/ErrorPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const UserPage = lazy(() => import('pages/UserPage'));
const NewsPage = lazy(() => import('pages/NewsPage'));
const OurFriendsPage = lazy(() => import('pages/OurFriendsPage'));

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);
  const dispatch = useDispatch();
  const runOnce = useRef(true);
  useEffect(() => {
    if (runOnce.current) {
      runOnce.current = false;
      dispatch(refresh());
    }
  }, [dispatch]);
  const onClick = () => {
    setCurrentTheme(currentTheme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <Switcher onClick={onClick} />
      <I18nextProvider i18n={i18n}>
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
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default App;
