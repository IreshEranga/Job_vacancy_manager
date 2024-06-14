import React from "react";
import NavBar from '../../components/Navbar_customer'; 
import './AboutUs.css';
import FooterHome from '../../components/FooterHome'
import { FaPhone, FaEnvelope, FaFacebookSquare, FaMapMarker } from 'react-icons/fa';


const AboutUs = () => {
  return (
        <div style={{backgroundColor:'white'}}>
    
              <NavBar />

            <div className="about-us-container">
            <div className="about-us-content">
                <div className="restaurant-details"><br/>
                    <h1>ABOUT OUR COMPANY</h1><br></br>
                    <p>Salics is a dynamic and innovative company at the forefront of the tech industry, specializing in cutting-edge solutions for a variety of business needs. We are currently seeking passionate and talented individuals to join our team. At Salics, we pride ourselves on fostering a collaborative and inclusive work environment that encourages creativity and professional growth. Our team members are driven by a shared commitment to excellence and a desire to make a meaningful impact through their work. If you are eager to contribute to a company that values innovation and integrity, we invite you to explore our current job vacancies and consider becoming a part of our exciting journey.</p>
                </div><br></br>

                <div className="contact-details"><br></br>
                <h2>CONNECT WITH US</h2>
                <p className="contactme">
                  <FaPhone className="icon" /><span className="dot"> :  </span><a href="tel:+94772120231" className="contact-link"> +94 772120231</a>
                </p>
                <p className="contactme">
                  <FaEnvelope className="icon" /><span className="dot"> :  </span><a href="mailto:salicshokkaido@gmail.com" className="contact-link"> salicshokkaido@gmail.com</a>
                </p>
                <p>
                  <FaFacebookSquare className="icon" /><span className="dot"> :  </span><a href="https://www.facebook.com/profile.php?id=61552540748705&mibextid=LQQJ4d" className="social-link"> Salics</a>
                </p>
                <p>
                  <FaMapMarker className="icon" /> <span className="dot"> :  </span> Badugoda Junction, Harbour Road, Mirissa, Sri Lanka.
                </p>
                </div><br></br>
                <div className="gmapframe">
                <iframe id='gmapcanvas' title="Map" width="600" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=Emerald%20Bay%20Resort%20Badugoda%20Junction,%20Harbour%20Road,%20Mirissa%2081740+(Emerald%20Bay%20Restaurant)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=C&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe>
                </div><br></br>

              </div>          
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />      
        </div><br/><br/>
        <FooterHome/>
    </div>
  )
}

export default AboutUs;