import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Background from "../img/spinner.gif";

const LoadScreen = (props) => {
    let style = {
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: "100",
        height: "100vh",
        width: "100vw",
        backgroundColor: "white",
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    };

    if (props.visible) {
        style.display = "flex";
    } else {
        style.display = "none";
    }

    return (
        <div style={style}>
        </div>
    )
}

export default LoadScreen;