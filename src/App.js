import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Admin from './Components/Admin/Admin';
import AdminLogin from './Components/Admin/AdminLogin';


function App() {
  return (
    <div className="App">
      {/* <NavBar/>
      <Banner/>
      <Footer/> */}
      <Admin/>

    </div>
  );
}

export default App;
