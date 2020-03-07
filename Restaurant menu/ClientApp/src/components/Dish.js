import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Button } from 'reactstrap';

function Dish(props) {
    return (
        <Container className="border mt-3 p-3">
            <Row>
                <Col><h2>{props.name}</h2></Col>
            </Row>
            <Row>
                <Col>{props.description}</Col>
            </Row>
            <Row>
                <Col>Cost: {props.cost}</Col>
                <Col>Weight: {props.weight}</Col>
                <Col>Calories: {props.calories}</Col>
                <Col>Coocking time: {props.coockingTime}</Col>
            </Row>
            <Row>
                <Col><Button color="warning">Edit</Button></Col>
                <Col><Button color="danger">Delete</Button></Col>
            </Row>
        </Container>
    )
}

export default Dish;
