import React  from 'react'
import "../Styles/Footer.css"
import quinta from "../Images/QuintaCodeBlack.png"
import insta from "../Images/insta-icon.png"
import facebook from "../Images/facebook-icon.png"
import linkedin from "../Images/linkedin-icon.png"
import { Link } from 'react-router-dom';



export default function Footer(props) {
  return (
    <div>
         <div className='footer'>
        <div className="text-area">
                <Link to="/" className="footerLogo">
                        <p className='footerName'>ahmedrealestate</p>
                        <p className='footerComm'>.com</p>
                </Link>
                <a   rel="noopener noreferrer" target="_blank" href='https://www.linkedin.com/company/100022422/' className="quinta-block">
                        <p className="developed">
                                Developed by
                        </p>
                        <img className='quinta' alt='not loaded' src={quinta}/>
                </a>
               
        </div>

        <div className="footerLink">
                <div className="company">
                        <p className='heading'>
                                Company
                        </p>
                        <Link to='/AboutUs' className='sub-heading'>
                                About us
                        </Link>
                        <Link to='/PropertyList' className='sub-heading'>
                                Properties for Sale
                        </Link>
                        <Link to='/PropertyList' className='sub-heading'onClick={() => { props.setCategory("Rent") }}>
                                Properties for Rent
                        </Link>
                    
                       

                </div>
                <div className="ser-cov">
                        <div className="company">

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
                        <p className='sub-heading2'>
                        Shop no 10, Blue Area, <br></br> Islamabad Capital Territory,<br></br> Pakistan
                        </p>
                        <p className='sub-heading2'>
                        Phone: 03357878678
                        </p>
                        <p className='sub-heading2'>
                        ahmedrealestate@gmail.com
                        </p>

                </div>
                <div className="company">
                        <p className='heading'>
                                Follow us
                        </p>
                        <div className="social">
                                <Link to='/'>
                                        <img  className='icon' alt='not loaded' src={insta}/>

                                </Link>
                                <Link href='/'>
                                        <img  className='icon' alt='not loaded' src={facebook}/>

                                </Link>
                                <Link href='/'>
                                        <img  className='icon' alt='not loaded' src={linkedin}/>

                                </Link>
                                
                        </div>
                        
                </div>

        </div>

      </div>
    </div>
  )
}
