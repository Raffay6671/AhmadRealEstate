import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import PropertyList from './Components/PropertyList';
import NavBar from './Components/NavBar';

function App() {
  const [category, setCategory] = useState(null);
  useEffect(() => {
      console.log("category CHanged")
  }, [ category]);
    

  return (
    
    <Router>
      <NavBar setCategory={setCategory}/>
      <Routes>
        <Route path="/" element={<HomePage setcategory={setCategory}/>} />
        <Route path="/PropertyList" element={<PropertyList type={category}/>} />
      </Routes>
    </Router>
  );
}

export default App;
