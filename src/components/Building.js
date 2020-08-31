import React from "react";
import farm from "../images/Farm.png";
import house from "../images/House.png";

const buildingImages = {"farm": farm, "house": house};

const Building = (props) => {
    return (<div className="building" unselectable="on">
        <img onClick={() => {props.handleAdding({name: props.name, image: props.image, price:props.price})}} className="building__image"
             src={buildingImages[props.image]} alt={props.image} draggable={"false"} unselectable={"on"}/>
        <div className="building__name">{props.name}</div>
    </div>)
};
export default Building