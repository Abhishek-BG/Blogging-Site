import React from 'react'
import './navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from '../../logo.png'
import {Link,Outlet} from 'react-router-dom'
const Header = () => {
  return (
    <div>
     
       <Navbar collapseOnSelect expand="lg" variant="light" className='navbar'>
      
      <Container>
        <Navbar.Brand href="#home">
        <img
              src={logo}
              width="100"
              height="80"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
               
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{color:'white',backgroundColor:'white'}} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav-item" >
            <Nav.Link href="pricing" className="nav-item">Login</Nav.Link>
            <Nav.Link href="pricing" className="nav-item">SignUp</Nav.Link>
           
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </div>
  )
}
export default Header
