import { LandingPage } from '@pages';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

export const useRouterLinks = () => {
  const routerObjects: RouteObject[] = [
    {
      path: '/',
      element: <LandingPage />,
    },
  ];
  const router = createBrowserRouter(routerObjects);

  return { router };
};
