import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

const Footer = (props) => {
    const style = {
        bottom: "0",
        right: "15px",
        weight: "100%",
        position: "fixed",
        textAlign: "left"
    };

    return (
        <footer style={style} >
            <p>{props.data.filteredDishes} отфильтрованных записей из {props.data.countAllDishes} записей</p>
        </footer>
        )
} 

export default Footer;