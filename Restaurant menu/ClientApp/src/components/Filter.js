import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { Card, CardBody, FormGroup, Label, Input, Button } from 'reactstrap';

const Filter = () => {
    const cardStyle = {
        width: "250px",
        alignSelf: "flex-start"
    };

    const [name, setName] = useState("");
    const changeName = (event) => setName(event.target.value);

    const [cost, setCost] = useState({ min: -1, max: -1 });
    const changeMinCost = (event) => setCost({ min: parseInt(event.target.value), max: cost.max });
    const changeMaxCost = (event) => setCost({ min: cost.min, max: parseInt(event.target.value) });

    const [weight, setWeight] = useState({ min: -1, max: -1 });
    const changeMinWeight = (event) => setWeight({ min: parseInt(event.target.value), max: weight.max });
    const changeMaxWeight = (event) => setWeight({ min: weight.min, max: parseInt(event.target.value) });

    const [calories, setCalories] = useState({ min: -1, max: -1 });
    const changeMinCalories = (event) => setCalories({ min: parseInt(event.target.value), max: calories.max });
    const changeMaxCalories = (event) => setCalories({ min: calories.min, max: parseInt(event.target.value) });

    const [coockingTime, setCoockingTime] = useState({ min: -1, max: -1 });
    const changeMinCoockingTime = (event) => setCoockingTime({ min: parseInt(event.target.value), max: coockingTime.max });
    const changeMaxCoockingTime = (event) => setCoockingTime({ min: coockingTime.min, max: parseInt(event.target.value) });

    return (
        <Card className="mr-3" style={cardStyle} >
            <CardBody>
                <h3>Filter</h3>
                <FormGroup>
                    <Label form="nameFilter">Name</Label>
                    <Input type="text" id="nameFilter" placeholder="with a placeholder" onChange={changeName} />
                </FormGroup>
                <FormGroup>
                    <Label>Cost</Label>
                    <div className="d-flex justify-content-around">
                        <Input className="w-50 mr-3" type="text" placeholder="min" onChange={changeMinCost} />
                        <Input className="w-50" type="text" placeholder="max" onChange={changeMaxCost} />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label>Weight</Label>
                    <div className="d-flex justify-content-around">
                        <Input className="w-50 mr-3" type="text" placeholder="min" onChange={changeMinWeight} />
                        <Input className="w-50" type="text" placeholder="max" onChange={changeMaxCost} />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label>Calories</Label>
                    <div className="d-flex justify-content-around">
                        <Input className="w-50 mr-3" type="text" placeholder="min" onChange={changeMinCalories} />
                        <Input className="w-50" type="text" placeholder="max" onChange={changeMaxCalories} />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label>Coocking time</Label>
                    <div className="d-flex justify-content-around">
                        <Input className="w-50 mr-3" type="text" placeholder="min" onChange={changeMinCoockingTime} />
                        <Input className="w-50" type="text" placeholder="max" onChange={changeMaxCoockingTime} />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Button className="w-100" color="primary"> Filter</Button>
                </FormGroup>
                <FormGroup>
                    <Button className="w-100" color="secondary"> Reset</Button>
                </FormGroup>
            </CardBody>
        </Card>
    )
}

export default Filter;