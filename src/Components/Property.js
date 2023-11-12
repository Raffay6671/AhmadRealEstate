import React from 'react'
import '../Styles/property.css'
import bed from '../Images/bed-icon.png'
import house from '../Images/house-icon.png'
import toilet from '../Images/toilet-icon.png'

export default function Property(props) {

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
        <div className="cardd" style={{ width: '14rem' }}>
        <img className='propertyImage' src={props.imageUrl} alt="Card image cap" />
                <div className="card-bodyy">
                        <div className="propertyIconValueList">
    
                                <div className="propertyIconValueContainer      ">
                                        <img src={bed} className='propertyIcon'/>
                                        <p className='prpoertyIconValue'> {props.numBed}</p>
                                </div>

                                <div className="propertyIconValueContainer      ">
                                        <img src={toilet} className='propertyIcon'/>
                                        <p className='prpoertyIconValue'> {props.numToilet}</p>
                                </div>

                                <div className="propertyIconValueContainer      ">
                                        <img src={house} className='propertyIcon'/>
                                        <p className='propertyIconValue'> {props.size}</p>
                                </div>
                        </div>
                       
                      
                        <p className="card-text">{props.price} PKR</p>       
                        <p className="propertyAddress">{props.address}</p>       
                        <p className="propertyDate">{formatUploadTime(props.uploadDate)}</p>       
                </div>
        </div>
    </div>
  )
}

Property.defaultProps = {
        imageUrl: "https://cf2.bstatic.com/xdata/images/hotel/max1280x900/282504684.jpg?k=f84b39b91f4a1890e180a511d68efeeea307c3c00feb98c3d719f80860ec4291&o=&hp=1",
        numBed: 2,
        numToilet: 2,
        size: "5 Marla",
        price: "55000",
        address: "G/11-2, Islamabad",
        uploadDate: "08/10/2023 10:00 AM"
      };