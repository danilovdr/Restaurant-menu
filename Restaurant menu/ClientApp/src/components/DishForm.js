import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Collapse, Card, CardBody, FormGroup, Label, Input, Button } from 'reactstrap';

function DishForm(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescriotion] = useState("");
    const [cost, setCost] = useState(-1);
    const [weight, setWeight] = useState(-1);
    const [calories, setCalories] = useState(-1);
    const [coockingTime, setCoockingTime] = useState(-1);

    const cardStyle = {
        width: "100%"
    };

    const buttonStyle = {
        width: "200px",
    };

    const toggleStyle = {
        width: "200px",
        marginBottom: "1rem"
    };

    const toggle = () => setIsOpen(!isOpen);

    const createDish = () => {
        let dish = {
            Name: name,
            Description: description,
            Cost: parseInt(cost),
            Weight: parseInt(weight),
            Calories: parseInt(calories),
            CoockingTime: parseInt(coockingTime)
        }

        props.createDish(dish);
    };

    return (
        <Card style={cardStyle} >
            <CardBody>
                <Button color="primary" onClick={toggle} style={toggleStyle}>Create dish</Button>
                <Collapse isOpen={isOpen} >
                    <FormGroup>
                        <Label for="nameForm">Name</Label>
                        <Input type="text" id="nameForm" placeholder="Name" onChange={event => setName(event.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="descriptionForm">Description</Label>
                        <Input type="textarea" id="descriptionForm" placeholder="Description" onChange={event => setDescriotion(event.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="costForm">Cost</Label>
                        <Input type="number" id="costForm" placeholder="Cost" onChange={event => setCost(event.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="weightForm">Weight</Label>
                        <Input type="number" id="weightForm" placeholder="Weight" onChange={event => setWeight(event.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="caloriesForm">Calories</Label>
                        <Input type="number" id="caloriesForm" placeholder="Calories" onChange={event => setCalories(event.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="coockingTimeForm">Coocking time</Label>
                        <Input type="number" id="coockingTimeForm" placeholder="Coocking time" onChange={event => setCoockingTime(event.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Button color="success" style={buttonStyle} onClick={createDish} > Create</Button>
                    </FormGroup>
                </Collapse>
            </CardBody>
        </Card>
    )
}

export default DishForm;