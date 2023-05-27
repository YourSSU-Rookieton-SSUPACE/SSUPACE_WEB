import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Space from './Space';
import SpaceCard from '../components/SpaceCard';
import Home from './Home';
import ErrorPage from './ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="/buildings/1" replace /> },
      {
        path: 'buildings/:buildingId',
        element: <SpaceCard />,
      },
      {
        path: '/space/:spaceId',
        element: <Space />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
