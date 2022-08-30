import React from 'react'

import { Link } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';

import '/Users/tamaraloyacono/Desktop/mi-pagina-web/frontend/src/styles/components/layout/Nav.css';

function Navbar(props){
  
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  
  return (

<Nav className="navBar" defaultActiveKey={props.default}>
  <ul className="lista">
      <NavItem><NavLink activeClass href="/"><a className= "items">Home</a></NavLink></NavItem>
      <NavLink href="/nosotros"><a className= "items"   >Nuestras clases</a></NavLink>
      <NavLink href="/novedades"><a className= "items"  >Mantente fit</a></NavLink>
      <NavLink href="/contacto"><a className= "items"  >Contacto</a></NavLink>
  </ul>
  <div className="logoNavBar">
    <img src="../../img/LOGO PILATES.png" className="logoPilates"></img>
  </div>
</Nav>


  )
};


export default Navbar;
