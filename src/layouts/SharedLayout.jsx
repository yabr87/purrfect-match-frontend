import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'shared/components/Loader';

import Header from 'components/Header';

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
