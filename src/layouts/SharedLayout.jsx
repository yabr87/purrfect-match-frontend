import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'shared/components/Loader';

const Header = lazy(() => import('components/Header'));

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
