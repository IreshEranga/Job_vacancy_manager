import React from 'react'
import NavBar from '../../components/Navbar'
import timer from '../../assets/timer.mp4'
import japan from '../../assets/japan.jpg'
import asus from '../../assets/asuss.png'
import bios from '../../assets/bios.png'
import cjfoods from '../../assets/cjfoods.png'
import gait from '../../assets/gait.png'
import scala from '../../assets/scala.png'
import systemsgo from '../../assets/systemsgo.png'
import Jobcard from '../../components/JobCard'
import FooterHome from '../../components/FooterHome'
import CompanyCardList from '../../components/CompanyCard'
import FormExample from './ContactForm';
import './Home.css';

const Home = () => {
  return (
    <div>
        <NavBar />

        {/* Video */}
        <br/><br/>
        <div className="homevideo">
          <video width="60%" controls controlsList="nodownload" style={{marginLeft:'300px' }}>
            
            <source src={timer} type="video/mp4" />
                
          </video>
        </div>

        <div className="bodycontainerhome">
          <div className="homebodyabout">
            <h1>Excited to Work in <b>Japan ?</b> <br />Discover Your Dream Job With Us!</h1>
            <div className="imgwithpara">
              <p className='homebodypara'>Japan is a land of innovation, rich culture, and endless opportunities. Whether you’re drawn to the bustling cities, advanced technology, or serene landscapes, Japan offers a unique and fulfilling work environment. Embrace the chance to grow professionally while experiencing the distinctive blend of tradition and modernity that defines Japanese life. Explore diverse job openings across industries, and join a community of forward-thinking professionals. Your next adventure awaits in Japan—start your journey today!</p>
              <div className="imgbg">
              <img src={japan} alt="japan" style={{borderRadius:'15px'}}/>
              </div>
            </div>
          </div>

          <div className="imageset">
            <div className="imageset-inner">
              <img src={asus} alt="asus" />
              <img src={bios} alt="bios" />
              <img src={cjfoods} alt="cjfoods" />
              <img src={gait} alt="gait" />
              <img src={scala} alt="scala" />
              <img src={systemsgo} alt="systemsgo" />
              <img src={asus} alt="asus" />
              <img src={bios} alt="bios" />
              <img src={cjfoods} alt="cjfoods" />
              <img src={gait} alt="gait" />
              <img src={scala} alt="scala" />
              <img src={systemsgo} alt="systemsgo" />
            </div>
          </div>

          <Jobcard/>

          <br /><br /><br /><br />

          <center><h2>Our Companies</h2></center><br /><br />
          <CompanyCardList/><br /><br />

          <div className="contact"><br></br><br></br>
            <h2>Contact Us</h2>
            <h1>STAY IN TOUCH</h1>
            <div className="border"></div>
              <br /><br />
            <FormExample />
          </div><br></br><br></br>

        </div>
        <FooterHome/>
    </div>
  )
}

export default Home