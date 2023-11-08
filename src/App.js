import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
// import Home from './Components/Home';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home2 from './Components/Home2';
import Service from './Components/Service';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
            <BrowserRouter>
       <NavBar /> 
       

      <Routes>
        <Route path="/" element={<Home2/>}></Route>
        <Route path="/about us" element={<h1>about us</h1>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="/contact us" element={<Contact/>}></Route>
      </Routes>
      <Footer/>
      
      </BrowserRouter>
      
        
    </div>
  );
}

export default App;
