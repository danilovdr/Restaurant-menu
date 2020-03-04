import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Alert, Label, Input, Button } from 'reactstrap';

class DishForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: "",
            cost: "",
            weight: "",
            colories100gram: "",
            coockingTimeMinutes: "",
            successDisplay: "none",
            successText: "",
            errorDisplay: "none",
            errorText: ""
        }

        this.addDish = this.addDish.bind(this);
        this.setName = this.setName.bind(this);
        this.setDescription = this.setDescription.bind(this);
        this.setCost = this.setCost.bind(this);
        this.setWeight = this.setWeight.bind(this);
        this.setColories = this.setColories.bind(this);
        this.setCoockingTime = this.setCoockingTime.bind(this);
        this.showSuccess = this.showSuccess.bind(this);
        this.hideSuccess = this.hideSuccess.bind(this);
        this.showError = this.showError.bind(this);
        this.hideError = this.hideError.bind(this);
    }

    render() {
        return (
            <Container className="mt-3 pt-2 pb-2 border" style={this.props}>
                <Row style={{ display: this.state.successDisplay }} >
                    <Col>
                        <Alert color="success">{this.state.successText}</Alert>
                    </Col>
                </Row>
                <Row style={{ display: this.state.errorDisplay }} >
                    <Col>
                        <Alert color="danger">{this.state.errorText}</Alert>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label for="exampleEmail">Name</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" onInput={e => this.setName(e.target.value)} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label for="exampleEmail">Description</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" onInput={e => this.setDescription(e.target.value)} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label for="exampleEmail">Cost</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" onInput={e => this.setCost(e.target.value)} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label for="exampleEmail">Weight</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" onInput={e => this.setWeight(e.target.value)} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label for="exampleEmail">Colories per 100 gram</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" onInput={e => this.setColories(e.target.value)} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label for="exampleEmail">Coocking time in minutes</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" onInput={e => this.setCoockingTime(e.target.value)} />
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <Button size="md" color="primary" onClick={this.addDish} > Добавить</Button>
                    </Col>
                </Row>
            </Container >
        )

    }

    async addDish() {
        this.hideSuccess();
        this.hideError();

        let dish = {
            Name: this.state.name,
            Description: this.state.description,
            Cost: this.state.cost,
            Weight: this.state.weight,
            Colories100gram: this.state.colories100gram,
            CoockingTimeMinutes: this.state.coockingTimeMinutes
        };

        console.log(dish);

        await fetch('https://localhost:44334/dish/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(dish)
        }).then(responce => {
            if (responce.ok) {
                this.showSuccess("Запрос отправлен успешно");
            } else {
                this.showError("Error: " + responce.status);
            }
        });
    }

    setName(name) {
        this.setState({ name: name });
    }

    setDescription(description) {
        this.setState({ description: description });
    }

    setCost(cost) {
        this.setState({ cost: cost });
    }

    setWeight(weight) {
        this.setState({ weight: weight });
    }

    setColories(colories) {
        this.setState({ colories100gram: colories });
    }

    setCoockingTime(coockingTime) {
        this.setState({ coockingTimeMinutes: coockingTime });
    }

    showSuccess(successText) {
        this.setState({
            successDisplay: "block",
            successText: successText
        });
    }

    hideSuccess() {
        this.setState({
            successDisplay: "none",
            successText: ""
        });
    }

    showError(errorText) {
        this.setState({
            errorDisplay: "block",
            errorText: errorText
        });
    }

    hideError() {
        this.setState({
            errorDisplay: "none",
            errorText: ""
        });
    }
}

export default DishForm;