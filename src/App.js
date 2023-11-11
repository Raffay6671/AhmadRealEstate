import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage';
import Property from './Components/Property';
import PropertyHorizontalList from './Components/PropertyHorizontalList';

function App() {
  return (
    <div className="App">
     {/* <HomePage/> */}
     
     <PropertyHorizontalList/>

    </div>
  );
}

export default App;
