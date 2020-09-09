import React from "react";
import grass from "../../images/Grass.png";
import wood from "../../images/Wood.png";
import Archer from "../MainPanel/ArmyPanel/ArmyUnits/Archer";
import Swordsman from "../MainPanel/ArmyPanel/ArmyUnits/Swordsman";
import CavalryArcher from "../MainPanel/ArmyPanel/ArmyUnits/CavalryArcher";
import Cavalry from "../MainPanel/ArmyPanel/ArmyUnits/Cavalry";

const Battle = (props) => {
    return (<div id="battlefield" className="battle" style={{backgroundImage: `url(${grass})`}}>
        <div className="battle__label" style={{backgroundImage: `url(${wood})`}}>Zostałeś zaatakowany!</div>
        <div className="battle__info">
            <div className="battle__info--ally" style={{backgroundImage: `url(${wood})`}}>
                <div className="battle__info--allyLabel">Twoja armia</div>
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
            </div>
            <div className="battle__info--middle">
                <button className="battle__info--button" onClick={()=>{props.startFight()}}>Walcz!</button>
                <div id="result" className="battle__info--result"></div>
            </div>
            <div className="battle__info--enemy" style={{backgroundImage: `url(${wood})`}}>
                <div className="battle__info--enemyLabel">Armia przeciwnika</div>
                <Archer
                    archerNumber={props.fights['archer']}
                />
                <Swordsman
                    swordsmanNumber={props.fights['swordsman']}
                />
                <CavalryArcher
                    cavalryArcherNumber={props.fights['archerCavalry']}
                />
                <Cavalry
                    cavalryNumber={props.fights['cavalry']}
                />
            </div>

        </div>
    </div>)
};
export default Battle;