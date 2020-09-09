import React from "react";
import House from "./Buildings/House";
import Farm from "./Buildings/Farm";
import Bank from "./Buildings/Bank";
import Barracks from "./Buildings/Barracks";
import Stable from "./Buildings/Stable";


const BuildArea = (props) => {
    let buildings = [];
    for (const building in props.buildings) {
        if (props.buildings[building].name === "Dom") {
            buildings.push(<House
                key={props.buildings[building].buildingId}
                buildingId={props.buildings[building].buildingId}
                daysToBuild={props.buildings[building].daysToBuild}
            />)
        } else {
            if (props.buildings[building].name === "Farma") {
                buildings.push(<Farm
                    key={props.buildings[building].buildingId}
                    buildingId={props.buildings[building].buildingId}
                    daysToBuild={props.buildings[building].daysToBuild}
                />)
            } else {
                if (props.buildings[building].name === "Bank") {
                    buildings.push(<Bank
                        key={props.buildings[building].buildingId}
                        buildingId={props.buildings[building].buildingId}
                        daysToBuild={props.buildings[building].daysToBuild}
                    />)
                } else {
                    if (props.buildings[building].name === "Koszary") {
                        buildings.push(<Barracks
                            key={props.buildings[building].buildingId}
                            buildingId={props.buildings[building].buildingId}
                            daysToBuild={props.buildings[building].daysToBuild}
                            handleRecruiting={props.handleRecruiting}
                        />)
                    }else {
                        if (props.buildings[building].name === "Stajnia") {
                            buildings.push(<Stable
                                key={props.buildings[building].buildingId}
                                buildingId={props.buildings[building].buildingId}
                                daysToBuild={props.buildings[building].daysToBuild}
                                handleRecruiting={props.handleRecruiting}
                            />)
                        }
                    }
                }
            }
        }
    }
    return (<div className="buildArea" draggable={"false"} unselectable={"on"}>
        {buildings}
    </div>)
};
export default BuildArea