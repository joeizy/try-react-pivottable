import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TryApp from './try/Try';
import TryPlotlyApp from './try/TryPlotly';
import TryPlotlyFunctional from './try/TryPlotlyFunctional';
import TryFunctional from './try/TryFunctional';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <TryApp /> */}
    {/* <TryPlotlyApp /> */}
    {/* <TryPlotlyFunctional /> */}
    <TryFunctional />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
