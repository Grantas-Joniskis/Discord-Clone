import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RegisterPage from 'pages/register-page';
import LoginPage from 'pages/login-page';
import routes from './routes';
import ChatPage from '../pages/chat-page';

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
      path: routes.SingleChat,
      element: <ChatPage />,
    },
  ],
);

export default router;
