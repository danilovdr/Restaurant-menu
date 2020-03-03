import React, { Component } from 'react';
import './custom.css'
import { Header } from './components/Header';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <div className="App">
                <Header />
            </div>
        );
    }
}
