import React, { useEffect, useState } from 'react';
import Property from './Property'
import "../Styles/propertyHorizontalList.css"
import datajson from "../dataa.json"
import leftArrow from "../Images/leftArrow.png"
import rightArrow from "../Images/rightArrow.png"

export default function SimilarProperties(props) {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
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
        const jsonData = datajson;
        await setData(jsonData);
      } catch (error) {
        console.error('Error fetching JSON:', error);
      }
      setIsClicked(false);
    };
  
    fetchData();
  }, []); // Empty dependency array to run this effect only once when the component mounts
  


  function assignElementNumbers(filteredData) {
        if (!filteredData) return [];
      
        return filteredData.map((property, index) => ({
          ...property,
          elementNumber: index + 1,
        }));
      }
      
  useEffect(() => {
        const updateFilteredData = async () => {
                const updatedData = assignElementNumbers(
                  data.filter((element) => element.address.split(', ').pop() === props.cityNearBy)
                );
                await setFilteredData(updatedData);
              };
              if (data)
              updateFilteredData();
            
  }, [data,  props.cityNearBy]);
  function handleRightClick() {
    setIsClicked(true);
    setDisplayedProperties((prevDisplayedProperties) => {
      if (prevDisplayedProperties < filteredData[filteredData.length - 1].elementNumber) {
        return prevDisplayedProperties + 1;
      }
      return prevDisplayedProperties;
    });
  }
  
  function handleLeftClick() {
    setIsClicked(true);
    setDisplayedProperties((prevDisplayedProperties) => {
      if (prevDisplayedProperties > displayLimit) {
        return prevDisplayedProperties - 1;
      }
      return prevDisplayedProperties;
    });
  }

  const elementStyle = {
    // marginLeft: '100px',
    // marginRight: '100px'
  };


 
  
  

  return (
        <div className='propertyHorizontalListWholeContainer'>   
                <p className="propertyHorizontalListHeading">Similar properties nearby</p>

                <div className="listWithArrows">

                <button   className={`propertyHorizontalListArrowButton ${isClicked ? 'active' : ''}`} onClick={() => handleLeftClick()}>
                    <img className='propertyHorizontalListArrowImage' src={leftArrow} alt="Left Arrow" />
                  </button>
                  <div className='propertyHorizontalListContainer'>
                        {(filteredData ? filteredData.map((property) => (
                      ((property.elementNumber <= displayedProperties) && (property.elementNumber > (displayedProperties - displayLimit))) ? (
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
                    )) : <div>Properties not rendered</div>)}
                     


                  </div>

                  <button  className={`propertyHorizontalListArrowButton ${isClicked ? 'active' : ''}`} onClick={() => handleRightClick()}>
                    <img className='propertyHorizontalListArrowImage' src={rightArrow} alt="Right Arrow" />
                  </button>
                </div>

              
        </div>
  )
}

SimilarProperties.defaultProps = {
       type: "Sale",
       cityNearBy: null
      };
