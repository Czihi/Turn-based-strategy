import React from "react";
import farm from "../../../../../images/Farm.png";
import waiting from "../../../../../images/Waiting.gif";
import wood from "../../../../../images/Wood.png";



const Farm = (props) => {
    function showFarmPanel() {
        document.getElementById("farmPanel" + props.buildingId).style.display = "block"
    }

    function hideFarmPanel() {
        document.getElementById("farmPanel" + props.buildingId).style.display = "none"
    }
    return (<div id={"farm" + props.buildingId} className="farm">
        <img unselectable={"on"} draggable={"false"} className="buildArea__image"
             src={farm}
             alt={"farm" + props.buildingId}
             onClick={()=>{showFarmPanel()}}/>
        <img id={"buildWaitingIcon" + props.buildingId} unselectable={"on"} draggable={"false"}
             className="build__waiting" src={waiting} alt="waiting"/>
        <div id={"farmPanel" + props.buildingId} className="farm__panel" style={{backgroundImage: `url(${wood})`}}>
            <button className="farm__panel--close" onClick={() => {
                hideFarmPanel()
            }}>✖
            </button>
            <div className="farm__panel--name">Farma</div>
            <div id={"buildWaiting" + props.buildingId}
                 className="farm__panel--buildWaiting"> Zostało {props.daysToBuild} dni do wybudowania
            </div>
        </div>
    </div>)
};

export default Farm;