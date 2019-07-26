import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="img-card">
            <img className="fit" alt={props.name} src={props.image} />
        </div>
    );
}

export default Card;