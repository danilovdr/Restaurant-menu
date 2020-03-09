import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import Filter from './Filter';
import DishForm from './DishForm';
import Dish from './Dish';

const Main = () => {
    const mainStyle = {
        display: "flex",
        justifyContent: "center",
        marginTop: "30px"
    }


    const getDishes = () => {
        let url = "https://localhost:44334/api/dish";
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url, false);
        xhr.send();
        console.log(xhr.responseText);
        return JSON.parse(xhr.responseText);
    }

    const [dishes, setDishes] = useState(getDishes);

    return (
        <div style={mainStyle} >
            <Filter />
            <div>
                <DishForm />
                {dishes.map(item =>
                    <Dish key={item.id}
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        cost={item.cost}
                        weight={item.weight}
                        calories={item.calories}
                        coockingTime={item.coockingTime} />)}
            </div>
        </div>
    )
}

export default Main;