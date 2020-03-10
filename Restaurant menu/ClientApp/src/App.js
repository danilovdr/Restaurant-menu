import React, { useState } from 'react';
import './custom.css'
import { Container } from 'reactstrap';
import Filter from './components/Filter';
import DishForm from './components/DishForm';
import Dish from './components/Dish';
import SortPanel from './components/SortPanel';

const App = () => {
    const url = "https://localhost:44334/api/dish/";
    const headerStyle = {
        backgroundColor: "#5995DD",
        padding: "10px",
        textAlign: "center"
    };

    const contentStyle = {
        width: "1000px"
    };

    const getDishes = () => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url, false);
        xhr.send();
        return JSON.parse(xhr.responseText);
    }

    const [dishes, setDishes] = useState(getDishes());

    const createDish = (dish) => {
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(dish)
        }).then(() => {
            let newDishes = getDishes();
            setDishes(newDishes);
        });
    }

    const deleteDish = (id) => {
        fetch(url, {
            method: "DELETE",
            headers: {
                "Contenty-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(id)
        }).then(() => {
            let newDishes = dishes.filter(item => item.id !== id);
            setDishes(newDishes);
        });
    }

    const sortDish = (fieldName) => {

    }

    return (
        <div className="App">
            <Container style={headerStyle} fluid={true}>
                <h1>Restaurant menu</h1>
            </Container>
            <Container fluid={true}>
                <main className="d-flex justify-content-center mt-2">
                    <Filter />
                    <div style={contentStyle} >
                        <DishForm createDish={createDish} />
                        <SortPanel sortDish={sortDish} />
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
