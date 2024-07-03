import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Calculator from './calculadora/Calculator';
import './index.css'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
        <Calculator/>
    </React.StrictMode>,
);