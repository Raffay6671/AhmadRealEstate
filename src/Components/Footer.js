import React, { Component } from 'react'
import "../Styles/Footer.css"
import quinta from "../Images/QuintaCodeBlack.png"

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className="text-area">
                <a href="#" className="logo">
                        <p className='name'>ahmadrealestate</p>
                        <p className='com'>.com</p>
                </a>
                <img className='quinta' src={quinta}/>
        </div>

      </div>
    )
  }
}
