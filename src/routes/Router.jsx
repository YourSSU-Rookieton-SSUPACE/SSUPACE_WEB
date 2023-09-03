import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Space from './Space';
import SpaceCard from './SpaceCard';
import Home from './Home';
import ErrorPage from './ErrorPage';
import SearchResult from './SearchResult';
import { getBuildingSpace, getSpace, getSpaceByUsage } from '../apis';

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
        loader: ({ params }) => getBuildingSpace(params.buildingId),
      },
      {
        path: '/space/:spaceId',
        element: <Space />,
        loader: ({ params }) => getSpace(params.spaceId),
      },
      {
        path: '/search',
        element: <SearchResult />,
        loader: ({ request }) => {
          const url = new URL(request.url);
          const usages = url.searchParams.getAll('usage');
          return getSpaceByUsage(usages);
        },
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
