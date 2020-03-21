import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { Card, CardBody, FormGroup, Label, Input, Button } from 'reactstrap';

const Filter = (props) => {
    const [name, setName] = useState("");
    const changeName = (event) => setName(event.target.value);

    const [ingredients, setIngredients] = useState("");
    const changeIngredients = (event) => setIngredients(event.target.value);

    const [description, setDescription] = useState("");
    const changeDescription = (event) => setDescription(event.target.value);

    const [cost, setCost] = useState({ min: "", max: "" });
    const changeMinCost = (event) => setCost({ min: event.target.value, max: cost.max });
    const changeMaxCost = (event) => setCost({ min: cost.min, max: event.target.value });

    const [weight, setWeight] = useState({ min: "", max: "" });
    const changeMinWeight = (event) => setWeight({ min: event.target.value, max: weight.max });
    const changeMaxWeight = (event) => setWeight({ min: weight.min, max: event.target.value });

    const [calories, setCalories] = useState({ min: "", max: "" });
    const changeMinCalories = (event) => setCalories({ min: event.target.value, max: calories.max });
    const changeMaxCalories = (event) => setCalories({ min: calories.min, max: event.target.value });

    const [coockingTime, setCoockingTime] = useState({ min: "", max: "" });
    const changeMinCoockingTime = (event) => setCoockingTime({ min: event.target.value, max: coockingTime.max });
    const changeMaxCoockingTime = (event) => setCoockingTime({ min: coockingTime.min, max: event.target.value });

    const filter = () => {
        console.log(cost);

        let filters = {
            name: name,
            ingredients: ingredients,
            description: description,
            cost: cost,
            weight: weight,
            calories: calories,
            coockingTime: coockingTime
        };

        props.setFilterParams(filters);
    }

    const reset = () => {
        setName("");
        setIngredients("");
        setDescription("");
        setCost({ min: "", max: ""});
        setWeight({ min: "", max: ""});
        setCalories({ min: "", max: ""});
        setCoockingTime({ min: "", max: ""});
    }

    return (
        <Card>
            <CardBody>
                <h3>Фильтр</h3>
                <FormGroup>
                    <Label>Имя</Label>
                    <Input type="text" placeholder="Имя" value={name} onChange={changeName} />
                </FormGroup>
                <FormGroup>
                    <Label>Ингредиенты</Label>
                    <Input type="text" placeholder="Ингредиенты" value={ingredients} onChange={changeIngredients} />
                </FormGroup>
                <FormGroup>
                    <Label>Описание</Label>
                    <Input type="text" placeholder="Описание" value={description} onChange={changeDescription} />
                </FormGroup>
                <FormGroup>
                    <Label>Цена</Label>
                    <div className="d-flex justify-content-around">
                        <Input className="w-50 mr-3" type="text" placeholder="Мин" value={cost.min} onChange={changeMinCost} />
                        <Input className="w-50" type="text" placeholder="Макс" value={cost.max}  onChange={changeMaxCost} />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label>Вес грамм</Label>
                    <div className="d-flex justify-content-around">
                        <Input className="w-50 mr-3" type="text" placeholder="Мин" value={weight.min} onChange={changeMinWeight} />
                        <Input className="w-50" type="text" placeholder="Макс" value={weight.max} onChange={changeMaxWeight} />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label>Калорийность на 100 грамм</Label>
                    <div className="d-flex justify-content-around">
                        <Input className="w-50 mr-3" type="text" placeholder="Мин" value={calories.min} onChange={changeMinCalories} />
                        <Input className="w-50" type="text" placeholder="Макс" value={calories.max} onChange={changeMaxCalories} />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label>Время приготовления в минутах</Label>
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