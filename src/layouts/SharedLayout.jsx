import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';

const Header = lazy(() => import('components/Header'));

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
