import React, { Component } from 'react';
import './custom.css'
import Header from './components/Header';
import DishForm from './components/DishForm';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayForm: "none"
        };

        this.displayForm = this.displayForm.bind(this);
    }

    static displayName = App.name;

    render() {
        return (
            <div className="App">
                <Header displayForm={this.displayForm} />
                <DishForm display={this.state.displayForm} />
            </div>
        );
    }

    displayForm() {
        
        if (this.state.displayForm == "none") {
            this.setState({ displayForm: "block" });
        } else {
            this.setState({ displayForm: "none" });
        }
        console.log(this.state);
    }
}
