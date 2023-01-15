import React from 'react';
import { Homepage } from '../../pages/Homepage';
import { AppLayout } from '../layouts/AppLayout';

import {
  createBrowserRouter, createRoutesFromElements, Route,
} from 'react-router-dom';
import { ProtectedPage } from '../../pages/ProtectedPage';
import { LoginCallbackPage } from '../auth/LoginCallbackPage';
import { ProtectedRoute } from '../auth/ProtectedRoute';
import { UnprotectedPage } from '../../pages/UnprotectedPage';

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<Homepage />} />
      <Route path="/protectedRoute" element={<ProtectedRoute> <ProtectedPage /> </ProtectedRoute>} />
      <Route path="/unprotectedRoute" element={<UnprotectedPage />} />
      <Route path="/loginCallback" element={<LoginCallbackPage />} />
    </Route>
  )
);