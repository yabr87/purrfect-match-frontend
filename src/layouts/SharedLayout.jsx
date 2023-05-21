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
        <ToastContainer
          position="top-right"
          autoClose={3000}
          newestOnTop
          theme={props => props.theme.colors.notificationColorTheme}
          bodyClassName="toast-body"
          toastClassName="toast-wrapper"
        />
      </main>
    </>
  );
};

export default SharedLayout;
