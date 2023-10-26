import React from 'react';
import ReactDOM from 'react-dom/client';

import { Chronometer } from './chronometer/chronometer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Chronometer />
  </React.StrictMode>
);
reportWebVitals();
