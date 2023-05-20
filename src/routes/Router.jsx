import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Space from './Space';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/space/:spaceId',
    element: <Space />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
