/* eslint-disable import/no-unresolved */
import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));
export const ImagesPage = lazy(() => import('src/pages/images'));
export const ListPage = lazy(() => import('src/pages/list'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const TimePage = lazy(() => import('src/pages/time'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'list', element: <ListPage /> },
        { path: 'time', element: <TimePage /> },
        { path: 'images', element: <ImagesPage /> },
      ],
    },

    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
