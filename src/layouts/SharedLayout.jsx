import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'shared/components/Loader';
import { ToastContainer } from 'react-toastify';

import Header from 'components/Header';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ToastContainer autoClose={3000} />
      </main>
    </>
  );
};

export default SharedLayout;
