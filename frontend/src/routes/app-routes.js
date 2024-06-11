import React from 'react'
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";


import UserHome from "../Components/User/UserHome";
import Art from '../Components/User/Art';

const AppRoutes = () => {
  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<UserHome />} />
                <Route path="/art" element={<Art />} />
            </Routes>
        </Router>
    </>
  )
}

export default AppRoutes