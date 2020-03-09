import React, { Component } from 'react';
import './custom.css'
import { Container, Row, Col } from 'reactstrap';
import Header from './components/Header';
import Main from './components/Main';

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
                <Header />
                <Main />
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
