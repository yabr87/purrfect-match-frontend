import { Route, Routes } from 'react-router-dom';
import { MainLayout } from 'layouts/MainLayout';
import HomePage from 'pages/HomePage';
import { ThemeProvider } from 'styled-components';
import { colorTheme } from 'utils/theme';
import { Container } from './App.styles';

// const HomePage = lazy(() => import('pages/HomePage'));z
// const RegisterPage = lazy(() => import('pages/RegisterPage'));
// const LoginPage = lazy(() => import('pages/LoginPage'));

const App = () => {
  return (
    <ThemeProvider theme={colorTheme}>
      <Container />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </ThemeProvider>
  );
};

export default App;
