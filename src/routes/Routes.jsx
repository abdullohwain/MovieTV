import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import { Home, Movie } from '../pages';

function Routes() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "/movie",
                    element: <Movie />,
                },
            ],
        },
    ]);
  return <RouterProvider router={router} />
}

export default Routes;