import React from "react";
import grass from "../images/Grass.png"
import BuildArea from "./BuildArea";

const Board = (props) => {
    return (<div style={{backgroundImage: `url(${grass})`}} className="board">
        <BuildArea
            buildings={props.buildings}
        />
    </div>)
};
export default Board;