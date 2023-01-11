import React from 'react';
import { Homepage } from '../../pages/Homepage';
import { AppLayout } from '../layouts/AppLayout';

import {
  createBrowserRouter, createRoutesFromElements, Route,
} from 'react-router-dom';
import { Page2 } from '../../pages/Page2';
import { LoginCallbackPage } from '../auth/LoginCallbackPage';

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<Homepage />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/loginCallback" element={<LoginCallbackPage />} />
    </Route>
  )
);