import React from 'react'
import NavBar from '../../components/Navbar'
import timer from '../../assets/timer.mp4'


import './Home.css';

const Home = () => {
  return (
    <div>
        <NavBar />

        {/* Video */}

        <div className="homevideo">
          <video width="60%" controls controlsList="nodownload" style={{marginLeft:'300px' }}>
            
            <source src={timer} type="video/mp4" />
                
          </video>
        </div>
        
    </div>
  )
}

export default Home