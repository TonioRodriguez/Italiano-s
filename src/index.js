import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Reserva from './components/Reserva';
import Contacto from './components/Contacto';
import Menu from './components/Menu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/reservacion' element={<Reserva />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);