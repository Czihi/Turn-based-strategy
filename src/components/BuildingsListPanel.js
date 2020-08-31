import React from "react";
import Building from "./Building";

const BuildingsListPanel = (props) => {
    return (<div className="buildingsList">
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