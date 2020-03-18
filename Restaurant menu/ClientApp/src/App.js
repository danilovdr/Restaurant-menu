import React, { useState, useEffect } from 'react';
import './custom.css'
import { Container } from 'reactstrap';
import Form from './components/Form';
import Filter from './components/Filter';
import Dish from './components/Dish';
import Sort from './components/Sort';
import LoadScreen from './components/LoadScreen';

const App = () => {
    //Styles
    const headerStyle = {
        backgroundColor: "#5995DD",
        padding: "10px",
        textAlign: "center"
    };

    const contentStyle = {
        width: "1000px"
    };

    //dishes
    const [dishes, setDishes] = useState([]);
    const [sortParams, setSortParams] = useState(null);
    const [filterParams, setFilterParams] = useState(null);

    //LoadScreen
    const [loadVisible, setLoadVisible] = useState(false);
    const [appDisplay, setAppDisplay] = useState("block");

    const showLoadScreen = () => {
        setAppDisplay("none");
        setLoadVisible(true);
    }

    const hideLoadScreen = () => {
        setLoadVisible(false);
        setAppDisplay("block");
    }

    //GetAllDishes
    const updateDishes = async () => {
        showLoadScreen();

        let url = "https://localhost:44334/api/dish/?";

        if (sortParams && sortParams.fieldName && sortParams.ascending != null) {
            url += "FieldName=" + sortParams.fieldName + "&ByAscending=" + sortParams.ascending;
        }

        if (filterParams) {

            if (filterParams.name) url += "&Name=" + filterParams.name;

            if (filterParams.cost.min) url += "&MinCost=" + filterParams.cost.min;
            if (filterParams.cost.max) url += "&MaxCost=" + filterParams.cost.max;

            if (filterParams.weight.min) url += "&MinWeight=" + filterParams.weight.min;
            if (filterParams.weight.max) url += "&MaxWeight=" + filterParams.weight.max;

            if (filterParams.calories.min) url += "&MinCalories=" + filterParams.calories.min;
            if (filterParams.calories.max) url += "&MaxCalories=" + filterParams.calories.max;

            if (filterParams.coockingTime.min) url += "&MinCoockingTime=" + filterParams.coockingTime.min;
            if (filterParams.coockingTime.max) url += "&MaxCoockingTime=" + filterParams.coockingTime.max;
        }
        let resp = await fetch(url);

        if (resp.ok) {
            let data = await resp.json();
            setDishes(data);
            hideLoadScreen();
        }
    }

    useEffect(() => { updateDishes() }, [sortParams, filterParams]);

    return (
        <>
            <LoadScreen visible={loadVisible} />
            <div className="App" style={{ display: appDisplay }} >
                <Container style={headerStyle} fluid={true}>
                    <h1>Restaurant menu</h1>
                </Container>
                <Container fluid={true}>
                    <main className="d-flex justify-content-center mt-2">
                        <Filter setFilterParams={setFilterParams} />
                        <div style={contentStyle} >
                            <Form updateDishes={updateDishes} />
                            <Sort setSortParams={setSortParams} />
                            <div className="d-flex flex-wrap justify-content-start">
                                {dishes.map(item =>
                                    <Dish key={item.id}
                                        id={item.id}
                                        createDate={item.createDate}
                                        name={item.name}
                                        description={item.description}
                                        cost={item.cost}
                                        weight={item.weight}
                                        calories={item.calories}
                                        coockingTime={item.coockingTime}
                                        updateDishes={updateDishes} />)}
                            </div>
                        </div>
                    </main>
                </Container>
            </div>
        </>
    );
}


export default App;
