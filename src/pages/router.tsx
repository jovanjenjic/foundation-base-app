import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';

const App: React.FC = () => {
  // If there is global data that the application needs.
  // And if the application doesn't need to start rendering pages until that data
  // is fetched, you can apply that logic here.
  // Something like:
  // const { data, isLoading } = useFetchSettings();
  // if (isLoading) return <Spinner />
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};

export default App;
