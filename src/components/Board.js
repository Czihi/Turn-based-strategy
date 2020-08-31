import React from "react";
import board from "../images/Board.png"
import BuildArea from "./BuildArea";

const Board = (props) => {
    return (<div style={{backgroundImage: `url(${board})`}} className="board">
        <BuildArea
            buildings={props.buildings}
        />
    </div>)
};
export default Board;