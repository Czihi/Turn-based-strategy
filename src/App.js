import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Main.css';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import ResourcesPanel from "./components/ResourcesPanel";
import dayjs from "dayjs";
import MainPanel from "./components/MainPanel";

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
            buildings: []
        };
    }

    handleAddingFarm = (building) => {
        if (this.state.money - building.price >= 0) {
            let newBuildings = [...this.state.buildings];
            newBuildings.push(building);
            this.setState({
                buildings: newBuildings,
                money: this.state.money - building.price,
                foodPerDay: this.state.foodPerDay + 10
            })
        } else {
            console.log("NOMONEY")
        }
    };
    handleAddingHouse = (building) => {
        if (this.state.money - building.price >= 0) {
            let newBuildings = [...this.state.buildings];
            newBuildings.push(building);
            this.setState({
                buildings: newBuildings,
                money: this.state.money - building.price,
                population: this.state.population + 20,
                foodPerDay: this.state.foodPerDay - 5
            })
        } else {
            console.log("NOMONEY")
        }
    };

    finishDay = () => {
        date = date.add(1, 'day');
        let food=this.state.food+this.state.foodPerDay;
        if(food>=0) {
            this.setState({date: date.format('DD/MM/YYYY'), food: this.state.food + this.state.foodPerDay});
        }else{
            this.setState({date: date.format('DD/MM/YYYY'), food: 0});
        }
    };

    render() {

        return (
            <Router>
                <Route path="/Turn-based-strategy" exact render={
                    () => {
                        document.title="Gra strategiczna";
                        return (<div>
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
