import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RegisterPage from 'pages/register/register-page';
import LoginPage from 'pages/login/login-page';
import PostForm from 'test/post-form';
import ChatPage from 'pages/chat/chat-page';
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
      path: routes.Chat,
      element: <ChatPage />,
    },
    {
      path: routes.TestPostFrom,
      element: <PostForm />,
    },
  ],
);

export default router;
