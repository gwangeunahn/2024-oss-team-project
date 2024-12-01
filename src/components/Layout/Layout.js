import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Layout.css';
import Header from '../Common/Header';
import Footer from '../Common/Footer'
import Home from '../Pages/Home';
import Calculate from '../Pages/Calculate';
import Search from '../Pages/SearchJob';
import ServiceInfo from '../Pages/ServiceInfo';
import Graduation from '../Pages/Graduation';
import MyInfo from '../Pages/MyInfo';

function Layout() {
  return (
    <div className="container">
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/calculate' element={<Calculate />} />
          <Route path='/search' element={<Search />} />
          <Route path="/serviceInfo" element={<ServiceInfo/>} />
          <Route path="/graduation" element={<Graduation/>} />
          <Route path="/myInfo" element={<MyInfo/>} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default Layout;