import React from 'react';
import Test from 'pages/test';
import { createBrowserRouter } from 'react-router-dom';
import routes from './routes';

const router = createBrowserRouter(
  [
    {
      path: routes.Test,
      element: <Test />,
    },
  ],
);

export default router;
