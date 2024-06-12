import React from 'react'
import NavBar from '../../components/Navbar'
import timer from '../../assets/timer.mp4'
import japan from '../../assets/japan.jpg'

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

        <div className="bodycontainerhome">
          <div className="homebodyabout">
            <h1>Excited to Work in <b>Japan</b> ? Discover Your Dream Job!</h1><br /><br />
            <div className="imgwithpara">
              <p className='homebodypara'>Japan is a land of innovation, rich culture, and endless opportunities. Whether you’re drawn to the bustling cities, advanced technology, or serene landscapes, Japan offers a unique and fulfilling work environment. Embrace the chance to grow professionally while experiencing the distinctive blend of tradition and modernity that defines Japanese life. Explore diverse job openings across industries, and join a community of forward-thinking professionals. Your next adventure awaits in Japan—start your journey today!</p>
              <div className="imgbg">
              <img src={japan} alt="japan" style={{borderRadius:'15px'}}/>
              </div>
            </div>
          </div>

          <br /><br /><br /><br />
        </div>
        
    </div>
  )
}

export default Home