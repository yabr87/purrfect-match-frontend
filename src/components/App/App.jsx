import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'layouts/SharedLayout';
import HomePage from 'pages/HomePage';
import Container from 'shared/components/Container';

// const HomePage = lazy(() => import('pages/HomePage'));z
// const RegisterPage = lazy(() => import('pages/RegisterPage'));
// const LoginPage = lazy(() => import('pages/LoginPage'));

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </Container>
  );
};

export default App;
