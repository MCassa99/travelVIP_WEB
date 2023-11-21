import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import Button from './Button';
import logo from '../assets/react.svg'; // Import your logo image

const NavbarComponent = () => {
    return (
        <Navbar bg="light" expand="md" className="fixed-top">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Company Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav variant="underline" className="me-auto" defaultActiveKey="#travelvip">
                        <Button href="#travelvip" name="TravelVIP" />
                        <Button href="#paquetes" name="Paquetes" />
                        <Button href="#vuelos" name="Vuelos" />
                        <Button href="#hoteles" name="Hoteles" />
                        <Button href="#cotizador" name="Cotizador" />
                    </Nav>
                    <Nav>
                        <Nav.Link href="#cart" className='d-flex align-items-center justify-content-center'><i className="fa-solid fa-cart-shopping fa-xl me-2"></i></Nav.Link>
                        <NavDropdown title={<img src="src/assets/default_profile.png" alt="User Profile" style={{width: 35, height: 35, marginRight: 1}} />} id="user-dropdown">
                            <NavDropdown.Item href="#profile">Perfil</NavDropdown.Item>
                            <NavDropdown.Item href="#settings">Ajustes</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#logout">Cerrar Sesión</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
