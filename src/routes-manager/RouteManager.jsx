import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home'
import Navbar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import About from '../pages/About/About';
import Post from '../pages/Posts/Post';

export default function RouteManager() {
  return (
   <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={
                <Home/>
            } />
        </Routes>
        <Routes>
            <Route path='/about' element={
                <About/>
            } />
        <Route path='/post/:id' element={ <Post/> } /> 
        </Routes>
        <Footer/>
   </Router>
  )
}
