import React from "react";
import wood from "../../../images/Wood.png";
import Archer from "./ArmyUnits/Archer";
import Swordsman from "./ArmyUnits/Swordsman";
import CavalryArcher from "./ArmyUnits/CavalryArcher";
import Cavalry from "./ArmyUnits/Cavalry";

const ArmyPanel = (props) => {
    return (<div className={"armyList"} style={{backgroundImage: `url(${wood})`}}>
        <Archer
            archerNumber={props.army['archer']}
        />
        <Swordsman
            swordsmanNumber={props.army['swordsman']}
        />
        <CavalryArcher
            cavalryArcherNumber={props.army['archerCavalry']}
        />
        <Cavalry
            cavalryNumber={props.army['cavalry']}
        />
    </div>)
};

export default ArmyPanel