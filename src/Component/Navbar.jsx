import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Navbar.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/assets/images/mascot-transformed.png" alt="Logo" style={{ height: '100px' }} /> {/* Adjust the height to your preference */}
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          onClick={handleToggle}
        >
          {isToggled ? <i className="icon fa-regular fa-x"></i> : <span className="navbar-toggler-icon"></span>}
        </button>
        <div className={`nav-links collapse navbar-collapse ${isToggled ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setIsToggled(false)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/program" onClick={() => setIsToggled(false)}>Program</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/service" onClick={() => setIsToggled(false)}>Service</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={() => setIsToggled(false)}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/community" onClick={() => setIsToggled(false)}>Community</Link>
            </li>
          </ul>
          <Link to="/login" className="btn" onClick={() => setIsToggled(false)}>
            Join Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
