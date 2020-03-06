import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Form, Alert, Label, Input, Button, FormGroup } from 'reactstrap';

class DishForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: "",
            cost: "",
            weight: "",
            calories: "",
            coockingTime: "",
            successDisplay: "none",
            successText: "",
            errorDisplay: "none",
            errorText: ""
        }

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.setName = this.setName.bind(this);
        this.setDescription = this.setDescription.bind(this);
        this.setCost = this.setCost.bind(this);
        this.setWeight = this.setWeight.bind(this);
        this.setCalories = this.setCalories.bind(this);
        this.setCoockingTime = this.setCoockingTime.bind(this);
        this.showSuccess = this.showSuccess.bind(this);
        this.hideSuccess = this.hideSuccess.bind(this);
        this.showError = this.showError.bind(this);
        this.hideError = this.hideError.bind(this);
    }

    render() {
        return (
            <Container className="border" style={{ display: this.props.display }} >
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Dish name"
                                value={this.state.name}
                                onChange={this.setName} />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="description">Description</Label>
                            <Input
                                type="text"
                                name="description"
                                id="description"
                                placeholder="Dish description (max 250 sym)"
                                value={this.state.description}
                                onChange={this.setDescription} />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="cost">Cost</Label>
                            <Input
                                type="number"
                                name="cost"
                                id="cost"
                                placeholder="Dish cost"
                                value={this.state.cost}
                                onChange={this.setCost} />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="weight">Weight</Label>
                            <Input
                                type="number"
                                name="weight"
                                id="weight"
                                placeholder="Dish weight (gram)"
                                value={this.state.weight}
                                onChange={this.setWeight} />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="calories">Calories</Label>
                            <Input
                                type="number"
                                name="calories"
                                id="calories"
                                placeholder="Calories per 100 gram"
                                value={this.state.calories}
                                onChange={this.setCalories} />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="coockingTime">Coocking time</Label>
                            <Input
                                type="number"
                                name="coockingTime"
                                id="coockingTime"
                                placeholder="Coocking time in minutes"
                                value={this.state.coockingTime}
                                onChange={this.setCoockingTime} />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button type="button" onClick={this.onFormSubmit}>Add dish</Button>
                    </Col>
                </Row>
            </Container >
        )
    }

    onFormSubmit() {
        this.hideSuccess();
        this.hideError();

        let dish = {
            Name: this.state.name,
            Description: this.state.description,
            Cost: parseInt(this.state.cost),
            Weight: parseInt(this.state.weight),
            Calories: parseInt(this.state.calories),
            CoockingTime: parseInt(this.state.coockingTime)
        };

        console.log(JSON.stringify(dish));

        let url = "https://localhost:44334/api/dish/";

        let xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");

        xhr.send(JSON.stringify(dish));
    }

    setName(event) {
        this.setState({ name: event.target.value });
    }

    setDescription(event) {
        this.setState({ description: event.target.value });
    }

    setCost(event) {
        this.setState({ cost: event.target.value });
    }

    setWeight(event) {
        this.setState({ weight: event.target.value });
    }

    setCalories(event) {
        this.setState({ calories: event.target.value });
    }

    setCoockingTime(event) {
        this.setState({ coockingTime: event.target.value });
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