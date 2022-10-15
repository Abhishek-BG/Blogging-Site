import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from '../../logo.png'
import './posts.css'
const Posts = () => {
    return (
        <div class="posts">
            <Container>
                <h5>Posts</h5>
                <Form className="d-flex  my-3 ">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2 search"
                        aria-label="Search"
                    />
                </Form>
                <Row>
                    <Col lg="4" md="6" sm="12" xs="12">
                    <Card className='cardhome2'>
                            <Card.Body className="cardbody">
                                <Card.Img src={logo} />
                                <Card.Title><h1>Cheonjae</h1></Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Abhishek-BG</Card.Subtitle>
                                <Card.Text>
                                    Full Stack Developer, Sharpened with DevOps, Fueled by Passion , Ask me anything about tech!.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="4" md="6" sm="12" xs="12">
                        <Card className='cardhome2'>
                            <Card.Body className="cardbody">
                                <Card.Img src={logo} />
                                <Card.Title><h1>Cheonjae</h1></Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Abhishek-BG</Card.Subtitle>
                                <Card.Text>
                                    Full Stack Developer, Sharpened with DevOps, Fueled by Passion , Ask me anything about tech!.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="4" md="6" sm="12" xs="12">
                        <Card className='cardhome2'>
                            <Card.Body className="cardbody">
                                <Card.Img src={logo} />
                                <Card.Title><h1>Cheonjae</h1></Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Abhishek-BG</Card.Subtitle>
                                <Card.Text>
                                    Full Stack Developer, Sharpened with DevOp, Fueled by Passion , Ask me anything about tech!.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Posts
