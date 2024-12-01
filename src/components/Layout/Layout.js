import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Layout.css';
import Header from '../Common/Header';
import Footer from '../Common/Footer'
import Home from '../Pages/Home';
import Info from '../Pages/Info';

function Layout() {
  return (
    <div className="container">
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info/>} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default Layout;