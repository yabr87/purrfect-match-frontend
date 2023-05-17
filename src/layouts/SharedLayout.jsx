import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import Switcher from 'components/themeSwitcher/Switcher';
const Header = lazy(() => import('components/Header'));

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Switcher />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
