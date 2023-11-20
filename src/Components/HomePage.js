import React from 'react'
import Banner from './Banner';
import Footer from './Footer';
import Testimonials from './Testimonials';
import Choose from './Choose';
import NavBar from './NavBar';
import PropertyHorizontalList from './PropertyHorizontalList';
export default function HomePage() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <PropertyHorizontalList type="sale"/>

      <PropertyHorizontalList type="rent"/>
      <Testimonials/>
      <Choose/>
      <Footer/>
    </div>
  )
}
