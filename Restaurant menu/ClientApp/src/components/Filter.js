import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { Card, CardBody, FormGroup, Label, Input, Button } from 'reactstrap';

const Filter = (props) => {
    const [name, setName] = useState(null);
    const changeName = (event) => setName(event.target.value);

    const [ingredients, setIngredients] = useState("");
    const changeIngredients = (event) => setIngredients(event.target.value);

    const [description, setDescription] = useState("");
    const changeDescription = (event) => setDescription(event.target.value);

    const [minCost, setMinCost] = useState("");
    const [maxCost, setMaxCost] = useState("");
    const changeMinCost = (event) => setMinCost(event.target.value);
    const changeMaxCost = (event) => setMaxCost(event.target.value);

    const [minWeight, setMinWeight] = useState("");
    const [maxWeight, setMaxWeight] = useState("");
    const changeMinWeight = (event) => setMinWeight(event.target.value);
    const changeMaxWeight = (event) => setMaxWeight(event.target.value);

    const [minCalories, setMinCalories] = useState("");
    const [maxCalories, setMaxCalories] = useState("");
    const changeMinCalories = (event) => setMinCalories(event.target.value);
    const changeMaxCalories = (event) => setMaxCalories(event.target.value);

    const [minCoockingTime, setMinCoockingTime] = useState("");
    const [maxCoockingTime, setMaxCoockingTime] = useState("");
    const changeMinCoockingTime = (event) => setMinCoockingTime(event.target.value);
    const changeMaxCoockingTime = (event) => setMaxCoockingTime(event.target.value);

    const filter = () => {
        let filters = {
            name: name,
            ingredients: ingredients,
            description: description,
            minCost: parseInt(minCost),
            maxCost: parseInt(maxCost),
            minWeight: parseInt(minWeight),
            maxWeight: parseInt(maxWeight),
            minCalories: parseInt(minCalories),
            maxCalories: parseInt(maxCalories),
            minCoockingTime: parseInt(minCoockingTime),
            maxCoockingTime: parseInt(maxCoockingTime)
        };

        props.setFilterParams(filters);
    };

    const reset = () => {
        setName("");
        setIngredients("");
        setDescription("");
        setMinCost("");
        setMaxCost("");
        setMinWeight("");
        setMaxWeight("");
        setMinCalories("");
        setMaxCalories("");
        setMinCoockingTime("");
        setMaxCoockingTime("");
    };

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
                        <Input className="w-50 mr-3" type="text" placeholder="Мин" value={minCost} onChange={changeMinCost} />
                        <Input className="w-50" type="text" placeholder="Макс" value={maxCost} onChange={changeMaxCost} />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label>Вес грамм</Label>
                    <div className="d-flex justify-content-around">
                        <Input className="w-50 mr-3" type="text" placeholder="Мин" value={minWeight} onChange={changeMinWeight} />
                        <Input className="w-50" type="text" placeholder="Макс" value={maxWeight} onChange={changeMaxWeight} />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label>Калорийность на 100 грамм</Label>
                    <div className="d-flex justify-content-around">
                        <Input className="w-50 mr-3" type="text" placeholder="Мин" value={minCalories} onChange={changeMinCalories} />
                        <Input className="w-50" type="text" placeholder="Макс" value={maxCalories} onChange={changeMaxCalories} />
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label>Время приготовления в минутах</Label>
                    <div className="d-flex justify-content-around">
                        <Input className="w-50 mr-3" type="text" placeholder="Мин" value={minCoockingTime} onChange={changeMinCoockingTime} />
                        <Input className="w-50" type="text" placeholder="Макс" value={maxCoockingTime} onChange={changeMaxCoockingTime} />
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