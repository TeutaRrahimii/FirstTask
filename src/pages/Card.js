import React from "react";
import "./Cards.css";


const Card = (props) => (
    <div className="card">
    <div className="cardBox">
        <div className="size">
        <h1 className="id">{props.id}</h1>
        <p className="background bck">{props.background}</p>
        <h1 className="image">{props.image}</h1>
        <h1 className="name">{props.name}</h1>
        <p className="description">{props.description}</p>
        <p className="btn">{props.button}</p>

    </div></div></div>
  );
  
 export default Card;