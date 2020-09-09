import React from "react";
import BuildingsListPanel from "./BuildingsListPanel/BuildingsListPanel";
import Board from "./Board/Board";
import ArmyPanel from "./ArmyPanel/ArmyPanel";

const MainPanel = (props) => {
    return (<div className="main">
        <BuildingsListPanel
            handleAddingHouse={props.handleAddingHouse}
            handleAddingFarm={props.handleAddingFarm}
            handleAddingBank={props.handleAddingBank}
            handleAddingBarracks={props.handleAddingBarracks}
            handleAddingStable={props.handleAddingStable}
        />
        <Board
            buildings={props.buildings}
            handleRecruiting={props.handleRecruiting}
        />
        <ArmyPanel
            army={props.army}
        />
    </div>)
};
export default MainPanel;