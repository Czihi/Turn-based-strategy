import React from "react";
import stable from "../../../../../images/Stable.png";
import wood from "../../../../../images/Wood.png";
import waiting from "../../../../../images/Waiting.gif";
const Stable = (props) => {
    function showStableOptions() {
        document.getElementById("stablePanel"+props.buildingId).style.display="block"
    }
    function hideStableOptions() {
        document.getElementById("stablePanel"+props.buildingId).style.display="none"
    }
    function recruitCavalry(){
        let cavalryInput=document.getElementById("cavalryNumber"+props.buildingId);
        props.handleRecruiting("cavalry", cavalryInput.value);
        hideStableOptions();
        cavalryInput.value=0;
    }
    function recruitArcherCavalry(){
        let archerCavalryInput=document.getElementById("archerCavalryNumber"+props.buildingId);
        props.handleRecruiting("archerCavalry", archerCavalryInput.value);
        hideStableOptions();
        archerCavalryInput.value=0;
    }

    return(<div id={"stable"+props.buildingId} className="stable">
        <img unselectable={"on"} draggable={"false"} className="buildArea__image"
             src={stable}
             alt={"stable"+props.buildingId} onClick={()=>{showStableOptions()}}/>
        <img id={"buildWaitingIcon" + props.buildingId} unselectable={"on"} draggable={"false"}
             className="build__waiting" src={waiting} alt="waiting"/>
        <div id={"stablePanel"+props.buildingId} className="stable__panel" style={{backgroundImage: `url(${wood})`}}>
            <button className="stable__panel--close" onClick={()=>{hideStableOptions()}}>✖</button>
            <div className="stable__panel--name">Stajnia</div>
            <div id={"buildWaiting" + props.buildingId}
                 className="stable__panel--buildWaiting"> Zostało {props.daysToBuild} dni do wybudowania
            </div>
            <div className="recruitment" id={"recruitment"+props.buildingId}>
            <div className="stable__panel--recruit">Rekrutuj:</div>
            <div className="stable__panel--archerCavalry">
                <div className="stable__panel--label">Kawaleria łucznicza</div>
                <input min={0} id={"archerCavalryNumber"+props.buildingId} placeholder="0" className="stable__panel--input" type="number"/>
                <button className="stable__panel--button" onClick={()=>{recruitArcherCavalry()}}>✓</button>
            </div>
            <div className="stable__panel--cavalry">
                <div className="stable__panel--label">Kawaleria</div>
                <input min={0} id={"cavalryNumber"+props.buildingId} placeholder="0" className="stable__panel--input" type="number"/>
                <button className="stable__panel--button" onClick={()=>{recruitCavalry()}}>✓</button>
            </div>
            </div>
        </div>
    </div>)
};

export default Stable
