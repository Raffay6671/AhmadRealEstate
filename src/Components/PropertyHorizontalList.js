import React, { useEffect, useState } from 'react';
import Property from './Property'
import "../Styles/propertyHorizontalList.css"
import datajson from "../dataa.json"
import leftArrow from "../Images/leftArrow.png"
import {Link } from 'react-router-dom';
import rightArrow from "../Images/rightArrow.png"

export default function PropertyHorizontalList(props) {
  const [data, setData] = useState(null);
  const [displayLimit, setDisplayLimit] = useState(4);
  const [displayedProperties, setDisplayedProperties]= useState(4)
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
     if(screenWidth < 768)
     {
      setDisplayLimit(1);
      setDisplayedProperties(1);
     }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    if(displayedProperties > displayLimit)
      setDisplayedProperties(displayedProperties - 1)
  }

  const elementStyle = {
    // marginLeft: '100px',
    // marginRight: '100px'
  };


  return (
        <div className='propertyHorizontalListWholeContainer'>   
                <p className="propertyHorizontalListHeading">Properties for {props.type}</p>


                <div className="listWithArrows">

                <button   className={`propertyHorizontalListArrowButton ${isClicked ? 'active' : ''}`} onClick={() => handleLeftClick()}>
                    <img className='propertyHorizontalListArrowImage' src={leftArrow} alt="Left Arrow" />
                  </button>
                  <div className='propertyHorizontalListContainer'>
                    {data ? data.map((property) => (
                      property.elementNumber <= displayedProperties && property.elementNumber > displayedProperties - displayLimit ? (
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
                          setPropertyValues={props.setPropertyValues}
                          category={props.type}
                        />
                      ) : null
                    )) : <div>Properties not rendered</div>}
                  </div>

                  <button  className={`propertyHorizontalListArrowButton ${isClicked ? 'active' : ''}`} onClick={() => handleRightClick()}>
                    <img className='propertyHorizontalListArrowImage' src={rightArrow} alt="Right Arrow" />
                  </button>
                </div>


                <Link to='/PropertyList' className='propertyLink' onClick={()=>{props.setCategory(props.type)}}>View all Properties for {props.type}</Link>

              {/* {props.setCategory(props.type)} */}
              
        </div>
  )
}

PropertyHorizontalList.defaultProps = {
       type: "Sale"
      };
