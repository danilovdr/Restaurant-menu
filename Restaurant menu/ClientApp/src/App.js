import React, { Component } from 'react';
import './custom.css'
import Header from './components/Header';
import DishForm from './components/DishForm';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <div className="App">
                <Header />
                <DishForm visible="hidden" />
            </div>
        );
    }
}
