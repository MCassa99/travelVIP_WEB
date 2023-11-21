import React from 'react';
import { Nav } from 'react-bootstrap';

const Button = ({ href, name }) => {
    return (
        <Nav.Link href={href}>{name}</Nav.Link>
    );
};

export default Button;