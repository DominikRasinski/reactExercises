import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Stars } from './components/stars/Stars';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Stars maxRating={5} />
    {/* <App /> */}
  </React.StrictMode>
);
