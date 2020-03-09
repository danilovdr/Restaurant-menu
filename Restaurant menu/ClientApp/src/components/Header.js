import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);

        this.headerStyle = {
            display: "flex",
            alignItems: "center",
            padding: "15px",
            backgroundColor: "#9DA5A2"
        };

        this.buttonStyle = {
            position: "absolute",
            marginLeft: "20px"
        }

        this.titleStyle = {
            display: "block",
            margin: "auto"
        }
    }

    render() {
        return (
            <div style={this.headerStyle}>
                <h1 style={this.titleStyle}>Меню ресторана</h1>
            </div>
        )
    }
}

export default Header;
