import React from 'react'
import './navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../logo.png'
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
            <Nav.Link className="nav-item"href="features">Features</Nav.Link>
            <Nav.Link href="pricing" className="nav-item">Pricing</Nav.Link>
           
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
