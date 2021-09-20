import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
/**
* @author
* @function Navbar
**/

export const NavbarComp = ({onClick}) => {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" className="py-4">
            <Container>
                <Navbar.Brand href="/#">LGM Users</Navbar.Brand>
                <Nav>
                    <Nav.Item> <Button variant="outline-primary" onClick={onClick}>Get Users</Button></Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    )
}
