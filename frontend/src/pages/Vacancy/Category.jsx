// import React, { useEffect, useState } from "react";
// import NavBar from '../../components/Navbar_customer'; 
// import FooterHome from "../../components/FooterHome";
// import '../home/Home.css';
// import VacancyCard from "../../components/VacancyCard";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// const Category = () => {
//   const [vacancies, setVacancies] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:8000/api/vacancies")
//       .then(response => {
//         if (!response.ok) {
//           return response.text().then(text => { throw new Error(text) });
//         }
//         return response.json();
//       })
//       .then(data => setVacancies(data))
//       .catch(error => {
//         console.error("Error fetching vacancies:", error);
//         setError(error.message);
//       });
//   }, []);

//   const groupedVacancies = vacancies.reduce((acc, vacancy) => {
//     const category = vacancy.category || "Uncategorized";
//     if (!acc[category]) acc[category] = [];
//     acc[category].push(vacancy);
//     return acc;
//   }, {});

//   return (
//     <div style={{ backgroundColor: 'white' }}>
//       <NavBar />
      
//       <input
//         type="search"
//         name="search"
//         id="search"
//         placeholder="Search Job by category or title"
//       />
//       <Container>
//         {error && <p>Error: {error}</p>}
//         {Object.keys(groupedVacancies).map(category => (
//           <Row key={category} className="mb-4">
//             <Col>
//               <VacancyCard category={category} vacancies={groupedVacancies[category]} />
//             </Col>
//           </Row>
//         ))}
//       </Container>
//       <FooterHome />
//     </div>
//   );
// }

// export default Category;

import React, { useEffect, useState } from "react";
import NavBar from '../../components/Navbar_customer'; 
import FooterHome from "../../components/FooterHome";
import '../home/Home.css';
import VacancyCard from "../../components/VacancyCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Category = () => {
  const [vacancies, setVacancies] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/vacancies")
      .then(response => {
        if (!response.ok) {
          return response.text().then(text => { throw new Error(text) });
        }
        return response.json();
      })
      .then(data => setVacancies(data))
      .catch(error => {
        console.error("Error fetching vacancies:", error);
        setError(error.message);
      });
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredVacancies = vacancies.filter(vacancy =>
    vacancy.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vacancy.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedVacancies = filteredVacancies.reduce((acc, vacancy) => {
    const category = vacancy.category || "Uncategorized";
    if (!acc[category]) acc[category] = [];
    acc[category].push(vacancy);
    return acc;
  }, {});

  return (
    <div style={{ backgroundColor: 'white' }}>
      <NavBar />
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search Job by category or title"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <Container>
        {error && <p>Error: {error}</p>}
        {Object.keys(groupedVacancies).map(category => (
          <Row key={category} className="mb-4">
            <Col>
              <VacancyCard category={category} vacancies={groupedVacancies[category]} />
            </Col>
          </Row>
        ))}
      </Container>
      <FooterHome />
    </div>
  );
}

export default Category;
