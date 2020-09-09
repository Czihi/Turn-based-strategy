import React from "react";
import farm from "../../../../images/Farm.png";
import house from "../../../../images/House.png";
import bank from "../../../../images/Bank.png"
import barracks from "../../../../images/Barracks.png"
import stable from "../../../../images/Stable.png"

const buildingImages = {"farm": farm, "house": house, "bank": bank, "barracks": barracks, "stable": stable};

const Building = (props) => {

    function showSidePanel() {
        document.getElementById("building__panel"+props.name).style.display="block"
    }
    function hideSidePanel() {
        document.getElementById("building__panel"+props.name).style.display="none";
}

    return (<div className="building__container">
        <div onClick={()=>{showSidePanel()}} id={props.name} className="building" unselectable="on">
        <img className="building__image"
             src={buildingImages[props.image]} alt={props.image} draggable={"false"} unselectable={"on"}/>
        <div className="building__name">{props.name}</div>
        </div>
        <div id={"building__panel"+props.name} className="building__panel">
            <div className="building__button--group">
            <button onClick={()=>{props.handleAdding({name: props.name, image: props.image, price: props.price}); hideSidePanel()}} className="building__button--yes">✓</button>
            <button onClick={()=>{hideSidePanel()}} className="building__button--no">✖</button>
            </div>
        </div>
    </div>)
};
export default Building