import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import PropertyList from './Components/PropertyList';
import NavBar from './Components/NavBar';
import PropertyDetails from './Components/PropertyDetails';
import ScrollToTop from './Components/ScrollToTop';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';



function App() {
  const [category, setCategory] = useState(null);
  const [propertyValues, setPropertyValues] = useState({
    imageUrl: "https://cf2.bstatic.com/xdata/images/hotel/max1280x900/282504684.jpg?k=f84b39b91f4a1890e180a511d68efeeea307c3c00feb98c3d719f80860ec4291&o=&hp=1",
    numBed: 2,
    numToilet: 2,
    size: "5 Marla",
    price: "55000",
    address: "G/11-2, Islamabad",
    uploadDate: "08/10/2023 10:00 AM",
    type: null,
    description: "great ambiance, near the main market",
    condition: "Excellent" ,
    numLounge: 3,
    numStore: 1,
    numLaundary: 4,
    numDrawing: 3,
    numKitchen: 2

  });

  // Function to set state values

  useEffect(() => {
      // console.log("Category changed to ", category);
  }, [ category]);


  return (
    
    <Router>
      <ScrollToTop/>
      <NavBar setCategory={setCategory}/>
      <Routes>
        <Route path="/" element={<HomePage setcategory={setCategory} setPropertyValues={setPropertyValues}/>} />
        <Route path="/PropertyList" element={<PropertyList type={category} setPropertyValues={setPropertyValues}/>} />
        <Route path="/PropertyDetails" element={<PropertyDetails propertyValues={propertyValues} setPropertyValues={setPropertyValues}/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
      </Routes>
      <Footer setCategory={setCategory}/>
    </Router>
  );
}

export default App;
