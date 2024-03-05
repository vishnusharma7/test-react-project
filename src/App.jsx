/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Productdetail from './pages/Productdetail';


const App = () => {
  return (
    <BrowserRouter>
     

      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-1">
          <Routes>
          <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/details" element={<Productdetail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
