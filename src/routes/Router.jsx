import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Space from './Space';
import SpaceCard from '../components/SpaceCard';
import Home from './Home';
import ErrorPage from './ErrorPage';
import { getBuildingSpace, getSpace } from '../apis';
import { loader as tabIndexLoader } from '../components/BuildingTab';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    loader: tabIndexLoader,
    children: [
      { index: true, element: <Navigate to="/buildings/1" replace /> },
      {
        path: 'buildings/:buildingId',
        element: <SpaceCard />,
        loader: ({ params }) => getBuildingSpace(params.buildingId),
      },
      {
        path: '/space/:spaceId',
        element: <Space />,
        loader: ({ params }) => getSpace(params.spaceId),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
