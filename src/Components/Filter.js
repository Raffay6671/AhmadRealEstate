import React, { useState } from 'react';
import "../Styles/Filter.css"


const cityOptions = ['All', 'Islamabad', 'Murree', 'Rawalpindi'];

export default function Filter(props) {
  const [selectCity, setSelectCity] = useState('All');

  const handleCityClick = (index) => {
    const updatedName = cityOptions[index];
    setSelectCity(updatedName);
    props.updateCity(updatedName);
    console.log("City Changed! calling from filter")
  };




      

  return (
    <div>
      <div className="filter-container">
      <div className="button-container">
          {cityOptions.map((element, index) => (
            <button
              className={cityOptions[index] === selectCity ? 'selected-subject-button' : 'subject-button'}
              onClick={() => handleCityClick(index)}
              key={index}
            >
              {cityOptions[index]}
            </button>
          ))}
        </div>
       
       
      </div>
    </div>
  );
}
