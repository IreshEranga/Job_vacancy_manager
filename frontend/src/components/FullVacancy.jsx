import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import NavbarCustomer from './Navbar_customer';
import FooterHome from "./FooterHome";
import '../pages/home/Home.css';
import toast from 'react-hot-toast';


const FullVacancy = () => {
  const { id } = useParams();
  const [vacancy, setVacancy] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [result, setResult] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8000/api/vacancies/${id}`)
      .then(response => {
        if (!response.ok) {
          return response.text().then(text => { throw new Error(text) });
        }
        return response.json();
      })
      .then(data => setVacancy(data))
      .catch(error => {
        console.error("Error fetching vacancy:", error);
        setError(error.message);
      });
  }, [id]);

  const handleApplyNow = () => {
    setShowModal(true);
  };

   const handleCloseModal = () => {
     setShowModal(false);
   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setResult("Sending....");

//     const formData = new FormData(e.target);
//     formData.append("access_key", "26c9dd63-75dc-4f2d-8fb9-c534cdf36573");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       e.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//     alert('Form submitted');
//     handleCloseModal();
//   };

const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending....");
  
    const formData = new FormData(e.target);
    formData.append("access_key", "f5cd2950-f856-4e23-b601-20c62c4cdc17");
  
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
  
    const data = await response.json();
  
    if (data.success) {
      setResult("Form Submitted Successfully");
      e.target.reset();
  
      // Log the submitted form details
      toast.success("Form submitted successfully!");
      console.log("Submitted Form Details:", Object.fromEntries(formData.entries()));
    } else {
      console.log("Error", data);
      toast.error("Error submitting form!",error);
      setResult(data.message);
    }
    //alert('Form submitted');
    handleCloseModal();
  };
  

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!vacancy) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <NavbarCustomer />
      <center>
        <Card className='fulljobdetails'>
          <Card.Header style={{backgroundColor:' rgba(7,1,65,225)', color:'white'}}> 
            <h1>Category - {vacancy.category}</h1> 
          </Card.Header>
          <Card.Body className='fulljobbody'>
            <Card.Title> 
              <h2 style={{color:'rgba(4, 29, 113, 0.841)'}}>{vacancy.title}</h2> 
            </Card.Title> <br />
            <Card.Text>  
              <b>Description </b> <br />
              {vacancy.description}
            </Card.Text>
            <Card.Text>
              <b>Requirements</b> <br />
              <ul>
                {vacancy.requirments.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </Card.Text>
            <Button variant="primary" onClick={handleApplyNow}>Apply Now</Button>
          </Card.Body>
        </Card>
      </center>
      <br /><br />
      <FooterHome />

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Apply for {vacancy.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter your email" required />
            </Form.Group>
            <Form.Group controlId="formMobile">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control type="text" name="phone" placeholder="Enter your mobile number" required />
            </Form.Group>
            <Form.Group controlId="formTitle">
              <Form.Label>Job Title</Form.Label>
              <Form.Control type="text" name="job_title" value={vacancy.title} readOnly />
            </Form.Group>
            <Form.Group controlId="formCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" name="job_category" value={vacancy.category} readOnly />
            </Form.Group>
            <Button variant="primary" type="submit" style={{marginTop: '10px'}}>
              Submit
            </Button>
          </Form>
          <span>{result}</span>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default FullVacancy;

