import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { UserContext } from '../App';

const  NavigationBar = () => {
  const {navigateToAdd, navigateToHome} = React.useContext(UserContext)
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={navigateToHome} style={{cursor: 'pointer'}}>Employee Management Systems</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  onClick={navigateToHome}>Home</Nav.Link>
            <Nav.Link  onClick={navigateToAdd}>Add</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;