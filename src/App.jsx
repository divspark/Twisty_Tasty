import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './App.scss';
import { Home, MealDetails, Error, Category } from "./pages/index";
import Navbar from './components/Header/Navbar';
import Login from './components/Login/Login';


const AppWrapper = () => {
  const location = useLocation();
  const hideNavbarRoutes = ['/login']; // add other routes here if needed

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/meal/:id" element={<MealDetails />} />
        <Route path="/meal/category/:name" element={<Category />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
