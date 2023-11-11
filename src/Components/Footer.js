import React, { Component } from 'react'
import "../Styles/Footer.css"
import quinta from "../Images/QuintaCodeBlack.png"
import insta from "../Images/insta-icon.png"
import facebook from "../Images/facebook-icon.png"
import linkedin from "../Images/linkedin-icon.png"



export default function Footer() {
  return (
    <div>
         <div className='footer'>
        <div className="text-area">
                <a href="#" className="logo">
                        <p className='name'>ahmadrealestate</p>
                        <p className='comm'>.com</p>
                </a>
                <a  target="_blank" href='https://www.linkedin.com/company/100022422/' className="quinta-block">
                        <p className="developed">
                                Developed by
                        </p>
                        <img className='quinta' src={quinta}/>
                </a>
               
        </div>

        <div className="link">
                <div className="company">
                        <a href='#' className='heading'>
                                Company
                        </a>
                        <a href='#' className='sub-heading'>
                                Contact us
                        </a>
                        <a href='#' className='sub-heading'>
                                About us
                        </a>
                        <a href='#' className='sub-heading'>
                                Our Projects
                        </a>
                    
                       

                </div>
                <div className="ser-cov">
                        <div className="company">
                        <a href='#' className='heading'>
                                Services
                        </a>
                        <a href='#' className='sub-heading'>
                                Properties for Sale
                        </a>
                        <a href='#' className='sub-heading'>
                                Properties for Rent
                        </a>

                        </div>
                        <div className="company">
                        <a href='#' className='heading'>
                                Coverage
                        </a>
                        <a href='#' className='sub-heading'>
                                Islamabad
                        </a>
                        <a href='#' className='sub-heading'>
                                Rawalpindi
                        </a>
                        <a href='#' className='sub-heading'>
                                Murree
                        </a>
                        </div>
                </div>
                <div className="company">
                <p className='heading'>
                                Our Office
                        </p >
                        <p className='sub-heading'>
                        Shop no 10, Blue Area, <br></br> Islamabad Capital Territory,<br></br> Pakistan
                        </p>
                        <p className='sub-heading'>
                        Phone: 03357878678
                        </p>
                        <p className='sub-heading'>
                        ahmadrealestate@gmail.com
                        </p>

                </div>
                <div className="company">
                        <p className='heading'>
                                Follow us
                        </p>
                        <div className="social">
                                <a href='#'>
                                        <img href='#' className='icon' src={insta}/>

                                </a>
                                <a  href='#'>
                                        <img href='#' className='icon' src={facebook}/>

                                </a>
                                <a  href='#'>
                                        <img href='#' className='icon' src={linkedin}/>

                                </a>
                                
                        </div>
                        
                </div>

        </div>

      </div>
    </div>
  )
}
