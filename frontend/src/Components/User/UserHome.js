// import React from 'react'
// import Art from './Art'
// const UserHome = () => {
//   return (
//     <div>
//         <h1>UserHome</h1><br />
//         <a href="/art">Art</a>
//     </div>
//   )
// }

// export default UserHome

// src/Components/User/UserHome.js
import React from 'react';
import { Link } from 'react-router-dom';

const UserHome = () => {
  return (
    <div>
      <h1>User Home</h1><br />
      <Link to="/art">Art</Link>
    </div>
  );
};

export default UserHome;
