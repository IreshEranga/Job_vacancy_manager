import React from "react";
import NavBar from '../../components/Navbar_customer'; 
import FooterHome from "../../components/FooterHome";
import '../home/Home.css'
import VacancyCard from "../../components/VacancyCard";


const Category = () => {
  return (
        <div style={{backgroundColor:'white'}}>
    
              <NavBar />

            <div className="about-us-container">
              <VacancyCard/>
            <br /><br />     
        </div><br/><br/>
          <FooterHome />
    </div>
  )
}

export default Category;