import React, { useState, useEffect } from 'react';
import './custom.css'
import { Container, Row, Col, Modal, ModalBody } from 'reactstrap';
import Spinner from './img/spinner.gif';
import Header from './components/Header';
import Filter from './components/Filter';
import Sort from './components/Sort';
import Dish from './components/Dish';
import Footer from './components/Footer';
import DishPagination from './components/DishPagination';

const App = () => {
    //LoadScreen
    const [loadScreen, setLoadScreen] = useState(false);

    const [countUpdates, setCountUpdates] = useState(0);
    const update = () => setCountUpdates(countUpdates + 1);

    //Params
    const sizePage = 20;
    const [numberPage, setNumberPage] = useState(0);
    const [sortParams, setSortParams] = useState({
        fieldName: null, ascending: true
    });

    const [filterParams, setFilterParams] = useState({
        name: null, ingredients: null, description: null, minCost: null, maxCost: null, minWeight: null, maxWeight: null, minCalories: null, maxCalories: null, minCoockingTime: null, MaxCoockingTime: null
    });

    useEffect(() => {
        const getData = async () => {
            let url = "https://localhost:44334/api/dish/";

            setLoadScreen(true);
            let resp = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    SizePage: sizePage,
                    NumberPage: numberPage,
                    FieldName: sortParams.fieldName,
                    ByAscending: sortParams.ascending,
                    Name: filterParams.name,
                    Ingredients: filterParams.ingredients,
                    Description: filterParams.description,
                    MinCost: filterParams.minCost,
                    MaxCost: filterParams.maxCost,
                    MinWeight: filterParams.minWeight,
                    MaxWeight: filterParams.maxWeight,
                    MinCalories: filterParams.minCalories,
                    MaxCalories: filterParams.maxCalories,
                    MinCoockingTime: filterParams.minCoockingTime,
                    MaxCoockingTime: filterParams.MaxCoockingTime
                })
            });

            if (resp.ok) {
                let json = await resp.json();
                setData(json);

                if (numberPage >= json.totalPages) {
                    setNumberPage(numberPage - 1);
                }
            }

            setLoadScreen(false);
        }

        getData();
    }, [numberPage, sortParams, filterParams, countUpdates]);

    //Data
    const [data, setData] = useState({ dishes: [], countAllDishes: 0, totalPages: 0 });

    const createDishes = () => {
        return data.dishes.map(item =>
            <Col key={item.id} className="p-3" lg={3}>
                <Dish
                    dish={item}
                    update={update}
                    setLoadScreen={setLoadScreen} />
            </Col>
        );
    }

    return (
        <>
            <div className="App" >
                <Modal isOpen={loadScreen} fade={false}>
                    <ModalBody className="text-center">
                        <img src={Spinner} />
                    </ModalBody>
                </Modal>
                <Header
                    update={update}
                    setLoadScreen={setLoadScreen} />
                <Container fluid={true}>
                    <Row className="justify-content-around">
                        <Col className="mt-3" lg={2}>
                            <Filter setFilterParams={setFilterParams} />
                        </Col>
                        <Col className="mt-3" lg={9}>
                            <Sort setSortParams={setSortParams} />
                            <Row>
                                {createDishes()}
                            </Row>
                            <Row>
                                <DishPagination
                                    totalPages={data.totalPages}
                                    numberPage={numberPage}
                                    setNumberPage={setNumberPage} />
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer data={data} />
        </>
    );
}


export default App;
