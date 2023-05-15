import { Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'utils/theme';

// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { current } from 'redux/auth/authOperations';

import SharedLayout from 'layouts/SharedLayout';
import MainPage from 'pages/MainPage';
import NoticesPage from '../../pages/NoticesPage/NoticesPage';
import AddPetPage from 'pages/AddPetPage';
import ErrorPage from '../../pages/ErrorPage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import NewsPage from 'pages/NewsPage';
import RestrictedRoute from 'routes/RestrictedRoute';
import PrivateRoute from 'routes/PrivateRoute';

// const RegisterPage = lazy(() => import('pages/RegisterPage'));
// const LoginPage = lazy(() => import('pages/LoginPage'));

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(current());
  // }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/notices/:categoryName" element={<NoticesPage />} />
          <Route path="/add-pet" element={<PrivateRoute redirectTo='/login' component={<AddPetPage />} />} />
          <Route path="/notices" element={<Navigate to="/notices/sell" />} />
          <Route path="/register"  element={<RestrictedRoute redirectTo='/user' component={<RegisterPage />} />} />
          <Route path="/login" element={<RestrictedRoute redirectTo='/user' component={<LoginPage />} />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
