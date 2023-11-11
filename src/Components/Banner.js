import React, { Component } from 'react'
import img from "../Images/background.png"
import '../Styles/Banner.css'



export default function Banner() {
  return (
    <div>
       <div className='container'>
        <img className='image' src={img}/>
        <div className="overlay">
                <p>The most trusted online real estate platform</p>
        </div>
      </div>
    </div>
  )
}

