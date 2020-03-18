import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardBody, FormGroup, Label, Input, Button } from 'reactstrap';

function Dish(props) {
    const cardStyle = {
        width: "300px"
    }

    const buttonContainerStyle = {
        display: "flex",
        justifyContent: "space-between"
    }

    const buttonStyle = {
        width: "125px"
    }

    //name
    const [name, setName] = useState(props.name);
    const changeName = (event) => setName(event.target.value);
    const nameComponentText = <p>{name}</p>;
    const nameComponentInput = <Input type="text" defaultValue={name} onChange={changeName} />;
    const [nameComponent, setNameComponent] = useState(nameComponentText);

    //Description
    const [description, setDescription] = useState(props.description);
    const changeDescription = (event) => setDescription(event.target.value);
    const descriptionComponentText = <p>{description}</p>;
    const descriptionComponentInput = <Input type="textarea" defaultValue={description} onChange={changeDescription} />;
    const [descriptionComponent, setDescriptionComponent] = useState(descriptionComponentText);

    //Cost
    const [cost, setCost] = useState(props.cost);
    const changeCost = (event) => setCost(event.target.value);
    const costComponentText = <p>{cost}</p>;
    const costComponentInput = <Input type="text" defaultValue={cost} onChange={changeCost} />;
    const [costComponent, setCostComponent] = useState(costComponentText);

    //Weight
    const [weight, setWeight] = useState(props.weight);
    const changeWeight = (event) => setWeight(event.target.value);
    const weightComponentText = <p>{weight}</p>;
    const weightComponentInput = <Input type="text" defaultValue={weight} onChange={changeWeight} />;
    const [weightComponent, setWeightComponent] = useState(weightComponentText);

    //Calories
    const [calories, setCalories] = useState(props.calories);
    const changeCalories = (event) => setCalories(event.target.value);
    const caloriesComponentText = <p>{calories}</p>;
    const caloriesComponentInput = <Input type="text" defaultValue={calories} onChange={changeCalories} />;
    const [caloriesComponent, setCaloriesComponent] = useState(caloriesComponentText);

    //CoockingTime
    const [coockingTime, setCoockingTime] = useState(props.coockingTime);
    const changeCoockimgTime = (event) => setCoockingTime(event.target.value);
    const coockingTimeComponentText = <p>{coockingTime}</p>;
    const coockingTimeComponentInput = <Input type="text" defaultValue={coockingTime} onChange={changeCoockimgTime} />;
    const [coockingTimeComponent, setCoockingTimeComponent] = useState(coockingTimeComponentText);

    //EditBtn
    const acceptColor = "success";
    const editColor = "primary";
    const [editBtnColor, setEditBtnColor] = useState(editColor);

    const acceptText = "Accept";
    const editText = "Edit";
    const [editBtnText, setEditBtnText] = useState(editText);

    const [isEdit, setIsEdit] = useState(false);

    const updateDish = () => {
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
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(data)
        });
    };

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
            setNameComponent(nameComponentText);
            setDescriptionComponent(descriptionComponentText);
            setCostComponent(costComponentText);
            setWeightComponent(weightComponentText);
            setCaloriesComponent(caloriesComponentText);
            setCoockingTimeComponent(coockingTimeComponentText);
            setEditBtnColor(editColor);
            setEditBtnText(editText);
            updateDish();
        }
    }

    const deleteDish = () => props.deleteDish(props.id);


    return (
        <Card className="mt-3 mr-3" style={cardStyle} >
            <CardBody>
                <FormGroup>
                    <Label>Name</Label>
                    {nameComponent}
                </FormGroup>
                <FormGroup>
                    <Label>Description</Label>
                    {descriptionComponent}
                </FormGroup>
                <FormGroup>
                    <Label>Cost</Label>
                    {costComponent}
                </FormGroup>
                <FormGroup>
                    <Label>Weight</Label>
                    {weightComponent}
                </FormGroup>
                <FormGroup>
                    <Label>Calories</Label>
                    {caloriesComponent}
                </FormGroup>
                <FormGroup>
                    <Label>Coocking time</Label>
                    {coockingTimeComponent}
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
