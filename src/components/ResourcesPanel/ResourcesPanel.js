import React from "react";
import wood from "../../images/Wood.png";
const ResourcesPanel=(props)=>{
    return (
        <div className="resources" style={{backgroundImage: `url(${wood})`}}>
            <div className="resources__resource resources__date">
                <div className="resources__date--value">{props.date} - dzień {props.day}</div>
                <button id="finish" onClick={()=>{props.finishDay()}} className="resources__date--button">Zakończ dzień</button>
            </div>
            <div className="resources__resource resources__food">Żywność: {props.food}</div>
            <div className="resources__resource resources__population">Populacja: {props.population}</div>
            <div className="resources__resource resources__money">Pieniądze: {props.money}</div>
            <div className="resources__resource resources__army">Armia: {props.armyAmount}</div>
        </div>
    );
};

export default ResourcesPanel;