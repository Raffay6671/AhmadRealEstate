import React, { Component } from 'react'
import "../Styles/choose.css"
import customer from "../Images/customer-icon.png"
import experience from "../Images/experience-icon.png"
import profession from "../Images/prof-icon.png"



export default function Choose() {
  return (
    <div>
      <div className='chooseContainer'>
        <p className='chooseText'>Why choose us?</p>
        <div className="chooseReasonContainer">
                <div className="chooseReason">
                        <img className='chooseReasonIcon' src={experience}/>
                        <p className='chooseReasonHeading'>Experience</p>
                        <p className='chooseReasonText'>With years of experience                in the real estate industry, our team has an  in-depth understanding of the local market, trends, and    opportunities.</p>
                        
                </div>
                <div className="chooseReason">
                        <img className='chooseReasonIcon' src={profession}/>
                        <p className='chooseReasonHeading'>Professionalism</p>
                        <p className='chooseReasonText'>We approach each and every transaction with the highest level of professionalism while ensuring transparency, integrity, and fairness.</p>
                        
                </div>

                <div className="chooseReason">
                        <img className='chooseReasonIcon' src={customer}/>
                        <p className='chooseReasonHeading'> Customer-Centric</p>
                        <p className='chooseReasonText'>Your needs and preferences are at the forefront of every decision we make. We're here to guide and support you through every step of the real estate journey.</p>
                        
                </div>

        </div>
       
        
      </div>
    </div>
  )
}
