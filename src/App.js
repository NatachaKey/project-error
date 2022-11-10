import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";
import './App.css';
import cartImage from './cart.png'
import Cart from './Components/Cart/Cart';


function App() {
 
return <Router>

<nav>
  <Link to="/" className='link'>Alta Joyería </Link>
  <Link to="/about" className='link'>Sobre nosotros</Link>
  <Link to="/contactus" className='link'>Contactar</Link>
  <Link to="/cart" className='link'><img  src={cartImage} alt="cart" width="20px"/></Link>
</nav>

<Routes> 
  <Route path="/" element= { <Home/> } />
  <Route path="/about" element= { <About/> } />
  <Route path="/contactus" element= { <ContactUs/> }/>
  <Route path="/cart" element= { <Cart/> }/>
</Routes>

</Router>

}

export default App;
