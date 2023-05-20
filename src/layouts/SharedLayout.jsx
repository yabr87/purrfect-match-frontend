import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'shared/components/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from 'components/Header';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ToastContainer autoClose={3000} theme="colored" />
      </main>
    </>
  );
};

export default SharedLayout;
