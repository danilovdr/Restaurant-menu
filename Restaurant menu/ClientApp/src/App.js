import React, { useState, useEffect } from 'react';
import './custom.css'
import { Container } from 'reactstrap';
import Filter from './components/Filter';
import DishForm from './components/DishForm';
import Dish from './components/Dish';
import SortPanel from './components/SortPanel';

const App = () => {
    const headerStyle = {
        backgroundColor: "#5995DD",
        padding: "10px",
        textAlign: "center"
    };

    const contentStyle = {
        width: "1000px"
    };

    const [dishes, setDishes] = useState([]);
    const [sortParams, setSortParam] = useState({ fieldName: null, ascending: null });
    const [filterParams, setFilterParam] = useState({
        name: null,
        cost: { min: null, max: null },
        weight: { min: null, max: null },
        calories: { min: null, max: null },
        coockingTime: { min: null, max: null }
    });

    const updateDishes = () => {
        let url = "https://localhost:44334/api/dish/?";

        if (sortParams.fieldName != null && sortParams.ascending != null) {
            url += "FieldName=" + sortParams.fieldName + "&ByAscending=" + sortParams.ascending;
        }

        if (filterParams.name) url += "&FilterName=" + filterParams.name;

        //url += "&Name=" + filterParams.name;

        if (filterParams.cost.min) url += "&MinCost=" + filterParams.cost.min;
        if (filterParams.cost.max) url += "&MaxCost=" + filterParams.cost.max;

        //url += "&MinCost=" + filterParams.cost.min;
        //url += "&MaxCost=" + filterParams.cost.max;

        if (filterParams.weight.min) url += "&MinWeight=" + filterParams.weight.min;
        if (filterParams.weight.max) url += "&MaxWeight=" + filterParams.weight.max;

        //url += "&MinWeight=" + filterParams.weight.min;
        //url += "&MaxWeight=" + filterParams.weight.max;

        if (filterParams.calories.min) url += "&MinCalories=" + filterParams.calories.min;
        if (filterParams.calories.max) url += "&MaxCalories=" + filterParams.calories.max;

        //url += "&MinCalories=" + filterParams.calories.min;
        //url += "&MaxCalories=" + filterParams.calories.max;

        if (filterParams.coockingTime.min) url += "&MinCoockingTime=" + filterParams.coockingTime.min;
        if (filterParams.coockingTime.max) url += "&MaxCoockingTime=" + filterParams.coockingTime.max;

        //url += "&MinCoockingTime=" + filterParams.coockingTime.min;
        //url += "&MaxCoockingTime=" + filterParams.coockingTime.max;

        console.log(url);

        fetch(url)
            .then(resp => resp.json())
            .then(com => setDishes(com));
    }

    const createDish = (dish) => {
        let url = "https://localhost:44334/api/dish/";

        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(dish)
        }).then(() => updateDishes())
    }

    const deleteDish = (id) => {
        let url = "https://localhost:44334/api/dish/";

        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(id)
        }).then(() => updateDishes());
    };

    const sortDishes = (fieldName, ascending) => {
        setSortParam({ fieldName: fieldName, ascending: true });
    }

    const filterDishes = (filters) => {
        setFilterParam(filters);
    }

    useEffect(() => {
        updateDishes();
    }, [sortParams, filterParams]);

    return (
        <div className="App" >
            <Container style={headerStyle} fluid={true}>
                <h1>Restaurant menu</h1>
            </Container>
            <Container fluid={true}>
                <main className="d-flex justify-content-center mt-2">
                    <Filter filter={filterDishes} />
                    <div style={contentStyle} >
                        <DishForm createDish={createDish} />
                        <SortPanel sortDish={sortDishes} />
                        <div className="d-flex flex-wrap justify-content-start">
                            {dishes.map(item =>
                                <Dish key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    description={item.description}
                                    cost={item.cost}
                                    weight={item.weight}
                                    calories={item.calories}
                                    coockingTime={item.coockingTime}
                                    deleteDish={deleteDish} />)}
                        </div>
                    </div>
                </main>
            </Container>
        </div>
    );
}


export default App;
