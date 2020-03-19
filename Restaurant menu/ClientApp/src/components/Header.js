import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Alert } from 'reactstrap';

const Header = (props) => {
    //Styles
    const headerStyle = {
        backgroundColor: "#5995DD",
        padding: "10px",
        textAlign: "center"
    };

    const buttonStyle = {
        position: "absolute",
        top: "20px",
        left: "25px"
    };

    //Modal
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    //DishForms
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

    const resetAlerts = () => {
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

    //CreateDish
    const createDish = async () => {
        resetAlerts();

        let url = "https://localhost:44334/api/dish/";

        props.setLoadScreen(true);

        let response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify({
                Name: name,
                Description: description,
                Cost: cost,
                Weight: weight,
                Calories: calories,
                CoockingTime: coockingTime
            })
        });

        props.setLoadScreen(false);

        if (response.ok) {
            props.update();
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
        <Container style={headerStyle} fluid={true}>

            <Button style={buttonStyle} onClick={toggle}>Создать блюдо</Button>
            <Modal isOpen={modal}>
                <ModalHeader>Создать блюдо</ModalHeader>
                <ModalBody>
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
                </ModalBody>
                <ModalFooter>
                    <Button className="w-75" color="success" onClick={createDish} >Create</Button>
                    <Button className="w-75" color="danger" onClick={toggle}>Выйти</Button>
                </ModalFooter>
            </Modal>
            <h1>Меню ресторана</h1>
        </Container >
    );
}

export default Header;
