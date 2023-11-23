import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/NavBar.css";

export default function NavBar(props) {
  const closeNavbar = () => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    if (navbarToggler && navbarCollapse) {
      navbarToggler.classList.add("collapsed");
      navbarCollapse.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
              <Link className="nav-link active" aria-current="page" to="/" onClick={closeNavbar}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/PropertyList" onClick={() => { props.setCategory("Sale"); closeNavbar(); }}>For Sale</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/PropertyList" onClick={() => { props.setCategory("Rent"); closeNavbar(); }}>For Rent</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeNavbar}>Our Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeNavbar}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeNavbar}>Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
