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
    const [sortParam, setSortParam] = useState({ fieldName: null, ascending: null });
    const [filterParam, setFilterParam] = useState({
        name: null,
        cost: { min: -1, max: -1 },
        weight: { min: -1, max: -1 },
        calories: { min: -1, max: -1 },
        coockingTime: { min: -1, max: -1 }
    });

    //const updateDishes = () => {
    //    let url = "https://localhost:44334/api/dish/";

    //    if (sortParam.fieldName != null && sortParam.ascending != null) {
    //        url += "?fieldNameSort=" + sortParam.fieldName + "&byAscending=" + sortParam.ascending;
    //    }

    //    fetch(url)
    //        .then(resp => resp.json())
    //        .then(com => setDishes(com));
    //}

    const updateDishes = async () => {
        let url = "https://localhost:44334/api/dish/";

        if (sortParam.fieldName != null && sortParam.ascending != null) {
            url += "?fieldNameSort=" + sortParam.fieldName + "&byAscending=" + sortParam.ascending;
        }

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
    }, [sortParam]);

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
