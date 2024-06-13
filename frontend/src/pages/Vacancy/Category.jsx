import React from "react";
import NavBar from '../../components/Navbar_customer'; 
import FooterHome from "../../components/FooterHome";
import '../home/Home.css'
import VacancyCard from "../../components/VacancyCard";


const Category = () => {
  return (
        <div style={{backgroundColor:'white'}}>
    
              <NavBar />
              <input
                    type="search"
                    name="search"
                    id="search"
                    //value={}
                    //onChange={}
                    placeholder="Search Job by category or name"
                    //style={{ width: "420px", border: '1px solid gray', padding: '20px', borderRadius: '30px', position:'relative', marginLeft:'600px', marginTop:'0', zIndex:'1', height:'20px' }}
                  />
            <div className="about-us-container">
              <VacancyCard/>
            <br /><br />     
        </div><br/><br/>
          <FooterHome />
    </div>
  )
}

export default Category;