import { createBrowserRouter } from 'react-router-dom';
import Home from '../presentation/pages/HomePage';
import Cars from '../presentation/pages/car/Car';
import CarDetail from '../presentation/pages/car/CarDetail';
import MainLayout from '../presentation/layout/MainLayout';

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

