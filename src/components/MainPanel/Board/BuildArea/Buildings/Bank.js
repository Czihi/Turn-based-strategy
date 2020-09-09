import React from "react";
import bank from "../../../../../images/Bank.png";
import waiting from "../../../../../images/Waiting.gif"
import wood from "../../../../../images/Wood.png";

const Bank = (props) =>{

    function showBankPanel() {
        document.getElementById("bankPanel"+props.buildingId).style.display="block"
    }
    function hideBankPanel() {
        document.getElementById("bankPanel"+props.buildingId).style.display="none"
    }

    return(<div id={"bank"+props.buildingId} className="bank">
        <img unselectable={"on"} draggable={"false"} className="buildArea__image"
             src={bank}
             alt={"bank"+props.buildingId}
        onClick={()=>{showBankPanel()}}
        />
        <img id={"buildWaitingIcon" + props.buildingId} unselectable={"on"} draggable={"false"}
             className="build__waiting" src={waiting} alt="waiting"/>
            <div id={"bankPanel"+props.buildingId} className="bank__panel" style={{backgroundImage: `url(${wood})`}}>
                <button className="bank__panel--close" onClick={()=>{hideBankPanel()}}>✖</button>
                <div className="bank__panel--name">Bank</div>
                <div id={"buildWaiting" +props.buildingId} className="bank__panel--buildWaiting"> Zostało {props.daysToBuild} dni do wybudowania</div>
            </div>
    </div>)
};

export default Bank;