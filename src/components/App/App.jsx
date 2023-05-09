import { Route, Routes } from 'react-router-dom';
import { MainLayout } from 'layouts/MainLayout';
import HomePage from 'pages/HomePage';

// const HomePage = lazy(() => import('pages/HomePage'));z
// const RegisterPage = lazy(() => import('pages/RegisterPage'));
// const LoginPage = lazy(() => import('pages/LoginPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>

      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  );
};

export default App;
