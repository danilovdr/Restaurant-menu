import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { Card, CardBody, FormGroup, Label, Input, Button } from 'reactstrap';

const Filter = (props) => {
    const [name, setName] = useState("");
    const changeName = (event) => setName(event.target.value);

    const [cost, setCost] = useState({ min: "", max: "" });
    const changeMinCost = (event) => setCost({ min: parseInt(event.target.value), max: cost.max });
    const changeMaxCost = (event) => setCost({ min: cost.min, max: parseInt(event.target.value) });

    const [weight, setWeight] = useState({ min: "", max: "" });
    const changeMinWeight = (event) => setWeight({ min: parseInt(event.target.value), max: weight.max });
    const changeMaxWeight = (event) => setWeight({ min: weight.min, max: parseInt(event.target.value) });

    const [calories, setCalories] = useState({ min: "", max: "" });
    const changeMinCalories = (event) => setCalories({ min: parseInt(event.target.value), max: calories.max });
    const changeMaxCalories = (event) => setCalories({ min: calories.min, max: parseInt(event.target.value) });

    const [coockingTime, setCoockingTime] = useState({ min: "", max: "" });
    const changeMinCoockingTime = (event) => setCoockingTime({ min: parseInt(event.target.value), max: coockingTime.max });
    const changeMaxCoockingTime = (event) => setCoockingTime({ min: coockingTime.min, max: parseInt(event.target.value) });

    const filter = () => {
        let filters = {
            name: name,
            cost: cost,
            weight: weight,
            calories: calories,
            coockingTime: coockingTime
        };

        props.setFilterParams(filters);
    }

    const reset = () => {
        setName("");
        setCost({ min: "", max: ""});
        setWeight({ min: "", max: ""});
        setCalories({ min: "", max: ""});
        setCoockingTime({ min: "", max: ""});
    }

    return (
        <Card>
            <CardBody>
                <h3>Фильтер</h3>
                <FormGroup>
                    <Label form="nameFilter">Имя</Label>
                    <Input type="text" id="nameFilter" placeholder="Имя" value={name} onChange={changeName} />
                </FormGroup>
                <FormGroup>
                    <Label>Цена</Label>
                    <div className="d-flex justify-content-around">
                        <Input className="w-50 mr-3" type="text" placeholder="Мин" value={cost.min} onChange={changeMinCost} />
                        <Input className="w-50" type="text" placeholder="Макс" value={cost.max}  onChange={changeMaxCost} />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label>Вес</Label>
                    <div className="d-flex justify-content-around">
                        <Input className="w-50 mr-3" type="text" placeholder="Мин" value={weight.min} onChange={changeMinWeight} />
                        <Input className="w-50" type="text" placeholder="Макс" value={weight.max} onChange={changeMaxWeight} />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label>Калорийность</Label>
                    <div className="d-flex justify-content-around">
                        <Input className="w-50 mr-3" type="text" placeholder="Мин" value={calories.min} onChange={changeMinCalories} />
                        <Input className="w-50" type="text" placeholder="Макс" value={calories.max} onChange={changeMaxCalories} />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label>Время приготовления</Label>
                    <div className="d-flex justify-content-around">
                        <Input className="w-50 mr-3" type="text" placeholder="Мин" value={coockingTime.min} onChange={changeMinCoockingTime} />
                        <Input className="w-50" type="text" placeholder="Макс" value={coockingTime.max} onChange={changeMaxCoockingTime} />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Button className="w-100" color="primary" onClick={filter}>Найти</Button>
                </FormGroup>
                <FormGroup>
                    <Button className="w-100" color="secondary" onClick={reset}>Сбросить</Button>
                </FormGroup>
            </CardBody>
        </Card>
    )
}

export default Filter;