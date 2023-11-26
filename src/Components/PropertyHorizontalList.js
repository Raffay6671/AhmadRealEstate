import React, { useEffect, useState } from 'react';
import Property from './Property'
import "../Styles/propertyHorizontalList.css"
import datajson from "../dataa.json"
import {Link } from 'react-router-dom';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function PropertyHorizontalList(props) {
  const [data, setData] = useState(null);

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = 
        const jsonData = datajson;
        await setData(jsonData);
      } catch (error) {
        console.error('Errorr fetching JSON:', error);

      }
    };

    fetchData();
  }, []);


  const elementStyle = {
    // marginLeft: '100px',
    // marginRight: '100px'
  };  

  const slideStyles = {
    width: '10% ', 
    marginRight: '10px !important'
  };

  const splideStyles = {
    maxWidth: '10% !important', 
  };
  


  return (
        <div className='propertyHorizontalListWholeContainer'>   
                <p className="propertyHorizontalListHeading">Properties for {props.type}</p>


          <Splide hasTrack={ false } aria-label="My Favorite Images"  style={splideStyles} options={ {breakpoints: {640: {perPage: 1,},},perPage: 4,} }>
            <SplideTrack>

              {data ? data.map((property) => (
                    <SplideSlide style={slideStyles} key={property.elementNumber}>
                    <Property
                      
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
                    </SplideSlide>
                  ) 
                ) : <div>Properties not rendered</div>}

                </SplideTrack>


            </Splide>


                <Link to='/PropertyList' className='propertyLink' onClick={()=>{props.setCategory(props.type)}}>View all Properties for {props.type}</Link>

              
        </div>
  )
}

PropertyHorizontalList.defaultProps = {
       type: "Sale"
      };
