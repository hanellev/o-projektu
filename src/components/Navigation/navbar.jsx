import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar nav-tabs">
      <Link to="/" className="nav-item nav-link fw-lighter">
        Home Page
      </Link>
      <Link to="/project" className="nav-item nav-link fw-lighter">
        Our Project
      </Link>
      <Link to="/team" className="nav-item nav-link fw-lighter">
        The Team
      </Link>
      <Link to="/mentors" className="nav-item nav-link fw-lighter">
        Mentors
      </Link>
    </nav>
  );
};

export default Navbar;
