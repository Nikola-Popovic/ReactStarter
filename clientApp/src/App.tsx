import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Router } from './shared/routing/Routes';

function App() {
  return (
    <RouterProvider router={Router} />
  );
}

export default App;
