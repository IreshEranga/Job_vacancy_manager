import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavbarCustomer from './Navbar_customer';
import FooterHome from "./FooterHome";
import '../pages/home/Home.css';


const FullVacancy = () => {
  const { id } = useParams();
  const [vacancy, setVacancy] = useState(null);
  const [error, setError] = useState(null);

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
        <Card.Header style={{backgroundColor:' rgba(7,1,65,225)', color:'white'}}> <h1>Category - {vacancy.category}</h1> </Card.Header>
        <Card.Body className='fulljobbody'>
          <Card.Title> <h2 style={{color:'rgba(4, 29, 113, 0.841)'}}>{vacancy.title}</h2> </Card.Title> <br />


          <Card.Text>  <b>Description </b> <br />
            {vacancy.description}
          </Card.Text>
          <Card.Text>
            <b>Requirements</b> <br />
            {vacancy.requirments}
          </Card.Text>
          <Button variant="primary">Apply Now</Button>
        </Card.Body>
      </Card>
      </center>
      <br /><br />
      <FooterHome />
    </div>
  );
}

export default FullVacancy;
