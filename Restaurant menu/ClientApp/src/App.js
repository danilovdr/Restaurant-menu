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
    const [sortParams, setSortParams] = useState(null);
    const [filterParams, setFilterParams] = useState(null);
    const [url, setUrl] = useState("");

    useEffect(() => {
        let newUrl = "https://localhost:44334/api/dish/?";

        newUrl += "SizePage=" + sizePage + "&NumberPage=" + numberPage;

        if (sortParams && sortParams.fieldName && sortParams.ascending != null) {
            newUrl += "&FieldName=" + sortParams.fieldName + "&ByAscending=" + sortParams.ascending;
        }

        if (filterParams) {
            if (filterParams.name) newUrl += "&Name=" + filterParams.name;

            if (filterParams.cost.min) newUrl += "&MinCost=" + filterParams.cost.min;
            if (filterParams.cost.max) newUrl += "&MaxCost=" + filterParams.cost.max;

            if (filterParams.weight.min) newUrl += "&MinWeight=" + filterParams.weight.min;
            if (filterParams.weight.max) newUrl += "&MaxWeight=" + filterParams.weight.max;

            if (filterParams.calories.min) newUrl += "&MinCalories=" + filterParams.calories.min;
            if (filterParams.calories.max) newUrl += "&MaxCalories=" + filterParams.calories.max;

            if (filterParams.coockingTime.min) newUrl += "&MinCoockingTime=" + filterParams.coockingTime.min;
            if (filterParams.coockingTime.max) newUrl += "&MaxCoockingTime=" + filterParams.coockingTime.max;
        }

        setUrl(newUrl);
    }, [numberPage, sortParams, filterParams]);

    //Data
    const [data, setData] = useState({ dishes: [], filteredDishes: 0, totalPages: 0, countAllDishes: 0 });

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

    useEffect(() => {
        const fetchData = async () => {
            setLoadScreen(true);
            let resp = await fetch(url);
            setLoadScreen(false);

            if (resp.ok) {
                let data = await resp.json();
                setData(data);
            }
        };

        fetchData();
    }, [url, countUpdates]);

    console.log(data);

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
                        <Col lg={2}>
                            <Filter setFilterParams={setFilterParams} />
                        </Col>
                        <Col lg={9}>
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
