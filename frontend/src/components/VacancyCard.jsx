import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import office from '../assets/office.jpg';
import '../pages/home/Home.css';

function VacancyCard() {
  return (
    <div className='vacancycard'>
      <Row xs={1} md={1} className="g-4">
        <Col>
        <Button className='applybtn' variant="primary">Apply</Button>
            
          <Card className="card-custom">
          <center><h1 className="categoryjob">Hotel</h1></center>
            <Card.Img variant="top" src={office} />
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center" style={{marginTop:'10px'}}>
                <Card.Title style={{ color: 'rgb(17, 55, 108)' }}>Back Office Jobs</Card.Title>
                <Button variant="primary" style={{ padding: '10px', color: 'rgb(255, 255, 255)', border:'1px solid black' }}>See More</Button>
              </div>
              <div className="d-flex justify-content-between align-items-center" style={{marginTop:'10px'}}>
                <Card.Title style={{ color: 'rgb(17, 55, 108)' }}>Back Office Jobs</Card.Title>
                <Button variant="primary" style={{ padding: '10px', color: 'rgb(255, 255, 255)', border:'1px solid black' }}>See More</Button>
              </div>
              <div className="d-flex justify-content-between align-items-center" style={{marginTop:'10px'}}>
                <Card.Title style={{ color: 'rgb(17, 55, 108)' }}>Back Office Jobs</Card.Title>
                <Button variant="primary" style={{ padding: '10px', color: 'rgb(255, 255, 255)', border:'1px solid black' }}>See More</Button>
              </div>
              <div className="d-flex justify-content-between align-items-center"style={{marginTop:'10px'}}>
                <Card.Title style={{ color: 'rgb(17, 55, 108)' }}>Back Office Jobs</Card.Title>
                <Button variant="primary" style={{ padding: '10px', color: 'rgb(255, 255, 255)', border:'1px solid black' }}>See More</Button>
              </div>
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      
    </div>
  );
}

export default VacancyCard;
