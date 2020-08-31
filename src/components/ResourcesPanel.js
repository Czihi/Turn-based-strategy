import React from "react";
const ResourcesPanel=(props)=>{
    return (
        <div className="resources">
            <div className="resources__resource resources__date">
                <div className="resources__date--value">{props.date}</div>
                <button onClick={()=>{props.finishDay()}} className="resources__date--button">Zakończ dzień</button>
            </div>
            <div className="resources__resource resources__food">Żywność: {props.food}</div>
            <div className="resources__resource resources__population">Populacja: {props.population}</div>
            <div className="resources__resource resources__money">Pieniądze: {props.money}</div>
        </div>
    );
};

export default ResourcesPanel;