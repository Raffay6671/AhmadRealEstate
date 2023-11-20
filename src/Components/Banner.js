import React, { Component, useState } from 'react'
import img from "../Images/background.png"
import '../Styles/Banner.css'



export default function Banner(props) {



  return (
    <div>
       <div className='bannerContainer'>
        <img className='image' src={img} alt="not loaded"/>
        <div className="overlay">
                <p>The most trusted online real estate platform</p>

       
        </div>
      </div>
    </div>
  )
}

