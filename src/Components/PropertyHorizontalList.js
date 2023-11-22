import React, { useEffect, useState } from 'react';
import Property from './Property';
import "../Styles/propertyHorizontalList.css";
import datajson from "../dataa.json";
import leftArrow from "../Images/leftArrow.png";
import { Link } from 'react-router-dom';
import rightArrow from "../Images/rightArrow.png";

const PropertyHorizontalList = (props) => {
  const [data, setData] = useState(null);
  const [displayedProperties, setDisplayedProperties] = useState(4);
  const [isClicked, setIsClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleRightClick = () => {
    setIsClicked(true);
    if (displayedProperties < data[data.length - 1].elementNumber) {
      setDisplayedProperties(displayedProperties + 1);
    }
  };

  const handleLeftClick = () => {
    setIsClicked(true);
    if (displayedProperties > 4) {
      setDisplayedProperties(displayedProperties - 1);
    }
  };

  const elementStyle = {
    marginLeft: isMobile ? '10px' : '100px',
    marginRight: isMobile ? '10px' : '100px'
  };

  return (
    <div className='propertyHorizontalListWholeContainer'>
      <p className="propertyHorizontalListHeading">Properties for {props.type}</p>

      <div className="listWithArrows">
        <button className={`propertyHorizontalListArrowButton ${isClicked ? 'active' : ''}`} onClick={() => handleLeftClick()}>
          <img src={leftArrow} alt="Left Arrow" />
        </button>
        <div className='propertyHorizontalListContainer'>
          {data ? data.map((property) => (
            property.elementNumber <= displayedProperties && property.elementNumber > displayedProperties - (isMobile ? 1 : 4) ? (
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
        <button className={`propertyHorizontalListArrowButton ${isClicked ? 'active' : ''}`} onClick={() => handleRightClick()}>
          <img src={rightArrow} alt="Right Arrow" />
        </button>
      </div>

      <Link to='/PropertyList' className='propertyLink' onClick={() => { props.setCategory(props.type) }}>
        View all Properties for {props.type}
      </Link>

      {props.setCategory(props.type)}
    </div>
  );
};

PropertyHorizontalList.defaultProps = {
  type: "sale"
};

export default PropertyHorizontalList;
