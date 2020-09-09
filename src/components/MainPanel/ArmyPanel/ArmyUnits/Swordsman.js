import React from "react";
import swordsman from "../../../../images/Swordsman.png"

const Swordsman = (props) => {
    return (<div className="swordsman">
        <img src={swordsman} className="swordsman__image" alt="swordsman__image"/>
        <div className="swordsman__number">{props.swordsmanNumber}</div>
    </div>)
};

export default Swordsman