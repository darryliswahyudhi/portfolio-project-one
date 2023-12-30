import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Barba from 'barba.js';
import './components/transition'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

Barba.Pjax.start();
Barba.Prefetch.init(); 
Barba.Prefetch.fromCache('data-science'); 
Barba.Prefetch.fromCache('data-engineering'); 
Barba.Prefetch.fromCache('cloud-computation');

