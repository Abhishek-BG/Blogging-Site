import React from 'react'
import './homecard.css'
import Card from 'react-bootstrap/Card';
import logo from '../../logo.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Homecard = () => {
  return (
    <div>
    <Container>

    <Card className='cardhome'>
      <Card.Body className="cardbody">
      <Row>
        <Col md="12" lg="4" sm="12" xs="12">
        <Card.Img  src={logo} />
        
        </Col>
       <Col>
       <Card.Title><h1>Cheonjae</h1></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Abhishek-BG</Card.Subtitle>
        <Card.Text>
        Full Stack Developer, Sharpened with DevOps, Fueled by Passion , Ask me anything about tech!.
        </Card.Text>
        <a class="link" href="https://github.com/Abhishek-BG"><i class="fa-brands fa-github"></i> Github</a>
        <a class="link" href="#"><i class="fa-brands fa-twitter"></i> Twitter</a>
       </Col>
       
      </Row>
    
      
      </Card.Body>
    </Card>
    </Container>
      
    </div>
  )
}

export default Homecard
