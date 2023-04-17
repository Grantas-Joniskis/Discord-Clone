import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RegisterPage from 'pages/register/register-page';
import LoginPage from 'pages/login/login-page';
import routes from './routes';

const router = createBrowserRouter(
  [
    {
      path: routes.Register,
      element: <RegisterPage />,
    },
    {
      path: routes.Login,
      element: <LoginPage />,
    },
  ],
);

export default router;
