import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/NavBar.css"

export default function NavBar (props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-lignt">
      <div className="container-fluid">
      <Link to="/" className="logo">
          <p className='name'>ahmadrealestate</p>
          <p className='com'>.com</p>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/PropertyList" onClick={() => props.setCategory("Sale")}>For Sale</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/PropertyList" onClick={() => props.setCategory("Rent")}>For Rent</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/">Our Projects</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/">About Us</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/">Contact us</Link>
                </li>
        </ul>
        </div>
      </div>
    </nav>
  );
};

