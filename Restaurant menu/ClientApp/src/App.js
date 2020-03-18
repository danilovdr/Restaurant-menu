import React, { useState, useEffect } from 'react';
import './custom.css'
import Header from './components/Header';
import Main from './components/Main';
import LoadScreen from './components/LoadScreen';

const App = () => {
    //dishes
    const [dishes, setDishes] = useState([]);

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
    const updateDishes = async (sortParams, filterParams) => {
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

    useEffect(() => { updateDishes() }, []);

    return (
        <>
            <LoadScreen visible={loadVisible} />
            <div className="App" style={{ display: appDisplay }} >
                <Header />
                <Main updateDishes={updateDishes} dishes={dishes} />
            </div>
        </>
    );
}


export default App;
