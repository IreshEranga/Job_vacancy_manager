import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import office from '../assets/office.jpg';
import graduate from '../assets/graduate.png';

function Jobcard() {
  const [hover, setHover] = useState(null);

  const handleMouseEnter = (index) => {
    setHover(index);
  };

  const handleMouseLeave = () => {
    setHover(null);
  };

  const cardStyles = {
    transition: 'transform 0.2s, box-shadow 0.2s',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  };

  const hoverStyles = {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div>
      <Row xs={1} md={3} className="g-4">
        {[office, graduate, graduate].map((src, index) => (
          <Col key={index}>
            <Card
              style={hover === index ? { ...cardStyles, ...hoverStyles } : cardStyles}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Img variant="top" src={src} />
              <Card.Body>
                <Card.Title style={{ color: 'rgb(17, 55, 108)' }}>
                  {index === 0 ? 'Back Office Jobs' : index === 1 ? 'Jobs for New Graduates' : 'Part Time Jobs for Undergraduates'}
                </Card.Title>
                <Card.Text>
                  {index === 0
                    ? 'Find jobs in administrative, human resources, accounting, legal, and finance categories.'
                    : index === 1
                    ? 'Jobs for New Graduates - Start your career'
                    : 'Part Time Jobs for Undergraduates - Start your career'}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <br />
    </div>
  );
}

export default Jobcard;