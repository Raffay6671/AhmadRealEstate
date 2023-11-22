import React, { useEffect, useState } from 'react';
import Property from './Property'
import "../Styles/propertyList.css"
import datajson from "../dataa.json"
import Footer from './Footer';
import Filter from './Filter';
import NoResultFound from './NoResultFound';

export default function PropertyList(props) {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

  const [city, setCity] = useState("All");

  useEffect(() => {

    const fetchData = async () => {
      try {
        // const response = 
        const jsonData = datajson;
        await setData(jsonData);
        await setFilteredData(jsonData);
      } catch (error) {
        console.error('Errorr fetching JSON:', error);
      }
    };
    

    fetchData();
//     if(data)
//     setFilteredData(data.filter(
//         (element) =>
//           (city === 'All' || element.address.split(', ').pop() === city) 
//       )
//     );
  }, []);
 
  const elementStyle = {
    marginLeft: '100px',
    marginRight: '100px'
  };

  
     

  useEffect(() => {
        const updateFilteredData = async () => {
                await setFilteredData(data.filter(
                        (element) =>
                          (city === 'All' || element.address.split(', ').pop() === city) 
                      )
                    );

        }
        if(filteredData)
                updateFilteredData();

}, [ city]);

useEffect(() => {

}, [ filteredData]);
  
  

  return (
        <div>   

                <Filter updateCity={setCity}/>
                <p className="propertyListHeading">Properties for {props.type} in {city === "All"?"All Cities": city}</p>





                  <div className='propertyListContainer'>
                    {filteredData && filteredData.length > 0 ? filteredData.map((property) => (
                      (
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
                      ) 
                    )) : <NoResultFound/>}
                  </div>



              <Footer/>
              
              
        </div>
  )
}

PropertyList.defaultProps = {
       type: "Sale"
      };
