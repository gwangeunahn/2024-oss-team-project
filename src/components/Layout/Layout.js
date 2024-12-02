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
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';

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
          <Route path="/serviceInfo/:id" element={<ServiceInfo/>} />
          <Route path="/graduation" element={<Graduation/>} />
          <Route path="/graduation/:id" element={<Graduation/>} />
          <Route path="/myInfo" element={<MyInfo/>} />
          <Route path="/myInfo/:id" element={<MyInfo/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </Router>

      <Footer/>
    </div>
  )
}

export default Layout;