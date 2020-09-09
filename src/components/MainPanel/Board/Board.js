import React from "react";
import grass from "../../../images/Grass.png"
import BuildArea from "./BuildArea/BuildArea";

const Board = (props) => {
    return (<div style={{backgroundImage: `url(${grass})`}} className="board">
        <BuildArea
            buildings={props.buildings}
            handleRecruiting={props.handleRecruiting}
        />
    </div>)
};
export default Board;