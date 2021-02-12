import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {CountryContextProvider} from './countriesContext'

ReactDOM.render(
  <React.StrictMode>
    <CountryContextProvider>
      <App />
    </CountryContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

