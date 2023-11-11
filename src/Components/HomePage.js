import React from 'react'
import Banner from './Banner';
import Footer from './Footer';
import Testimonials from './Testimonials';
import Choose from './Choose';
import NavBar from './NavBar';
export default function HomePage() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Testimonials/>
      <Choose/>
      <Footer/>
    </div>
  )
}
