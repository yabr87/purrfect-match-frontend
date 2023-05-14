import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from 'layouts/SharedLayout';
import HomePage from 'pages/HomePage';
import UserPage from 'pages/UserPage';
import { ThemeProvider } from 'styled-components';
import { theme } from 'utils/theme';
import NoticesPage from '../../pages/NoticesPage/NoticesPage';
import AddPetPage from 'pages/AddPetPage';
import ErrorPage from '../../pages/ErrorPage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import NewsPage from 'pages/NewsPage';

// const HomePage = lazy(() => import('pages/HomePage'));z
// const RegisterPage = lazy(() => import('pages/RegisterPage'));
// const LoginPage = lazy(() => import('pages/LoginPage'));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/notices/:categoryName" element={<NoticesPage />} />
          <Route path="/add-pet" element={<AddPetPage />} />
          <Route path="/notices" element={<Navigate to="/notices/sell" />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
