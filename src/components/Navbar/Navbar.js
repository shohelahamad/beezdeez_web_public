import React, { Component } from 'react';
// import axios from 'axios';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import logo from '../../Beezdeezlogo.png';

class NavbarUI extends Component {
    render() {
        return (
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand href="#">
                        <img src={logo} style={{ maxHeight: 30 }} alt="BEEZDEEZ-LOGO" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <Nav.Link href="#link"></Nav.Link>
                        </Nav>
                        <Button variant="outline-primary">Subscribe</Button>                            
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        );
    }
}

export default NavbarUI;
