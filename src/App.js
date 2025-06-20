import React from 'react';
import './css/App.css';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Detalhes from './Pages/Detalhes';
import ErrorPage from './Pages/ErrorPage';
import Navegacao from './Components/Navegacao';
import Home from './Pages/Home';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navegacao />
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Detalhes />} path='/detalhes/:id' />
          <Route element={<ErrorPage />} path='*' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
