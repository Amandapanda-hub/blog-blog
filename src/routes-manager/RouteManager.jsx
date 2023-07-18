import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home'
import Navbar from '../components/NavBar/NavBar';

export default function RouteManager() {
  return (
   <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={
                <Home/>
            } />
        </Routes>
   </Router>
  )
}
