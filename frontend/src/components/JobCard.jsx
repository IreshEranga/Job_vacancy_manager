import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import office from '../assets/office.jpg';
import graduate from '../assets/graduate.png';
import '../pages/home/Home.css';

function Jobcard() {
  return (
    <div>
      <Row xs={1} md={3} className="g-4">
        <Col>
          <Card className="card-custom">
            <Card.Img variant="top" src={office} />
            <Card.Body>
              <Card.Title style={{ color: 'rgb(17, 55, 108)' }}>Back Office Jobs</Card.Title>
              <Card.Text>
                Find jobs in administrative, human resources, accounting, legal, and finance categories.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="card-custom">
            <Card.Img variant="top" src={graduate} />
            <Card.Body>
              <Card.Title style={{ color: 'rgb(17, 55, 108)' }}>Jobs for New Graduates</Card.Title>
              <Card.Text>
                Jobs for New Graduates - Start your career
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="card-custom">
            <Card.Img variant="top" src={graduate} />
            <Card.Body>
              <Card.Title style={{ color: 'rgb(17, 55, 108)' }}>Jobs for New Graduates</Card.Title>
              <Card.Text>
                Jobs for New Graduates - Start your career
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <Row xs={1} md={3} className="g-4">
        <Col>
          <Card className="card-custom">
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title style={{ color: 'rgb(17, 55, 108)' }}>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Jobcard;
