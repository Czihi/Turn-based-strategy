import React from "react";
import house from "../../../../../images/House.png"
import waiting from "../../../../../images/Waiting.gif";
import wood from "../../../../../images/Wood.png";

const House = (props) => {
    function showHousePanel() {
        document.getElementById("housePanel" + props.buildingId).style.display = "block"
    }

    function hideHousePanel() {
        document.getElementById("housePanel" + props.buildingId).style.display = "none"
    }

    return (<div id={"house" + props.buildingId} className="house">
        <img unselectable={"on"} draggable={"false"} className="buildArea__image"
             src={house}
             alt={"house" + props.buildingId}
             onClick={() => {
                 showHousePanel()
             }}/>
        <img id={"buildWaitingIcon" + props.buildingId} unselectable={"on"} draggable={"false"}
             className="build__waiting" src={waiting} alt="waiting"/>
        <div id={"housePanel" + props.buildingId} className="house__panel" style={{backgroundImage: `url(${wood})`}}>
            <button className="house__panel--close" onClick={() => {
                hideHousePanel()
            }}>✖
            </button>
            <div className="house__panel--name">Dom</div>
            <div id={"buildWaiting" + props.buildingId}
                 className="house__panel--buildWaiting"> Zostało {props.daysToBuild} dni do wybudowania
            </div>
        </div>
    </div>)
};

export default House;