import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RegisterPage from 'pages/register/register-page';
import LoginPage from 'pages/login/login-page';
import PostForm from 'test/post-form';
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
    {
      path: routes.TestPostFrom,
      element: <PostForm />,
    },
  ],
);

export default router;
