import React, { Component } from 'react';
import './custom.css'
import { Container } from 'reactstrap';
import Header from './components/Header';
import DishForm from './components/DishForm';
import Dish from './components/Dish';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayForm: "none",
        };

        this.displayForm = this.displayForm.bind(this);
        this.getDishes = this.getDishes.bind(this);
    }

    static displayName = App.name;

    render() {
        //let dishes = this.getDishes();
        return (
            <div className="App">
                <Container className="p-0" fluid={true}>
                    <Header displayForm={this.displayForm} />
                    <DishForm display={this.state.displayForm} />
                    <Dish
                        name="test name"
                        disecription="test description test description test description test description"
                        cost="100$"
                        weight="250 gram"
                        calories="1250"
                        coockingTime="75 min" />
                </Container>
            </div>
        );
    }

    displayForm() {

        if (this.state.displayForm === "none") {
            this.setState({ displayForm: "block" });
        } else {
            this.setState({ displayForm: "none" });
        }
    }

    getDishes() {
        let url = "https://localhost:44334/api/dish/";
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url, false);
        xhr.send();
        return JSON.parse(xhr.responseText);
    }
}
