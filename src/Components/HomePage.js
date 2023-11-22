import React from 'react'
import Banner from './Banner';
import Footer from './Footer';
import Testimonials from './Testimonials';
import Choose from './Choose';
import PropertyHorizontalList from './PropertyHorizontalList';
export default function HomePage(props) {
  return (
    <div>
      
      <Banner/>
      <PropertyHorizontalList type="Sale" setCategory={props.setcategory} />

      <PropertyHorizontalList type="Rent"  setCategory={props.setcategory}/>
      <Testimonials/>
      <Choose/>
      <Footer/>
    </div>
  )
}
