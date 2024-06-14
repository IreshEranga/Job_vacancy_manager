// // import React, { useEffect, useState } from "react";
// // import NavBar from '../../components/Navbar_customer'; 
// // import FooterHome from "../../components/FooterHome";
// // import '../home/Home.css'
// // import VacancyCard from "../../components/VacancyCard";


// // const Category = () => {


// //   const [vacancies, setVacancies] = useState([]);

// //   useEffect(() => {
// //     fetch("/api/vacancies")
// //       .then(response => response.json())
// //       .then(data => setVacancies(data))
// //       .catch(error => console.error("Error fetching vacancies:", error));
// //   }, []);

// //   const groupedVacancies = vacancies.reduce((acc, vacancy) => {
// //     const category = vacancy.category || "Uncategorized";
// //     if (!acc[category]) acc[category] = [];
// //     acc[category].push(vacancy);
// //     return acc;
// //   }, {});


// //   return (
// //         <div style={{backgroundColor:'white'}}>
    
// //               <NavBar />
// //               <input
// //                     type="search"
// //                     name="search"
// //                     id="search"
// //                     //value={}
// //                     //onChange={}
// //                     placeholder="Search Job by category or name"
// //                     //style={{ width: "420px", border: '1px solid gray', padding: '20px', borderRadius: '30px', position:'relative', marginLeft:'600px', marginTop:'0', zIndex:'1', height:'20px' }}
// //                   />
// //             <div className="about-us-container">
// //               {Object.keys(groupedVacancies).map(category => (
// //           <VacancyCard key={category} category={category} vacancies={groupedVacancies[category]} />
// //         ))}
// //             <br /><br />     
// //         </div><br/><br/>
// //           <FooterHome />
// //     </div>
// //   )
// // }

// // export default Category;


// import React, { useEffect, useState } from "react";
// import NavBar from '../../components/Navbar_customer'; 
// import FooterHome from "../../components/FooterHome";
// import '../home/Home.css';
// import VacancyCard from "../../components/VacancyCard";

// const Category = () => {
//   const [vacancies, setVacancies] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:8000/api/vacancies")
//       .then(response => {
//         if (!response.ok) {
//           // If the response is not ok, log the entire response for debugging
//           throw new Error(`HTTP error! status: ${response.status}`);
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
//     <div style={{backgroundColor:'white'}}>
//       <NavBar />
//       <input
//         type="search"
//         name="search"
//         id="search"
//         placeholder="Search Job by category or name"
//       />
//       <div className="about-us-container">
//         {error && <p>Error: {error}</p>}
//         {Object.keys(groupedVacancies).map(category => (
//           <VacancyCard key={category} category={category} vacancies={groupedVacancies[category]} />
//         ))}
//         <br /><br />     
//       </div><br/><br/>
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

  const groupedVacancies = vacancies.reduce((acc, vacancy) => {
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
        placeholder="Search Job by category or name"
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
