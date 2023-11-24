import React, { useEffect } from 'react'
import "../Styles/propertyDetails.css"
import image1 from "../Images/testimonial.png"
import bed from '../Images/bed-icon.png'
import toilet from '../Images/toilet-icon.png'
import SimilarProperties from './SimilarProperties';







export default function PropertyDetails(props) {

  useEffect(() => {
    // Assuming props.propertyValues is an object with the mentioned properties
    window.scrollTo(0, 0);
    
  }, [props]);


  useEffect(() => {
  });


  function formatUploadTime(uploadDate) {
    const [day, month, year] = uploadDate.split("/");
    const uploadDateTime = new Date(`${month}/${day}/${year}`);
    const currentTime = new Date();
    const timeDiffMs = currentTime - uploadDateTime;
    const timeDiffSeconds = Math.floor(timeDiffMs / 1000);
    const timeDiffMinutes = Math.floor(timeDiffSeconds / 60);
    const timeDiffHours = Math.floor(timeDiffMinutes / 60);
    const timeDiffDays = Math.floor(timeDiffHours / 24);
    const timeDiffMonths = Math.floor(timeDiffDays / 30);
  
    if (timeDiffMonths > 0) {
      return `Added ${timeDiffMonths} Month${timeDiffMonths > 1 ? 's' : ''} Ago`;
    } else if (timeDiffDays > 0) {
      return `Added ${timeDiffDays} Day${timeDiffDays > 1 ? 's' : ''} Ago`;
    } else if (timeDiffHours > 0) {
      return `Added ${timeDiffHours} Hour${timeDiffHours > 1 ? 's' : ''} Ago`;
    } else if (timeDiffMinutes > 0) {
      return `Added ${timeDiffMinutes} Minute${timeDiffMinutes > 1 ? 's' : ''} Ago`;
    } else {
      return `Added ${timeDiffSeconds} Second${timeDiffSeconds > 1 ? 's' : ''} Ago`;
    }
  }

  return (
    <div>
      <div className="propertyDetailsPropertyInfo">
      


        <div id="carouselExampleIndicators" className="carousel slide ">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={image1} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={image1} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={image1} className="d-block w-100" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="propertyDetailsHeadingWhatsapp">
        <div className='propertyDetailsHouseHeading'> 
          {props.propertyValues.size} House On {props.propertyValues.category} In {props.propertyValues.address}
        </div>

        <div className="propertyDetailsContacts">
        <button  type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Call</button>
        <a target="_blank"  rel="noopener noreferrer" href='https://wa.me/+923340738200' type="button" className="btn btn-success">Whatsapp</a>
      </div>
      </div>




        
        <div className="propertyDetailsPriceIconContainer">
            <div className="propertyDetailsPriceAddDate">
              <div className="propertyDetailsPriceContainer">
                <p className='propertyDetailsPKR' >
                  PKR 
                </p>
                <p className='propertyDetailsPriceNumber'>
                  {props.propertyValues.price}
                </p>
                
              </div>
            <p className="propertyDetailsDate">{formatUploadTime(props.propertyValues.uploadDate)}</p>    
          </div>
        
        
            <div className="propertyDetailsIconValueList">
              
              <div className="propertyDetailsIconValueContainer      ">
                      <img src={bed} alt='not loaded' className='propertyDetailsIcon'/>
                      <p className='propertyDetailsIconValue'>Bedroom: {props.propertyValues.numBed}</p>
              </div>

              <div className="propertyDetailsIconValueContainer      ">
                      <img src={toilet} alt='not loaded' className='propertyDetailsIcon'/>
                      <p className='propertyDetailsIconValue'>Toilet: {props.propertyValues.numToilet}</p>
              </div>

              <div className="propertyDetailsIconValueContainer      ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tv" viewBox="0 0 16 16">
                  <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2"/>
                </svg>
                      <p className='propertyDetailsIconValue'>TV Lounge: {props.propertyValues.numLounge}</p>
              </div>

              <div className="propertyDetailsIconValueContainer      ">
                      <img src={toilet} alt='not loaded' className='propertyDetailsIcon'/>
                      <p className='propertyDetailsIconValue'>Store Room: {props.propertyValues.numStore}</p>
              </div>

              <div className="propertyDetailsIconValueContainer      ">
                      <img src={toilet} alt='not loaded' className='propertyDetailsIcon'/>
                      <p className='propertyDetailsIconValue'>Laundary Room: {props.propertyValues.numLaundary}</p>
              </div>
              <div className="propertyDetailsIconValueContainer      ">
                      <img src={toilet} alt='not loaded' className='propertyDetailsIcon'/>
                      <p className='propertyDetailsIconValue'>Drawing Room: {props.propertyValues.numDrawing}</p>
              </div>
              <div className="propertyDetailsIconValueContainer      ">
                      <img src={toilet} alt='not loaded' className='propertyDetailsIcon'/>
                      <p className='propertyDetailsIconValue'>Kitchen: {props.propertyValues.numKitchen}</p>
              </div>

            
            </div>
        </div>
      

        

    
      <div className="propertyDetailsDescriptionConditionContainer">
        
        <div className="propertyDetailsDescriptionContainer">
        <p className='propertyDetailsText'>
          Description
        </p>
        {props.propertyValues.description}

        </div>
        <p> </p>
        <div className="propertyDetailsDescriptionContainer">
        <p className='propertyDetailsText'>
          Condition
        </p>
        {props.propertyValues.condition}

        </div>
      </div>

    
     
      
      
      </div>
      <SimilarProperties setPropertyValues={props.setPropertyValues} cityNearBy={props.propertyValues.address.split(', ').pop()} type={props.propertyValues.category}/>  

      {/* {console.log(props.propertyValues.address.split(', ').pop())} */}
       
      

       <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Call</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      Please dial the number to contact
      </div>
      <div className="modal-body">
      +923340738200
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>
      
    </div>
  )
}
