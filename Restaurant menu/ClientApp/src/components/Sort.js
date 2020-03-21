import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardBody, Label, Input } from 'reactstrap';

const Sort = (props) => {
    const sort = (event) => {
        switch (event.target.value) {
            case "По умолчанию":
                props.setSortParams({ fieldName: null, ascending: true });
                break;
            case "Дата создания: по возрастанию":
                props.setSortParams({ fieldName: "CreateDate", ascending: true });
                break;
            case "Дата создания: по убыванию":
                props.setSortParams({ fieldName: "CreateDate", ascending: false });
                break;
            case "Имя: в алфавитном порядке":
                props.setSortParams({ fieldName: "Name", ascending: true });
                break;
            case "Имя: в обратном порядке":
                props.setSortParams({ fieldName: "Name", ascending: false });
                break;
            case "Ингредиенты: в алфавитном порядке":
                props.setSortParams({ fieldName: "Ingredients", ascending: true });
                break;
            case "Ингредиенты: в обратном порядке":
                props.setSortParams({ fieldName: "Ingredients", ascending: false });
                break;
            case "Описание: в алфавитном порядке":
                props.setSortParams({ fieldName: "Description", ascending: true });
                break;
            case "Описание: в обратном порядке":
                props.setSortParams({ fieldName: "Description", ascending: false });
                break;
            case "Цена: по возрастанию":
                props.setSortParams({ fieldName: "Cost", ascending: true });
                break;
            case "Цена: по убыванию":
                props.setSortParams({ fieldName: "Cost", ascending: false });
                break;
            case "Вес: по возрастанию":
                props.setSortParams({ fieldName: "Weight", ascending: true });
                break;
            case "Вес: по убыванию":
                props.setSortParams({ fieldName: "Weight", ascending: false });
                break;
            case "Калорийность: по возрастанию":
                props.setSortParams({ fieldName: "Calories", ascending: true });
                break;
            case "Калорийность: по убыванию":
                props.setSortParams({ fieldName: "Calories", ascending: false });
                break;
            case "Время приготовления: по возрастанию":
                props.setSortParams({ fieldName: "CoockingTime", ascending: true });
                break;
            case "Время приготовления: по убыванию":
                props.setSortParams({ fieldName: "CoockingTime", ascending: false });
                break;
        }
    }

    return (
        <Card>
            <CardBody>
                <Label for="sortSelect">Сортировать по:</Label>
                <Input className="w-25" type="select" name="select" id="sortSelect" onChange={sort}>
                    <option>По умолчанию</option>
                    <option>Дата создания: по возрастанию</option>
                    <option>Дата создания: по убыванию</option>
                    <option>Имя: в алфавитном порядке</option>
                    <option>Имя: в обратном порядке</option>
                    <option>Ингредиенты: в алфавитном порядке</option>
                    <option>Ингредиенты: в обратном порядке</option>
                    <option>Описание: в алфавитном порядке</option>
                    <option>Описание: в обратном порядке</option>
                    <option>Цена: по возрастанию</option>
                    <option>Цена: по убыванию</option>
                    <option>Вес: по возрастанию</option>
                    <option>Вес: по убыванию</option>
                    <option>Калорийность: по возрастанию</option>
                    <option>Калорийность: по убыванию</option>
                    <option>Время приготовления: по возрастанию</option>
                    <option>Время приготовления: по убыванию</option>
                </Input>
            </CardBody>
        </Card>
    )
}

export default Sort;