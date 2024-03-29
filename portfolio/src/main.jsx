import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </React.StrictMode>,
  </BrowserRouter>
);
