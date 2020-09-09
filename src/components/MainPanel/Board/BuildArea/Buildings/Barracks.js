import React from "react";
import barracks from "../../../../../images/Barracks.png";
import wood from "../../../../../images/Wood.png"
import waiting from "../../../../../images/Waiting.gif";

const Barracks = (props) => {
    function showBarracksOptions() {
        document.getElementById("barracksPanel"+props.buildingId).style.display="block"
    }
    function hideBarracksOptions() {
        document.getElementById("barracksPanel"+props.buildingId).style.display="none"
    }
    function recruitSwordsman(){
        let swordsmanInput=document.getElementById("swordsmanNumber"+props.buildingId);
        props.handleRecruiting("swordsman", swordsmanInput.value);
        hideBarracksOptions();
        swordsmanInput.value=0;
    }
    function recruitArcher(){
        let archerInput=document.getElementById("archerNumber"+props.buildingId);
        props.handleRecruiting("archer", archerInput.value);
        hideBarracksOptions();
        archerInput.value=0;
    }

    return (<div id={"barracks" + props.buildingId} className="barracks">
        <img unselectable={"on"} draggable={"false"} className="buildArea__image"
             src={barracks}
             alt={"barracks" + props.buildingId} onClick={()=>{showBarracksOptions()}}/>
        <img id={"buildWaitingIcon" + props.buildingId} unselectable={"on"} draggable={"false"}
             className="build__waiting" src={waiting} alt="waiting"/>
        <div id={"barracksPanel"+props.buildingId} className="barracks__panel" style={{backgroundImage: `url(${wood})`}}>
            <button className="barracks__panel--close" onClick={()=>{hideBarracksOptions()}}>✖</button>
            <div className="barracks__panel--name">Koszary</div>
            <div id={"buildWaiting" + props.buildingId}
                 className="barracks__panel--buildWaiting"> Zostało {props.daysToBuild} dni do wybudowania
            </div>
            <div className="recruitment" id={"recruitment"+props.buildingId}>
            <div className="barracks__panel--recruit">Rekrutuj:</div>
            <div className="barracks__panel--swordsman">
                <div className="barracks__panel--label">Miecznik</div>
                <input min={0} id={"swordsmanNumber"+props.buildingId} placeholder="0" className="barracks__panel--input" type="number"/>
                <button className="barracks__panel--button" onClick={()=>{recruitSwordsman()}}>✓</button>
            </div>
            <div className="barracks__panel--archer">
                <div className="barracks__panel--label">Łucznik</div>
                <input min={0} id={"archerNumber"+props.buildingId} placeholder="0" className="barracks__panel--input" type="number"/>
                <button className="barracks__panel--button" onClick={()=>{recruitArcher()}}>✓</button>
            </div>
            </div>
        </div>
    </div>)
};

export default Barracks;