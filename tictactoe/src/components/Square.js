import React from "react";
import "./Square.css";

const Square = ({ onClick, value, higlightedLines }) => {
    const className = "squareButton" + (higlightedLines ? "highLight" : "");

    return (
        <button className={className} onClick={onClick}>
            {value}
        </button>
    )

}

export default Square;