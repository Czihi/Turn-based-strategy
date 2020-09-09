import React from "react";
import wood from "../../images/Wood.png";

const Alerts = () => {
    return (
        <div>
            <div id="summary" className="daySummary" style={{backgroundImage: `url(${wood})`}}>
                Zakończono dzień
            </div>
            <div id="resources" className="noResources" style={{backgroundImage: `url(${wood})`}}>
                Brak środków na wybudowanie:
            </div>
            <div id="recruitment" className="noResources" style={{backgroundImage: `url(${wood})`}}>
                Brak środków na zrekrutowanie:
            </div>
        </div>
    )
};
export default Alerts;