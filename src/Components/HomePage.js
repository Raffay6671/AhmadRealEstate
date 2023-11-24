import React from 'react';
import Banner from './Banner';
import Testimonials from './Testimonials';
import Choose from './Choose';
import PropertyHorizontalList from './PropertyHorizontalList';
export default function HomePage(props) {
  
  return (
    <div>
      
      <Banner/>
      <PropertyHorizontalList type="Sale" setCategory={props.setcategory}  setPropertyValues={props.setPropertyValues} />

      <PropertyHorizontalList type="Rent"  setCategory={props.setcategory}  setPropertyValues={props.setPropertyValues}/>
      <Testimonials/>
      <Choose/>
    </div>
  )
}
