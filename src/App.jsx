import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';

import { Home, MealDetails, Error, Category } from "./pages/index";

import Navbar from './components/Header/Navbar';
import Login from './components/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/meal/:id" element={<MealDetails />} />
        <Route path="/meal/category/:name" element={<Category />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
