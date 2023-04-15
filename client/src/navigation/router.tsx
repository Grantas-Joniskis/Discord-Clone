import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RegisterPage from 'pages/register/register-page';
import routes from './routes';

const router = createBrowserRouter(
  [
    {
      path: routes.Register,
      element: <RegisterPage />,
    },
  ],
);

export default router;
