import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { Card, CardBody, FormGroup, Label, Input, Button } from 'reactstrap';

const Footer = (props) => {
    const style = {
        bottom: "0",
        left: "15px",
        weight: "100%",
        position: "fixed",
        textAlign: "left"
    };

    console.log(props.data.dishes.length);

    return (
        <footer style={style} >
            <p>{props.data.dishes.length} отфильтрованных записей из {props.data.countAllDishes} записей</p>
        </footer>
        )
} 

export default Footer;