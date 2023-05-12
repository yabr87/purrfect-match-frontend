import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'layouts/SharedLayout';
import HomePage from 'pages/MainPage';
import NoticesPage from '../../pages/NoticesPage/NoticesPage';

// const HomePage = lazy(() => import('pages/HomePage'));z
// const RegisterPage = lazy(() => import('pages/RegisterPage'));
// const LoginPage = lazy(() => import('pages/LoginPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/notices/:categoryName" element={<NoticesPage />} />
      </Route>
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  );
};

export default App;
