// import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import japan from '../assets/japan.jpg';
import '../pages/home/Home.css';

function CompanyCard({ logo, title, description }) {
  return (
    <Col>
      <Card className="card-custom-company">
      <div className="card-image-container">
          <Card.Img variant="top" src={logo} />
        </div>
        <Card.Body className="card-hover-content-company">
          <Card.Title >{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

function CompanyCardList() {
  const companies = [
    {
      logo: japan,
      title: 'Company One',
      description: 'Description for Company One'
    },
    {
      logo: 'path/to/company2logo.png',
      title: 'Company Two',
      description: 'Description for Company Two'
    },
    {
        logo: 'path/to/company2logo.png',
        title: 'Company Two',
        description: 'Description for Company Two'
      },
      {
        logo: 'path/to/company2logo.png',
        title: 'Company Two',
        description: 'Description for Company Two'
      }
    // Add more companies as needed
  ];

  return (
    <div>
      <Row xs={1} md={4} className="g-4">
        {companies.map((company, index) => (
          <CompanyCard
            key={index}
            logo={company.logo}
            title={company.title}
            description={company.description}
          />
        ))}
      </Row>
    </div>
  );
}

export default CompanyCardList;
