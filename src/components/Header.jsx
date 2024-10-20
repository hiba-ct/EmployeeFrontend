import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-success navbar-light border-bottom box-shadow py-3 mb-3">
        <div className="container">
          <Link to="/" className="navbar-brand " style={{ textDecoration: 'none' }}>
            Employee App
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link text-dark" style={{ textDecoration: 'none' }}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/employees" className="nav-link text-dark" style={{ textDecoration: 'none' }}>
                  Employees
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
