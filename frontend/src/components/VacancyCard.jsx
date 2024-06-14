// import React from 'react';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import office from '../assets/office.jpg';
// //import Row from 'react-bootstrap/Row';
// //import Col from 'react-bootstrap/Col';
// import '../pages/home/Home.css';

// const VacancyCard = ({ category, vacancies }) => {
//   return (
//     <div className='vacancycard'>
//       <center><h1 className="categoryjob">{category}</h1></center>
//       <Card className="card-custom">
//         <Card.Img className='vccardimg' variant="top" src={office} />
//         <Card.Body>
//           {vacancies.map(vacancy => (
//             <div key={vacancy._id} className="d-flex justify-content-between align-items-center" style={{ marginTop: '10px' }}>
//               <Card.Title style={{ color: 'rgb(17, 55, 108)' }}>{vacancy.title}</Card.Title>
//               <Button variant="primary" style={{ padding: '10px', color: 'rgb(255, 255, 255)', border: '1px solid black' }}>See More</Button>
//             </div>
//           ))}
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }

// export default VacancyCard;



import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import office from '../assets/office.jpg';
import { useNavigate } from 'react-router-dom';
import '../pages/home/Home.css';

const VacancyCard = ({ category, vacancies }) => {
  const navigate = useNavigate();

  const handleSeeMore = (id) => {
    navigate(`/vacancy/${id}`);
  };

  return (
    <div className='vacancycard'>
      <center><h1 className="categoryjob">{category}</h1></center>
      <Card className="card-custom">
        <Card.Img className='vccardimg' variant="top" src={office} />
        <Card.Body>
          {vacancies.map(vacancy => (
            <div key={vacancy._id} className="d-flex justify-content-between align-items-center" style={{ marginTop: '10px' }}>
              <Card.Title style={{ color: 'rgb(17, 55, 108)' }}>{vacancy.title}</Card.Title>
              <Button 
                variant="primary" 
                style={{ padding: '10px', color: 'rgb(255, 255, 255)', border: '1px solid black' }}
                onClick={() => handleSeeMore(vacancy._id)}
              >
                See More
              </Button>
            </div>
          ))}
        </Card.Body>
      </Card>
    </div>
  );
}

export default VacancyCard;

