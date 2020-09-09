import React from "react";
import archer from "../../../../images/Archer.png"

const Archer = (props) => {
    return (<div className="archer">
        <img src={archer} className="archer__image" alt="archer__image"/>
        <div className="archer__number">{props.archerNumber}</div>
    </div>)
};

export default Archer