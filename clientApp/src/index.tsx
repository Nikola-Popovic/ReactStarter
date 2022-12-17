import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import ColorThemeProvider from './shared/theme/ColorTheme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ColorThemeProvider>
      <App />
    </ColorThemeProvider>
  </React.StrictMode>
);
