import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '../presentation/layout/MainLayout';
import Cars from '../presentation/pages/car/Car';
import CarDetail from '../presentation/pages/car/CarDetail';
import Home from '../presentation/pages/HomePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: '/cars',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Cars />,
      },
    ],
  },
  {
    path: '/cars/:carId',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <CarDetail />,
      },
    ],
  },
]);
