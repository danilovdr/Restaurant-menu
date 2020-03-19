import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import Form from './Form';
import Filter from './Filter';
import Dish from './Dish';
import Sort from './Sort';

const Main = (props) => {
    const contentStyle = {
        width: "1000px"
    };

    const [sortParams, setSortParams] = useState(null);
    const [filterParams, setFilterParams] = useState(null);

    const updateDishes = () => {
        props.updateDishes(sortParams, filterParams);
    }

    useEffect(() => { updateDishes() }, [sortParams, filterParams]);

    return (
        <Container fluid={true} className="d-flex justify-content-center mt-2">
            <Filter setFilterParams={setFilterParams} />
            <div style={contentStyle} >
                <Form updateDishes={updateDishes} />
                <Sort setSortParams={setSortParams} />
                <div className="d-flex flex-wrap justify-content-start">
                    {props.dishes.map(item =>
                        <Dish key={item.id}
                            id={item.id}
                            createDate={item.createDate}
                            name={item.name}
                            description={item.description}
                            cost={item.cost}
                            weight={item.weight}
                            calories={item.calories}
                            coockingTime={item.coockingTime}
                            showLoadScreen={props.showLoadScreen}
                            updateDishes={updateDishes} />)}
                </div>
            </div>
        </Container>
    )
}

export default Main;