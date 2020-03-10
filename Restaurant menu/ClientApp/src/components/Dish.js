import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardBody, FormGroup, Label, Input, Button } from 'reactstrap';

function Dish(props) {
    const cardStyle = {
        width: "300px"
    }

    //name
    const [name, setName] = useState(props.name);
    const nameComponentText = <p>{name}</p>;
    const nameComponentInput = <Input type="text" defaultValue={name} onChange={event => setName(event.target.value)} />;
    const [nameComponent, setNameComponent] = useState(nameComponentText);

    //Description
    const [description, setDescription] = useState(props.description);
    const descriptionComponentText = <p>{description}</p>;
    const descriptionComponentInput = <Input type="textarea" defaultValue={description} onChange={event => setDescription(event.target.value)} />;
    const [descriptionComponent, setDescriptionComponent] = useState(descriptionComponentText);

    //Cost
    const [cost, setCost] = useState(props.cost);
    const costComponentText = <p>{cost}</p>;
    const costComponentInput = <Input type="text" defaultValue={cost} onChange={event => setCost(event.target.value)} />;
    const [costComponent, setCostComponent] = useState(costComponentText);

    //Weight
    const [weight, setWeight] = useState(props.weight);
    const weightComponentText = <p>{weight}</p>;
    const weightComponentInput = <Input type="text" defaultValue={weight} onChange={event => setWeight(event.target.value)} />;
    const [weightComponent, setWeightComponent] = useState(weightComponentText);

    //Calories
    const [calories, setCalories] = useState(props.calories);
    const caloriesComponentText = <p>{calories}</p>;
    const caloriesComponentInput = <Input type="text" defaultValue={calories} onChange={event => setCalories(event.target.value)} />;
    const [caloriesComponent, setCaloriesComponent] = useState(caloriesComponentText);

    //CoockingTime
    const [coockingTime, setCoockingTime] = useState(props.coockingTime);
    const coockingTimeComponentText = <p>{coockingTime}</p>;
    const coockingTimeComponentInput = <Input type="text" defaultValue={coockingTime} onChange={event => setCoockingTime(event.target.value)} />;
    const [coockingTimeComponent, setCoockingTimeComponent] = useState(coockingTimeComponentText);

    const buttonContainerStyle = {
        display: "flex",
        justifyContent: "space-between"
    }

    const buttonStyle = {
        width: "125px"
    }

    //EditBtn
    const acceptColor = "success";
    const editColor = "primary";
    const [editBtnColor, setEditBtnColor] = useState(editColor);

    const acceptText = "Accept";
    const editText = "Edit";
    const [editBtnText, setEditBtnText] = useState(editText);

    const sendData = () => {
        let data = {
            Id: props.id,
            Name: name,
            Description: description,
            Cost: cost,
            Weight: weight,
            Calories: calories,
            CoockingTime: coockingTime
        };

        let url = "https://localhost:44334/api/dish";
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(data)
        });
    };

    const [isEdit, setIsEdit] = useState(false);

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
            sendData();
        }
    }

    const deleteDish = () => {
        let url = "https://localhost:44334/api/dish";

        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(props.id)
        });

        props.deleteDish(props.id);
    }

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
