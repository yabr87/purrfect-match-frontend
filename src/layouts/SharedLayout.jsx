import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'shared/components/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useOnlineStatus } from '../shared/hooks/useOnlineStatus.js';
import Header from 'components/Header';
import Disconnect from 'components/Disconnect';
import IMG from '../images/disconnected.png';

export const SharedLayout = () => {
  console.log(IMG);

  const isOnline = useOnlineStatus();
  return (
    <>
      <Header />
      <main>
        {isOnline ? (
          <>
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
          </>
        ) : (
          <Disconnect />
        )}
      </main>
    </>
  );
};

export default SharedLayout;
