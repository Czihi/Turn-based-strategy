import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Main.css';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import dayjs from "dayjs";
import ResourcesPanel from "./components/ResourcesPanel";
import MainPanel from "./components/MainPanel";
import Alerts from "./components/Alerts";

let date = dayjs();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            food: 0,
            population: 0,
            money: 1000,
            foodPerDay: 0,
            date: date.format('DD/MM/YYYY'),
            buildings: [],
            buildingId: 0
        };
    }

    handleAddingFarm = (building) => {
        if (this.state.money - building.price >= 0) {
            let newBuildings = [...this.state.buildings];
            building['id'] = this.state.buildingId;
            newBuildings.push(building);
            this.setState({
                buildingId: this.state.buildingId + 1,
                buildings: newBuildings,
                money: this.state.money - building.price,
                foodPerDay: this.state.foodPerDay + 10
            })
        } else {
            this.showNoResources(building.name)
        }
    };
    handleAddingHouse = (building) => {
        if (this.state.money - building.price >= 0) {
            let newBuildings = [...this.state.buildings];
            building['id'] = this.state.buildingId;
            newBuildings.push(building);
            this.setState({
                buildingId: this.state.buildingId + 1,
                buildings: newBuildings,
                money: this.state.money - building.price,
                population: this.state.population + 20,
                foodPerDay: this.state.foodPerDay - 3
            })
        } else {
            this.showNoResources(building.name);
        }
    };

    calculateResources = () => {
        date = date.add(1, 'day');
        let food = this.state.food + this.state.foodPerDay;
        if (food >= 0) {
            this.setState({date: date.format('DD/MM/YYYY'), food: this.state.food + this.state.foodPerDay});
        } else {
            this.setState({date: date.format('DD/MM/YYYY'), food: 0});
        }
    };
    showNoResources=(buildingName)=>{
        document.getElementById("resources").style.display = "block";
        document.getElementById("resources").innerText="Brak środków na wybudowanie:\n"+ buildingName;
        setTimeout(this.hideNoResources, 3000)
    };
    hideNoResources=()=>{
        document.getElementById("resources").style.display = "none";
    };


    hideSummary = () => {
        document.getElementById("summary").style.display = "none";
        document.getElementById("finish").style.backgroundColor = "#4f271b"
        document.getElementById("finish").removeAttribute("disabled")
    };

    showSummary = () => {
        document.getElementById("summary").style.display = "block";
        let summaryText="Zakończono dzień!\nTempo przyrostu żywności: "+this.state.foodPerDay;
        let starving=this.state.food+this.state.foodPerDay;
        if(starving<0){
            summaryText+="\nBrakuje żywności."
        }
        document.getElementById("summary").innerText=summaryText
        document.getElementById("finish").style.backgroundColor = "grey";
        document.getElementById("finish").setAttribute("disabled", "true")
        setTimeout(this.hideSummary, 3000)
    };

    finishDay = () => {
        this.calculateResources();
        this.showSummary();
    };

    render() {

        return (
            <Router>
                <Route path="/Turn-based-strategy" exact render={
                    () => {
                        document.title = "Gra strategiczna";
                        return (<div>
                            <Alerts/>
                            <ResourcesPanel
                                date={this.state.date}
                                food={this.state.food}
                                population={this.state.population}
                                money={this.state.money}
                                finishDay={this.finishDay}
                            />
                            <MainPanel
                                buildings={this.state.buildings}
                                handleAddingHouse={this.handleAddingHouse}
                                handleAddingFarm={this.handleAddingFarm}
                            />
                        </div>)
                    }
                }/>
            </Router>
        );
    }
}

export default App;
