import React from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { useLocation } from "react-router-dom"
import { UserContext } from "../App"

const NavigationBar = () => {
    const { navigateToAdd, navigateToHome } = React.useContext(UserContext)
    const location = useLocation()
    /*
  the hrefs are given only for the activeKey to work. They hrefs are disabled by the e.prevetDefault() in the navigate functions
  */
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand
                    onClick={navigateToHome}
                    style={{ cursor: "pointer" }}
                >
                    Employee Management Systems
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav activeKey={location.pathname} className="me-auto">
                        <Nav.Link href="/" onClick={navigateToHome}>
                            Home
                        </Nav.Link>
                        <Nav.Link href="/add" onClick={navigateToAdd}>
                            Add
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar
