import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const headerStyle = {
    backgroundColor: "#9DA5A2"
};

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container fluid={true} className="p-2" style={headerStyle}>
                <Row className="align-items-center">
                    <Col xl="4"><Button color="primary" size="lg" onClick={this.props.displayForm}>Добавить блюдо</Button></Col>
                    <Col><h1>Меню ресторана</h1></Col>
                </Row>
            </Container>
        )
    }
}

export default Header;
