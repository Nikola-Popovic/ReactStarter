import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './shared/lang/i18next.config';
import App from './App';
import ColorThemeProvider from './shared/theme/ColorTheme';
import { Auth0Provider } from '@auth0/auth0-react';
import GlobalServices from './shared/services/GlobalServices';
import { CircularProgress } from '@mui/material';

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
      cacheLocation={'localstorage'}
      useRefreshTokens={true}
    >
      <ColorThemeProvider>
        <GlobalServices>
          <Suspense fallback={<CircularProgress />}>
            <App />
          </Suspense>
        </GlobalServices>
      </ColorThemeProvider>
    </Auth0Provider>
  </React.StrictMode>
);
