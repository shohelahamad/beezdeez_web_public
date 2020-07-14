import React, { Component } from 'react';
// import axios from 'axios';
import { Form, Container, Button, Row, Col, Card } from 'react-bootstrap';
import logo from '../../Beezdeezlogo.png';

class ContactForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = { username: '' };
    }
    myChangeHandler = (event) => {
        this.setState({ username: event.target.value });
        console.log(event.target.value);
    }
    handleSubmit(e) {
        console.log(e)
        alert('The value is: ' + e);
        e.preventDefault();
    }
    render() {
        return (
            <Container className={'mt-5 mb-5'} id={'contactForm'}>
                <Card className={'p-3'}>
                    <Row>
                        <Col>

                            <Form noValidate onSubmit={(e) => this.handleSubmit(e)}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>First and Last name</Form.Label>
                                    <Form.Control type="input" placeholder="Please enter your name" onChange={this.myChangeHandler} />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Write your message here</Form.Label>
                                    <Form.Control as="textarea" rows="3" />
                                </Form.Group>
                                <Button variant="primary" type="submit" size="lg">
                                    Send to BeezDeez
  </Button>
                            </Form>

                        </Col>
                    </Row>
                </Card>
            </Container>
        );
    }
}

export default ContactForm;
