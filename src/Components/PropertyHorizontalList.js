import React, { useEffect, useState } from 'react';
import Property from './Property'
import "../Styles/propertyHorizontalList.css"
import datajson from "../dataa.json"

export default function PropertyHorizontalList(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = 
        const jsonData = datajson;
        await setData(jsonData);
        console.log(data);  
        // console.log(jsonData);
      } catch (error) {
        console.error('Errorr fetching JSON:', error);
      }
    };

    fetchData();
  }, []);
  return (
        <div>   
                <p className="propertyListHeading">Properties for {props.type}</p>
            
                
              

                <div className='propertyListContainer'>
                  <Property/>
                  <Property/>
                  <Property/>
                  <Property/>
                </div>
        </div>
  )
}

PropertyHorizontalList.defaultProps = {
       type: "sale"
      };
