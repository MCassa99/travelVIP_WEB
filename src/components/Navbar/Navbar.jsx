import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import Button from '../UI/Button';
import logo from '../../assets/react.svg'; // Importar logo acá
import CartWidget from '../CartWidget/CartWidget';

const NavbarComponent = () => {
    return (
        <>
            <Navbar style={{backgroundColor: '#006494'}} expand="md" className="mb-4">
                <Container>
                    <Navbar.Brand>
                        <img src={logo} alt="Logo de Compañia" />
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
                            <Nav.Link href="#cart" className='cart d-flex align-items-center justify-content-center'><CartWidget /></Nav.Link>
                            <NavDropdown title={<img src="src/assets/default_profile.png" alt="User Profile" style={{ width: 35, height: 35, marginRight: 1}} />} id="user-dropdown">
                                <NavDropdown.Item href="#profile">Perfil</NavDropdown.Item>
                                <NavDropdown.Item href="#settings">Ajustes</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#logout">Cerrar Sesión</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarComponent;
