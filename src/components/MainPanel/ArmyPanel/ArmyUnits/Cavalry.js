import React from "react";
import cavalry from "../../../../images/Cavalry.png"

const Cavalry = (props) => {
    return (<div className="cavalry">
        <img src={cavalry} className="cavalry__image" alt="cavalry__image"/>
        <div className="cavalry__number">{props.cavalryNumber}</div>
    </div>)
};

export default Cavalry;