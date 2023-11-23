import React from 'react'
import Property from "../Components/Property"

export default function PropertyDetails(props) {
  return (
    <div>
        <Property
            key={props.elementNumber}
            elementNumber={props.elementNumber}
            imageUrl={props.imageUrl}
            numBed={props.numBed}
            numToilet={props.numToilet}
            size={props.size}
            price={props.price}
            address={props.address}
            uploadDate={props.uploadDate}
            style={props.elementStyle}
          />
      
    </div>
  )
}
