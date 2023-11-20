import React, { useEffect, useState } from 'react';
import Property from './Property'
import "../Styles/propertyHorizontalList.css"
import datajson from "../dataa.json"
import leftArrow from "../Images/leftArrow.png"
import rightArrow from "../Images/rightArrow.png"

export default function PropertyHorizontalList(props) {
  const [data, setData] = useState(null);
  const [displayedProperties, setDisplayedProperties]= useState(4)
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = 
        const jsonData = datajson;
        await setData(jsonData);
      } catch (error) {
        console.error('Errorr fetching JSON:', error);

      }
      setIsClicked(false)
    };

    fetchData();
  }, []);
  function handleRightClick()
  {
    setIsClicked(true);
    if(displayedProperties < data[data.length - 1].elementNumber)
      setDisplayedProperties(displayedProperties + 1)
  }

  function handleLeftClick()
  { 
    setIsClicked(true);
    if(displayedProperties > 4)
      setDisplayedProperties(displayedProperties - 1)
  }

  const elementStyle = {
    marginLeft: '100px',
    marginRight: '100px'
  };

 
  
  

  return (
        <div>   
                <p className="propertyHorizontalListHeading">Properties for {props.type}</p>




                <div className="listWithArrows">

                <button   className={`propertyHorizontalListArrowButton ${isClicked ? 'active' : ''}`} onClick={() => handleLeftClick()}>
                    <img src={leftArrow} alt="Left Arrow" />
                  </button>
                  <div className='propertyHorizontalListContainer'>
                    {data ? data.map((property) => (
                      property.elementNumber <= displayedProperties && property.elementNumber > displayedProperties - 4 ? (
                        <Property
                          key={property.elementNumber}
                          elementNumber={property.elementNumber}
                          imageUrl={property.imageUrl}
                          numBed={property.numBed}
                          numToilet={property.numToilet}
                          size={property.size}
                          price={property.price}
                          address={property.address}
                          uploadDate={property.uploadDate}
                          style={elementStyle}
                        />
                      ) : null
                    )) : <div>Properties not rendered</div>}
                  </div>

                  <button  className={`propertyHorizontalListArrowButton ${isClicked ? 'active' : ''}`} onClick={() => handleRightClick()}>
                    <img src={rightArrow} alt="Right Arrow" />
                  </button>
                </div>


                <a href='#' className='propertyLink'>View all Properties for {props.type}</a>

              
              
        </div>
  )
}

PropertyHorizontalList.defaultProps = {
       type: "sale"
      };
