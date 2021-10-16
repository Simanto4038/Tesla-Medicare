import React, { useState } from 'react';
import { Container, Image, Nav, Navbar, Offcanvas, Button, ListGroup, Card} from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';
import './Navbar.css'
import logo101 from './logo.png'
import profile from './profile.png'
import Uppernav from './Uppernav';


const Navigationbar = () => {
  
  const [show, setShow] = useState(false);
 

  
  return (
    <div>
      <Uppernav/>
      <Navbar collapseOnSelect expand="lg"  variant="dark">
  <Container>
  <Navbar.Brand href="/"> <Image src={logo101} style={{height:'60px',width:'105px'}} rounded /></Navbar.Brand>
  <Navbar.Toggle  style={{color:'crimson',backgroundColor:'crimson'}} aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">

    <Nav className=" w-75 mx-auto linkBox ">
    <NavLink 
     className='link' style={{fontWeight: "bold", fontSize:'20px',color:"gray"}} 
    activeStyle={{ fontSize:'20px', fontWeight: "bold",color: "crimson"}} to="/home">Home</NavLink >
    <NavLink  className='link' style={{fontWeight: "bold", fontSize:'20px',color:"gray"}} 
    activeStyle={{ fontSize:'20px', fontWeight: "bold",color: "crimson"}} to="/about">About</NavLink >
    <NavLink  className='link' style={{fontWeight: "bold", fontSize:'20px',color:"gray"}}
    activeStyle={{fontSize:'20px', fontWeight: "bold",color: "crimson"}} to="/Students">Our Services</NavLink >
    <NavLink  className='link' style={{fontWeight: "bold", fontSize:'20px',color:"gray"}}
    activeStyle={{fontSize:'20px', fontWeight: "bold",color: "crimson"}} to="/studentDetail">Student Detail</NavLink >
    
   
    </Nav>
   

   
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};




export default Navigationbar;