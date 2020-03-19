import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Collapse, Card, CardBody, FormGroup, Label, Input, Button, Alert } from 'reactstrap';

function Form(props) {
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

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [name, setName] = useState(null);
    const changeName = (event) => setName(event.target.value);
    const [nameAlertText, setNameAlertText] = useState(null);
    const [nameAlertDisplay, setNameAlertDisplay] = useState("none");

    const [description, setDescription] = useState(null);
    const changeDescription = (event) => setDescription(event.target.value);
    const [descriptionAlertText, setDescriptionAlertText] = useState(null);
    const [descriptionAlertDisplay, setDescriptionAlertDisplay] = useState("none");

    const [cost, setCost] = useState(null);
    const changeCost = (event) => setCost(parseInt(event.target.value));
    const [costAlertText, setCostAlertText] = useState(null);
    const [costAlertDisplay, setCostAlertDisplay] = useState("none");

    const [weight, setWeight] = useState(null);
    const changeWeight = (event) => setWeight(parseInt(event.target.value));
    const [weightAlertText, setWeightAlertText] = useState(null);
    const [weightAlertDisplay, setWeightAlertDisplay] = useState("none");

    const [calories, setCalories] = useState(null);
    const changeCalories = (event) => setCalories(parseInt(event.target.value));
    const [caloriesAlertText, setCaloriesAlertText] = useState(null);
    const [caloriesAlertDisplay, setCaloriesAlertDisplay] = useState("none");

    const [coockingTime, setCoockingTime] = useState(null);
    const changeCoockingTime = (event) => setCoockingTime(parseInt(event.target.value));
    const [coockingTimeAlertText, setCoockingTimeAlertText] = useState(null);
    const [coockingTimeAlertDisplay, setCoockingTimeAlertDisplay] = useState("none");

    const reset = () => {
        setNameAlertDisplay("none");
        setNameAlertText(null);

        setDescriptionAlertDisplay("none");
        setDescriptionAlertText(null);

        setCostAlertDisplay("none");
        setCostAlertText(null);

        setWeightAlertDisplay("none");
        setWeightAlertText(null);

        setCaloriesAlertDisplay("none");
        setCaloriesAlertText(null);

        setCoockingTimeAlertDisplay("none");
        setCoockingTimeAlertText(null);
    }

    const createDish = async () => {

        reset();

        let dish = {
            Name: name,
            Description: description,
            Cost: cost,
            Weight: weight,
            Calories: calories,
            CoockingTime: coockingTime
        };

        let url = "https://localhost:44334/api/dish/";

        let response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(dish)
        });

        if (response.ok) {
            props.updateDishes();
        } else {
            let errData = await response.json();

            if (errData["Name"]) {
                setNameAlertDisplay("block");
                setNameAlertText(errData["Name"]);
            }

            if (errData["Description"]) {
                setDescriptionAlertDisplay("block");
                setDescriptionAlertText(errData["Description"]);
            }

            if (errData["Cost"]) {
                setCostAlertDisplay("block");
                setCostAlertText(errData["Cost"]);
            }

            if (errData["Weight"]) {
                setWeightAlertDisplay("block");
                setWeightAlertText(errData["Weight"]);
            }

            if (errData["Calories"]) {
                setCaloriesAlertDisplay("block");
                setCaloriesAlertText(errData["Calories"]);
            }

            if (errData["CoockingTime"]) {
                setCoockingTimeAlertDisplay("block");
                setCoockingTimeAlertText(errData["CoockingTime"]);
            }
        }
    };

    return (
        <Card style={cardStyle} >
            <CardBody>
                <Button color="primary" onClick={toggle} style={toggleStyle}>Create dish</Button>
                <Collapse isOpen={isOpen} >
                    <FormGroup>
                        <Label for="nameForm">Name</Label>
                        <Input type="text" id="nameForm" placeholder="Name" onChange={changeName} />
                        <Alert className="mt-2" color="danger" style={{ display: nameAlertDisplay }}>{nameAlertText}</Alert>
                    </FormGroup>
                    <FormGroup>
                        <Label for="descriptionForm">Description</Label>
                        <Input type="textarea" id="descriptionForm" placeholder="Description" onChange={changeDescription} />
                        <Alert className="mt-2" color="danger" style={{ display: descriptionAlertDisplay }}>{descriptionAlertText}</Alert>
                    </FormGroup>
                    <FormGroup>
                        <Label for="costForm">Cost</Label>
                        <Input type="text" id="costForm" placeholder="Cost" onChange={changeCost} />
                        <Alert className="mt-2" color="danger" style={{ display: costAlertDisplay }}>{costAlertText}</Alert>
                    </FormGroup>
                    <FormGroup>
                        <Label for="weightForm">Weight</Label>
                        <Input type="text" id="weightForm" placeholder="Weight" onChange={changeWeight} />
                        <Alert className="mt-2" color="danger" style={{ display: weightAlertDisplay }}>{weightAlertText}</Alert>
                    </FormGroup>
                    <FormGroup>
                        <Label for="caloriesForm">Calories</Label>
                        <Input type="text" id="caloriesForm" placeholder="Calories" onChange={changeCalories} />
                        <Alert className="mt-2" color="danger" style={{ display: caloriesAlertDisplay }}>{caloriesAlertText}</Alert>
                    </FormGroup>
                    <FormGroup>
                        <Label for="coockingTimeForm">Coocking time</Label>
                        <Input type="text" id="coockingTimeForm" placeholder="Coocking time" onChange={changeCoockingTime} />
                        <Alert className="mt-2" color="danger" style={{ display: coockingTimeAlertDisplay }}>{coockingTimeAlertText}</Alert>
                    </FormGroup>
                    <FormGroup>
                        <Button color="success" style={buttonStyle} onClick={createDish} >Create</Button>
                    </FormGroup>
                </Collapse>
            </CardBody>
        </Card>
    )
}

export default Form;