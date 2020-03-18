import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardBody, FormGroup, Label, Input, Button, Alert } from 'reactstrap';

function Dish(props) {
    //Styles
    const cardStyle = {
        width: "300px",
        alignSelf: "flex-start"
    }

    const buttonContainerStyle = {
        display: "flex",
        justifyContent: "space-between"
    }

    const buttonStyle = {
        width: "125px"
    }

    //CreateTime
    let unixTime = Date.parse(props.createDate);
    const createTime = new Date(unixTime).toLocaleString();

    //Name
    const [name, setName] = useState(props.name);
    const changeName = (event) => setName(event.target.value);
    const nameComponentText = <p>{name}</p>;
    const nameComponentInput = <Input type="text" defaultValue={name} onChange={changeName} />;
    const [nameComponent, setNameComponent] = useState(nameComponentText);
    const [nameAlertText, setNameAlertText] = useState(null);
    const [nameAlertDisplay, setNameAlertDisplay] = useState("none");

    //Description
    const [description, setDescription] = useState(props.description);
    const changeDescription = (event) => setDescription(event.target.value);
    const descriptionComponentText = <p>{description}</p>;
    const descriptionComponentInput = <Input type="textarea" defaultValue={description} onChange={changeDescription} />;
    const [descriptionComponent, setDescriptionComponent] = useState(descriptionComponentText);
    const [descriptionAlertText, setDescriptionAlertText] = useState(null);
    const [descriptionAlertDisplay, setDescriptionAlertDisplay] = useState("none");

    //Cost
    const [cost, setCost] = useState(props.cost);
    const changeCost = (event) => setCost(event.target.value);
    const costComponentText = <p>{cost}</p>;
    const costComponentInput = <Input type="text" defaultValue={cost} onChange={changeCost} />;
    const [costComponent, setCostComponent] = useState(costComponentText);
    const [costAlertText, setCostAlertText] = useState(null);
    const [costAlertDisplay, setCostAlertDisplay] = useState("none");

    //Weight
    const [weight, setWeight] = useState(props.weight);
    const changeWeight = (event) => setWeight(event.target.value);
    const weightComponentText = <p>{weight}</p>;
    const weightComponentInput = <Input type="text" defaultValue={weight} onChange={changeWeight} />;
    const [weightComponent, setWeightComponent] = useState(weightComponentText);
    const [weightAlertText, setWeightAlertText] = useState(null);
    const [weightAlertDisplay, setWeightAlertDisplay] = useState("none");

    //Calories
    const [calories, setCalories] = useState(props.calories);
    const changeCalories = (event) => setCalories(event.target.value);
    const caloriesComponentText = <p>{calories}</p>;
    const caloriesComponentInput = <Input type="text" defaultValue={calories} onChange={changeCalories} />;
    const [caloriesComponent, setCaloriesComponent] = useState(caloriesComponentText);
    const [caloriesAlertText, setCaloriesAlertText] = useState(null);
    const [caloriesAlertDisplay, setCaloriesAlertDisplay] = useState("none");

    //CoockingTime
    const convertTime = (min) => {
        let hours = (min / 60);
        let rhours = Math.floor(hours);
        let minutes = (hours - rhours) * 60;
        let rminutes = Math.round(minutes);
        return rhours + " h : " + rminutes + " m";
    }

    const [coockingTime, setCoockingTime] = useState(props.coockingTime);
    const changeCoockimgTime = (event) => setCoockingTime(event.target.value);
    const coockingTimeComponentText = <p>{convertTime(coockingTime)}</p>;
    const coockingTimeComponentInput = <Input type="text" defaultValue={coockingTime} onChange={changeCoockimgTime} />;
    const [coockingTimeComponent, setCoockingTimeComponent] = useState(coockingTimeComponentText);
    const [coockingTimeAlertText, setCoockingTimeAlertText] = useState(null);
    const [coockingTimeAlertDisplay, setCoockingTimeAlertDisplay] = useState("none");

    //EditBtn
    const acceptColor = "success";
    const editColor = "primary";
    const [editBtnColor, setEditBtnColor] = useState(editColor);

    const acceptText = "Accept";
    const editText = "Edit";
    const [editBtnText, setEditBtnText] = useState(editText);

    const [isEdit, setIsEdit] = useState(false);

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

    const updateDish = async () => {
        reset();

        let data = {
            Id: props.id,
            Name: name,
            Description: description,
            Cost: parseInt(cost),
            Weight: parseInt(weight),
            Calories: parseInt(calories),
            CoockingTime: parseInt(coockingTime)
        };

        let url = "https://localhost:44334/api/dish/";

        let resp = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(data)
        });

        if (resp.ok) {
            props.updateDishes();

            setNameComponent(nameComponentText);
            setDescriptionComponent(descriptionComponentText);
            setCostComponent(costComponentText);
            setWeightComponent(weightComponentText);
            setCaloriesComponent(caloriesComponentText);
            setCoockingTimeComponent(coockingTimeComponentText);
            setEditBtnColor(editColor);
            setEditBtnText(editText);
        } else {
            let errData = await resp.json();

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

    const deleteDish = async () => {
        let url = "https://localhost:44334/api/dish/";

        let resp = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(props.id)
        });

        if (resp.ok) {
            props.updateDishes();
        }
    }

    const toggleEdit = () => {
        setIsEdit(!isEdit);

        if (!isEdit) {
            setNameComponent(nameComponentInput);
            setDescriptionComponent(descriptionComponentInput);
            setCostComponent(costComponentInput);
            setWeightComponent(weightComponentInput);
            setCaloriesComponent(caloriesComponentInput);
            setCoockingTimeComponent(coockingTimeComponentInput);
            setEditBtnColor(acceptColor);
            setEditBtnText(acceptText);
        } else {
            updateDish();
        }
    }

    return (
        <Card className="mt-3 mr-3" style={cardStyle} >
            <CardBody>
                <FormGroup>
                    <Label>Create date</Label>
                    <p>{createTime}</p>
                </FormGroup>
                <FormGroup>
                    <Label>Name</Label>
                    {nameComponent}
                    <Alert className="mt-2" color="danger" style={{ display: nameAlertDisplay }}>{nameAlertText}</Alert>
                </FormGroup>
                <FormGroup>
                    <Label>Description</Label>
                    {descriptionComponent}
                    <Alert className="mt-2" color="danger" style={{ display: descriptionAlertDisplay }}>{descriptionAlertText}</Alert>
                </FormGroup>
                <FormGroup>
                    <Label>Cost</Label>
                    {costComponent}
                    <Alert className="mt-2" color="danger" style={{ display: costAlertDisplay }}>{costAlertText}</Alert>
                </FormGroup>
                <FormGroup>
                    <Label>Weight</Label>
                    {weightComponent}
                    <Alert className="mt-2" color="danger" style={{ display: weightAlertDisplay }}>{weightAlertText}</Alert>
                </FormGroup>
                <FormGroup>
                    <Label>Calories</Label>
                    {caloriesComponent}
                    <Alert className="mt-2" color="danger" style={{ display: caloriesAlertDisplay }}>{caloriesAlertText}</Alert>
                </FormGroup>
                <FormGroup>
                    <Label>Coocking time</Label>
                    {coockingTimeComponent}
                    <Alert className="mt-2" color="danger" style={{ display: coockingTimeAlertDisplay }}>{coockingTimeAlertText}</Alert>
                </FormGroup>
                <FormGroup>
                    <div style={buttonContainerStyle}>
                        <Button color={editBtnColor} style={buttonStyle} onClick={toggleEdit}>{editBtnText}</Button>
                        <Button color="danger" style={buttonStyle} onClick={deleteDish}> Delete</Button>
                    </div>
                </FormGroup>
            </CardBody>
        </Card>
    )
}

export default Dish;
