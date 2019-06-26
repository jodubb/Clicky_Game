import React from "react";
import "../components/Card.css"
const Card = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image} width={150} height={150} src = {(props.image)}/>
   
    </div>
  </div>
);

export default Card;