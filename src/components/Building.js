import React from "react";
import farm from "../images/Farm.png";
import house from "../images/House.png";

const buildingImages = {"farm": farm, "house": house};
let panelOn = false;
const Building = (props) => {

    function createPanel() {
        let panel = document.createElement("div");
        panel.setAttribute("id", "panel" + props.name);
        panel.classList.add("building__panel");
        panelOn = true;
        return (panel)
    }

    function createYesButton(panel) {
        let buttonYes = document.createElement('BUTTON');
        buttonYes.classList.add("building__button--yes");
        buttonYes.innerHTML = "✓";
        buttonYes.onclick = () => {
            props.handleAdding({name: props.name, image: props.image, price: props.price}, deletePanel(panel))
        };
        return buttonYes
    }

    function createNoButton(panel) {
        let buttonNo = document.createElement('BUTTON');
        buttonNo.innerHTML = "✖";
        buttonNo.onclick = () => {
            deletePanel(panel)
        };
        buttonNo.classList.add("building__button--no");
        return buttonNo
    }

    function deletePanel(panel) {
        panel.remove();
        panelOn = false;
    };

    function showSidePanel() {
        if (!panelOn) {
            let panel = createPanel();
            panel.append(createYesButton(panel));
            panel.append(createNoButton(panel));
            let building = document.getElementById(props.name);
            building.appendChild(panel);
            panelOn = true;
        }
    }

    return (<div onClick={showSidePanel} id={props.name} className="building" unselectable="on">
        <img className="building__image"
             src={buildingImages[props.image]} alt={props.image} draggable={"false"} unselectable={"on"}/>
        <div className="building__name">{props.name}</div>
    </div>)
};
export default Building