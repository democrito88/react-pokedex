import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PokemonProvider } from './contexts/PokemonContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <PokemonProvider>
        <App/>
    </PokemonProvider>
);
reportWebVitals();
