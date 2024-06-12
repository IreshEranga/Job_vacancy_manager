import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from '../pages/home';
import Vacancy from '../pages/Vacancy/Category';
import Gallery from '../pages/Gallery/Gallery';
import AboutUs from '../pages/AboutUs/AboutUs';


const AppRoutes = () => {
  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/vacancy" element={<Vacancy />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/about-us" element={<AboutUs />} />              
            </Routes>
        </Router>
    </>
  )
}

export default AppRoutes