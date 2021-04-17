import React from 'react';
import ReactDOM from 'react-dom';
import { GifExpertApp } from './GifExpertApp';
import './index.css';



ReactDOM.render(
  /* // para q react sea mas quisquilloso
  <React.StrictMode> 
   <App />   
  </React.StrictMode>, */
  <GifExpertApp />,
  document.getElementById('root')
);

