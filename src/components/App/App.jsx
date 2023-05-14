import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from 'layouts/SharedLayout';
import MainPage from 'pages/MainPage';
import { ThemeProvider } from 'styled-components';
import { theme } from 'utils/theme';
import NoticesPage from '../../pages/NoticesPage/NoticesPage';
import AddPetPage from 'pages/AddPetPage';
import ErrorPage from '../../pages/ErrorPage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import NewsPage from 'pages/NewsPage';

// const RegisterPage = lazy(() => import('pages/RegisterPage'));
// const LoginPage = lazy(() => import('pages/LoginPage'));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="main" element={<MainPage />} />
          <Route path="/notices/:categoryName" element={<NoticesPage />} />
          <Route path="/add-pet" element={<AddPetPage />} />
          <Route path="/notices" element={<Navigate to="/notices/sell" />} />
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
