import React from 'react';
import { Container } from 'reactstrap';

const Header = () => {
    const headerStyle = {
        backgroundColor: "#5995DD",
        padding: "10px",
        textAlign: "center"
    };

    return (
        <Container style={headerStyle} fluid={true}>
            <h1>Restaurant menu</h1>
        </Container>
    );
}

export default Header;
