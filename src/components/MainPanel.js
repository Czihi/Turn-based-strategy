import React from "react";
import BuildingsListPanel from "./BuildingsListPanel";
import Board from "./Board";

const MainPanel = (props) => {
    return (<div className="main">
        <BuildingsListPanel
            handleAddingHouse={props.handleAddingHouse}
            handleAddingFarm={props.handleAddingFarm}
        />
        <Board
            buildings={props.buildings}
        />
    </div>)
};
export default MainPanel;