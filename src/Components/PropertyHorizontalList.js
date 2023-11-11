import React from 'react'
import Property from './Property'
import "../Styles/propertyHorizontalList.css"

export default function PropertyHorizontalList(props) {
  return (
        <div>   
                <h className="propertyListHeading">Properties for {props.type}</h>
            
                
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
