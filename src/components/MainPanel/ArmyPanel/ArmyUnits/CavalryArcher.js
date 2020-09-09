import React from "react";
import cavalryArcher from "../../../../images/CavalryArcher.png"

const CavalryArcher = (props) => {
    return (<div className="cavalryArcher">
        <img src={cavalryArcher} className="cavalryArcher__image" alt="cavalryArcher__image"/>
        <div className="cavalryArcher__number">{props.cavalryArcherNumber}</div>
    </div>)
};

export default CavalryArcher