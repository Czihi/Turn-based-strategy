import React from "react";
import Building from "./Building";
import wood from "../images/Wood.png";

const BuildingsListPanel = (props) => {
    return (<div className="buildingsList" style={{backgroundImage: `url(${wood})`}}>
        <Building
            name="Farma"
            image="farm"
            price={50}
            handleAdding={props.handleAddingFarm}
        />
        <Building
            name="Dom"
            image="house"
            price={100}
            handleAdding={props.handleAddingHouse}
        />
    </div>)
};
export default BuildingsListPanel