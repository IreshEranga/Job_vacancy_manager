import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MDBContainer, MDBInput, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import NavBar from "../../components/Navbar_customer.js";
import '../home/Home.css'

function LogIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = () => {
    // Hardcoded credentials
    const hardcodedUsername = 'shenal';
    const hardcodedPassword = 'vertex';

    if (formData.username === hardcodedUsername && formData.password === hardcodedPassword) {
      // Redirect to the desired page upon successful login
      navigate('/admin');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div >
        <NavBar/>
        <div className='loginpageform'>
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50" style={{backgroundColor:'rgba(4, 29, 113, 0.841)', color:'white'}}>
      <MDBInput
        wrapperClass='mb-4'
        label='Email address'
        id='form1'
        type='email'
        name='username'
        value={formData.username}
        onChange={handleInputChange}
        style={{marginTop:'20px'}}
      />
      <MDBInput
        wrapperClass='mb-4'
        label='Password'
        id='form2'
        type='password'
        name='password'
        value={formData.password}
        onChange={handleInputChange}
      />

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
      </div>

      <MDBBtn className="mb-4" onClick={handleLogin}>Sign in</MDBBtn>
    </MDBContainer>
    </div>
    </div>
  );
}

export default LogIn;
