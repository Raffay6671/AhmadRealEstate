import React, { Component } from 'react'
import "../Styles/NavBar.css"

export default class NavBar extends Component {
  render() {
    return (
        <nav class="navbar navbar-expand-lg ">
                <a href="#" className="logo">
                        <p className='name'>ahmadrealestate</p>
                        <p className='com'>.com</p>
                </a>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                                <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                                <a class="nav-item nav-link" href="#">For Sale</a>
                                <a class="nav-item nav-link" href="#">For Rent</a>
                                <a class="nav-item nav-link" href="#">Our Projects</a>
                                <a class="nav-item nav-link" href="#">About Us</a>
                                <a class="nav-item nav-link" href="#">Contact us</a>
                                
                        </div>
                </div>
        </nav>
    )
  }
}
