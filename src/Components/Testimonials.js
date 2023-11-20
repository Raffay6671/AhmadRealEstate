import React from 'react'
import testimonial from "../Images/testimonial.png"
import "../Styles/testimonial.css"
import comma from "../Images/comma.png"


export default function Testimonials() {
  return (
    <div>
       <div className='container-test'>
        <img className='test-image' src={testimonial} alt='not loaded'/>
        <div className="text-test">
                <p className='heading2'>What our clients say</p>
                <img className='comma' src={comma} alt='not loaded'/>
                <p className="quotation">
                        
                        "Working with Ahmad Real Estate was a game-changer for us. Their expertise and dedication helped us find our dream home. Highly recommended!"<br></br>
                                                                                                        ~Akbar Bashir
                        

                </p>

        </div>
       
        
        
      </div>
    </div>
  )
}
