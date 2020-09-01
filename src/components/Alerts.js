import React from "react";

const Alerts = () => {
    return (
        <div>
            <div id="summary" className="daySummary">
                Zakończono dzień
            </div>
            <div id="resources" className="noResources">
                Brak środków na wybudowanie:
            </div>
        </div>
    )
};
export default Alerts;