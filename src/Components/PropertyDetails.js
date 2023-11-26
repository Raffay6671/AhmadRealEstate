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
          {props.propertyValues.size} House For {props.propertyValues.category} In {props.propertyValues.address}
        </div>

        <div className="propertyDetailsContacts">
        <button  type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg> Call</button>
        <a target="_blank"  rel="noopener noreferrer" href='https://wa.me/+923340738200' type="button" className="btn btn-success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
</svg> </a>
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
                      <div className="propertyDetailsIconValuediv">
                         <p className='propertyDetailsIconValue'>Bedroom: </p>
                      <p className="propertyDetailValueText">{props.propertyValues.numBed}</p>

                      </div>
                     
              </div>

              <div className="propertyDetailsIconValueContainer      ">
                      <img src={toilet} alt='not loaded' className='propertyDetailsIcon'/>
                      <div className="propertyDetailsIconValuediv">
                      <p className='propertyDetailsIconValue'>Toilet: </p>
                      <p className="propertyDetailValueText">{props.propertyValues.numToilet}</p>

                      </div>
              </div>

              <div className="propertyDetailsIconValueContainer      ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tv" viewBox="0 0 16 16">
                  <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2"/>
                </svg>
                      <div className="propertyDetailsIconValuediv">
                      <p className='propertyDetailsIconValue'>TV Lounge: </p>
                      <p className="propertyDetailValueText">{props.propertyValues.numLounge}</p>

                      </div>
              </div>

              <div className="propertyDetailsIconValueContainer      ">
                      <img src={toilet} alt='not loaded' className='propertyDetailsIcon'/>
                      <div className="propertyDetailsIconValuediv">
                      <p className='propertyDetailsIconValue'>Store Room: </p>
                      <p className="propertyDetailValueText">{props.propertyValues.numStore}</p>

                      </div>
              </div>

              <div className="propertyDetailsIconValueContainer      ">
                      <img src={toilet} alt='not loaded' className='propertyDetailsIcon'/>
                      <div className="propertyDetailsIconValuediv">
                      <p className='propertyDetailsIconValue'>Laundary Room: </p>
                      <p className="propertyDetailValueText">{props.propertyValues.numLaundary}</p>

                      </div>
              </div>
              <div className="propertyDetailsIconValueContainer      ">
                      <img src={toilet} alt='not loaded' className='propertyDetailsIcon'/>
                      <div className="propertyDetailsIconValuediv">
                      <p className='propertyDetailsIconValue'>Drawing: </p>
                      <p className="propertyDetailValueText">{props.propertyValues.numDrawing}</p>

                      </div>
              </div>
              <div className="propertyDetailsIconValueContainer      ">
                      <img src={toilet} alt='not loaded' className='propertyDetailsIcon'/>
                      <div className="propertyDetailsIconValuediv">
                      <p className='propertyDetailsIconValue'>Kitchen: </p>
                      <p className="propertyDetailValueText">{props.propertyValues.numKitchen}</p>

                      </div>
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
