import { Homepage } from '../../pages/Homepage';
import { AppLayout } from '../layouts/AppLayout/AppLayout';

import {
  createBrowserRouter, createRoutesFromElements, Route,
} from 'react-router-dom';
import { ProtectedPage } from '../../pages/ProtectedPage';
import { LoginCallbackPage } from '../auth/LoginCallbackPage';
import { ProtectedRoute } from '../auth/ProtectedRoute';
import { UnprotectedPage } from '../../pages/UnprotectedPage';
import { LandingPage } from '../../pages/LandingPage';

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LandingPage />} />
      <Route path="/app" element={<AppLayout />}>
        <Route path="/app/" element={<Homepage />} />
        <Route path="/app/protectedRoute" element={<ProtectedRoute> <ProtectedPage /> </ProtectedRoute>} />
        <Route path="/app/unprotectedRoute" element={<UnprotectedPage />} />
        <Route path="/app/loginCallback" element={<LoginCallbackPage />} />
      </Route>
    </Route>
  )
);