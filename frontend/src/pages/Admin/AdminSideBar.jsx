import React, { useState } from "react";
import SALICSLOGO from "../../assets/salics.jpg";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import { useAuthStore } from "../../../store/useAuthStore";
import Vacancies from './Vacancies.jsx';
// import Applications from "./Applications.jsx";
import AdminDashboard from "./AdminDashboard.jsx";


const AdminSideBar = () => {
  const [activeContent, setActiveContent] = useState("Dashboard");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLinkClick = (content) => {
    setActiveContent(content);
  };

  /* const { logout } = useAuthStore((state) => ({
    logout: state.logout,
  })); */

  const renderContent = () => {
    switch (activeContent) {
      case "Dashboard":
        return (
          <>
            <AdminDashboard />
          </>
        );
      case "Vacancies":
        return (
          <>
            <Vacancies />
          </>
        );
      /* case "Applications":
        return (
          <>
            <Applications />
          </>
        ); */
      case "Account":
        return <p>This is the Account page content.</p>;
      default:
        return (
          <p>
            Welcome to the application. Please select a link from the sidebar.
          </p>
        );
    }
  };

  // Function to handle logout logic
  const handleLogout = () => {
    // Perform logout logic (e.g., clear local storage, reset authentication state)
    // Assuming `logout` function performs necessary logout actions

    // Use navigate to redirect to the login page
    navigate('/login');
  };

  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-light"
        style={{ width: "280px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <img
            src={SALICSLOGO}
            alt="Salics"
            style={{ maxWidth: "100%", maxHeight: "100px" }}
          />
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a
              href="#dashboard"
              className={`nav-link ${
                activeContent === "Dashboard" ? "active" : "link-dark"
              }`}
              onClick={() => handleLinkClick("Dashboard")}
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#vacancies"
              className={`nav-link ${
                activeContent === "Vacancies" ? "active" : "link-dark"
              }`}
              onClick={() => handleLinkClick("Vacancies")}
            >
              Vacancies
            </a>
          </li>
          {/* <li>
            <a
              href="#applications"
              className={`nav-link ${
                activeContent === "Applications" ? "active" : "link-dark"
              }`}
              onClick={() => handleLinkClick("Applications")}
            >
              Applications
            </a>
          </li> */}
        </ul>
        <div className="mt-auto">
          <button
            className="btn btn-dark w-100 d-flex align-items-center justify-content-center"
            onClick={handleLogout}
          >
            <FiLogOut className="me-2" /> Logout
          </button>
        </div>
      </div>
      <div className="flex-grow-1 p-4" style={{ overflowY: "auto" }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminSideBar;
