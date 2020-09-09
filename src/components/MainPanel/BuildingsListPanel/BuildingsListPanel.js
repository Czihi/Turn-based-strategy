import React from "react";
import Building from "./Building/Building";
import wood from "../../../images/Wood.png";

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
        <Building
            name="Bank"
            image="bank"
            price={180}
            handleAdding={props.handleAddingBank}
        />
        <Building
            name="Koszary"
            image="barracks"
            price={120}
            handleAdding={props.handleAddingBarracks}
        />
        <Building
            name="Stajnia"
            image="stable"
            price={300}
            handleAdding={props.handleAddingStable}
        />
    </div>)
};
export default BuildingsListPanel