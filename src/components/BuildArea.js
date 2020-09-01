import React from "react";
import farm from "../images/Farm.png";
import house from "../images/House.png";

const buildingImages = {"farm": farm, "house": house};
const BuildArea = (props) => {
    let buildings = [];
    for (const building in props.buildings) {
        buildings.push(<img unselectable={"on"} draggable={"false"} key={building} className="buildArea__image"
                            src={buildingImages[props.buildings[building].image]}
                            alt={props.buildings[building].image}/>)
    }
    return (<div className="buildArea" draggable={"false"} unselectable={"on"}>
        {buildings}
    </div>)
};
export default BuildArea