import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './App.scss';
import { Home, MealDetails, Error, Category } from "./pages/index";
import Navbar from './components/Header/Navbar';
import LoginSignup from './components/Login/Login';


const AppWrapper = () => {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/signup'];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/signup" element={<LoginSignup />} />
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
