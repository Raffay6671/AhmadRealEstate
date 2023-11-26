import React, { useEffect, useState } from 'react';
import Property from './Property'
import "../Styles/propertyHorizontalList.css"
import datajson from "../dataa.json"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function SimilarProperties(props) {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);



  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonData = datajson;
        await setData(jsonData);
      } catch (error) {
        console.error('Error fetching JSON:', error);
      }
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
            <p className="propertyHorizontalListHeading">Similar Properties Nearby</p>


            <Splide aria-label="My Favorite Images"  style={splideStyles} options={ {breakpoints: {
  640: {
    perPage: 1,
  },
},
perPage: 4,
} }>

              {filteredData ? filteredData.map((property) => (
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

              </Splide>


    </div>
)
}

SimilarProperties.defaultProps = {
       type: "Sale",
       cityNearBy: null
      };
