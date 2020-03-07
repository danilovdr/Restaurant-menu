import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const headerStyle = {
    backgroundColor: "#9DA5A2"
};

function Header(props) {
    return (
        <div style={headerStyle}>
            <Button className="d-inline-block" color="primary" size="lg" onClick={props.displayForm}>Добавить блюдо</Button>
            <h1 className="d-inline-block" align="center" align="center">Меню ресторана</h1>
        </div>
    )
}

export default Header;
