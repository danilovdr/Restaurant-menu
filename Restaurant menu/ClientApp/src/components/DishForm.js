import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Label, Input, Button } from 'reactstrap';

class DishForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: "",
            cost: "",
            gram: "",
            colories100gram: "",
            coockingTimeMinutes: ""
        }

        this.formStyle = {
            visibility: "hidden"
        }
    }

    render() {
        return (
            <Container className="mt-3 p-2 border" style={this.formStyle}>
                <Row>
                    <Col>
                        <Label for="exampleEmail">Name</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label for="exampleEmail">Description</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label for="exampleEmail">Cost</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label for="exampleEmail">Gram</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label for="exampleEmail">Colories per 100 gram</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label for="exampleEmail">Coocking time in minutes</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <Button size="md" color="primary">Добавить</Button>
                    </Col>
                </Row>
            </Container >
        )

    }
}

export default DishForm;