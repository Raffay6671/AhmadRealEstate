import React, { Component } from 'react'
import "../Styles/Footer.css"
import quinta from "../Images/QuintaCodeBlack.png"
import insta from "../Images/insta-icon.png"
import facebook from "../Images/facebook-icon.png"
import linkedin from "../Images/linkedin-icon.png"
import { Link } from 'react-router-dom';



export default function Footer() {
  return (
    <div>
         <div className='footer'>
        <div className="text-area">
                <Link to="/" className="footerLogo">
                        <p className='footerName'>ahmadrealestate</p>
                        <p className='footerComm'>.com</p>
                </Link>
                <a  target="_blank" href='https://www.linkedin.com/company/100022422/' className="quinta-block">
                        <p className="developed">
                                Developed by
                        </p>
                        <img className='quinta' src={quinta}/>
                </a>
               
        </div>

        <div className="footerLink">
                <div className="company">
                        <p className='heading'>
                                Company
                        </p>
                        <Link to='/' className='sub-heading'>
                                Contact us
                        </Link>
                        <Link to='/' className='sub-heading'>
                                About us
                        </Link>
                        <Link to='/' className='sub-heading'>
                                Our Projects
                        </Link>
                    
                       

                </div>
                <div className="ser-cov">
                        <div className="company">
                        <p  className='heading'>
                                Services
                        </p>
                        <Link to='/PropertyList' className='sub-heading'>
                                Properties for Sale
                        </Link>
                        <Link to='/PropertyList' className='sub-heading'>
                                Properties for Rent
                        </Link>

                        </div>
                        <div className="company">
                        <p className='heading'>
                                Coverage
                        </p>
                        <Link to='/PropertyList' className='sub-heading'>
                                Islamabad
                        </Link>
                        <Link to='/PropertyList' className='sub-heading'>
                                Rawalpindi
                        </Link>
                        <Link to='/PropertyList' className='sub-heading'>
                                Murree
                        </Link>
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
                                <Link to='/'>
                                        <img href='#' className='icon' src={insta}/>

                                </Link>
                                <Link href='/'>
                                        <img href='#' className='icon' src={facebook}/>

                                </Link>
                                <Link href='/'>
                                        <img href='#' className='icon' src={linkedin}/>

                                </Link>
                                
                        </div>
                        
                </div>

        </div>

      </div>
    </div>
  )
}
