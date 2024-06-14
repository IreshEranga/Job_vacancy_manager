import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from '../pages/home';
import Vacancy from '../pages/Vacancy/Category';
import Gallery from '../pages/Gallery/Gallery';
import AboutUs from '../pages/AboutUs/AboutUs';
import FullVacancy from '../components/FullVacancy';
import AdminSideBar from '../pages/Admin/AdminSideBar';
import AddVacancy from '../pages/Admin/AddVacancy';


const AppRoutes = () => {
  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/vacancy" element={<Vacancy />} />
                <Route path="/vacancy/:id" element={<FullVacancy />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/about-us" element={<AboutUs />} /> 
                <Route path="/admin" element={<AdminSideBar />} />             
                <Route path="/add-vacancy" element={<AddVacancy />} />             
            </Routes>
        </Router>
    </>
  )
}

export default AppRoutes;