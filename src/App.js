import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Main.css';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import dayjs from "dayjs";
import ResourcesPanel from "./components/ResourcesPanel/ResourcesPanel";
import MainPanel from "./components/MainPanel/MainPanel";
import Alerts from "./components/Alerts/Alerts";
import BottomPanel from "./components/BottomPanel/BottomPanel";

let date = dayjs();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: date.format('DD/MM/YYYY'),
            armyAmount: 0,
            food: 0,
            population: 0,
            money: 100000,
            foodDayIncome: 0,
            moneyDayIncome: 0,
            buildTimes: {'farm': 1, 'house': 2, 'bank': 3, 'barracks': 3, 'stable': 5},
            buildings: [],
            buildingId: 0,
            numberOfBanks: 0,
            numberOfBarracks: 0,
            numberOfFarms: 0,
            numberOfHouses: 0,
            numberOfStables: 0,
            army: {"archer": 0, "swordsman": 0, "archerCavalry": 0, "cavalry": 0},
            unitCost: {
                "archer": {"money": 20, "population": 1},
                "swordsman": {"money": 15, "population": 1},
                "archerCavalry": {"money": 100, "population": 2},
                "cavalry": {"money": 120, "population": 2}
            },
            polishNames: {
                "archer": "Łucznik",
                "swordsman": "Miecznik",
                "archerCavalry": "Kawaleria łucznicza",
                "cavalry": "Kawaleria"
            }
        };
        this.farmFoodIncome = 10;
        this.homePopulation = 20;
        this.homeFoodExpense = 3;
        this.bankMoneyIncome = 50;
    }

    //buildingAddHandlers

    handleAddingFarm = (building) => {
        if (this.state.money - building.price >= 0) {
            let newBuildings = [...this.state.buildings];
            building['buildingId'] = this.state.buildingId;
            newBuildings.push(building);
            building['daysToBuild'] = this.state.buildTimes['farm'];
            this.setState({
                buildingId: this.state.buildingId + 1,
                buildings: newBuildings,
                numberOfFarms: this.state.numberOfFarms + 1,
                money: this.state.money - building.price,
                foodDayIncome: this.state.foodDayIncome + this.farmFoodIncome
            })
        } else {
            this.showNoResources(building.name)
        }
    };
    handleAddingHouse = (building) => {
        if (this.state.money - building.price >= 0) {
            let newBuildings = [...this.state.buildings];
            building['buildingId'] = this.state.buildingId;
            building['daysToBuild'] = this.state.buildTimes['house'];
            newBuildings.push(building);
            this.setState({
                buildingId: this.state.buildingId + 1,
                buildings: newBuildings,
                numberOfHouses: this.state.numberOfHouses + 1,
                money: this.state.money - building.price,
                population: this.state.population + this.homePopulation,
                foodDayIncome: this.state.foodDayIncome - this.homeFoodExpense
            })
        } else {
            this.showNoResources(building.name);
        }
    };
    handleAddingBank = (building) => {
        if (this.state.money - building.price >= 0) {
            let newBuildings = [...this.state.buildings];
            building['buildingId'] = this.state.buildingId;
            building['daysToBuild'] = this.state.buildTimes['bank'];
            newBuildings.push(building);
            this.setState({
                buildingId: this.state.buildingId + 1,
                buildings: newBuildings,
                numberOfBanks: this.state.numberOfBanks + 1,
                money: this.state.money - building.price,
                moneyDayIncome: this.state.moneyDayIncome + this.bankMoneyIncome
            })
        } else {
            this.showNoResources(building.name);
        }
    };
    handleAddingBarracks = (building) => {
        if (this.state.money - building.price >= 0) {
            let newBuildings = [...this.state.buildings];
            building['buildingId'] = this.state.buildingId;
            building['daysToBuild'] = this.state.buildTimes['barracks'];
            newBuildings.push(building);
            this.setState({
                buildingId: this.state.buildingId + 1,
                buildings: newBuildings,
                numberOfBarracks: this.state.numberOfBarracks + 1,
                money: this.state.money - building.price,
            })
        } else {
            this.showNoResources(building.name);
        }
    };

    handleAddingStable = (building) => {
        if (this.state.money - building.price >= 0) {
            let newBuildings = [...this.state.buildings];
            building['buildingId'] = this.state.buildingId;
            building['daysToBuild'] = this.state.buildTimes['stable'];
            newBuildings.push(building);
            this.setState({
                buildingId: this.state.buildingId + 1,
                buildings: newBuildings,
                numberOfStables: this.state.numberOfStables + 1,
                money: this.state.money - building.price,
            })
        } else {
            this.showNoResources(building.name);
        }
    };

    //recruitmentHandlers

    handleRecruiting = (unit, amount) => {
        const populationRequired = this.state.unitCost[unit]["population"] * amount;
        const moneyRequired = this.state.unitCost[unit]["money"] * amount;
        if (amount > 0) {
            if (populationRequired <= this.state.population) {
                if (moneyRequired <= this.state.money) {
                    let newArmy = this.state.army;
                    newArmy[unit] += parseInt(amount);
                    this.setState({
                        army: newArmy,
                        armyAmount: this.state.armyAmount + parseInt(populationRequired),
                        money: this.state.money - moneyRequired,
                        population: this.state.population - populationRequired
                    })
                } else {
                    this.showRecruitmentFail("Brak środków na zrekrutowanie:\n" + amount + "x " + this.state.polishNames[unit])
                }
            } else {
                this.showRecruitmentFail("Brak populacji na zrekrutowanie:\n" + amount + "x " + this.state.polishNames[unit])
            }
        }
    };

    //finishDayCalculations

    finishDay = () => {
        this.calculateDaysToBuild();
        this.calculateResources();
        this.showSummary();
    };

    calculateDaysToBuild = () => {
        let newBuildings=[...this.state.buildings];
        for (const building in this.state.buildings){
            if(this.state.buildings[building].daysToBuild>1){
                newBuildings[building].daysToBuild-=1;
            }else{
                document.getElementById("buildWaiting" +this.state.buildings[building].buildingId).style.display="none";
                document.getElementById("buildWaitingIcon" +this.state.buildings[building].buildingId).style.display="none";
                if(document.getElementById("recruitment"+this.state.buildings[building].buildingId)!=null){
                    document.getElementById("recruitment"+this.state.buildings[building].buildingId).style.display="block"
                }
            }
        }
    };

    calculateResources = () => {
        this.calculateDate();
        this.calculateFood();
        this.calculateMoney();
    };
    calculateDate = () => {
        date = date.add(1, 'day');
        this.setState({date: date.format('DD/MM/YYYY')})
    };
    calculateFood = () => {
        let food = this.state.food + this.state.foodDayIncome;
        if (food >= 0) {
            this.setState({food: food});
        } else {
            this.setState({food: 0});
        }
    };
    calculateMoney = () => {
        let money = this.state.money + this.state.moneyDayIncome;
        this.setState({money: money});
    };

    //alerts

    showNoResources = (buildingName) => {
        document.getElementById("resources").style.display = "block";
        document.getElementById("resources").innerText = "Brak środków na wybudowanie:\n" + buildingName;
        setTimeout(this.hideNoResources, 3000)
    };
    hideNoResources = () => {
        document.getElementById("resources").style.display = "none";
    };


    hideSummary = () => {
        document.getElementById("summary").style.display = "none";
        document.getElementById("finish").style.backgroundColor = "#4f271b";
        document.getElementById("finish").removeAttribute("disabled");
    };

    showSummary = () => {
        document.getElementById("summary").style.display = "block";
        let summaryText = "Zakończono dzień!\nTempo przyrostu żywności: " + this.state.foodDayIncome
            + "\n Tempo przyrostu pieniędzy: " + this.state.moneyDayIncome;
        let starving = this.state.food + this.state.foodDayIncome;
        if (starving < 0) {
            summaryText += "\nBrakuje żywności."
        }
        document.getElementById("summary").innerText = summaryText;
        document.getElementById("finish").style.backgroundColor = "grey";
        document.getElementById("finish").setAttribute("disabled", "true")
        setTimeout(this.hideSummary, 3000)
    };

    showRecruitmentFail = (failText) => {
        document.getElementById("recruitment").style.display = "block";
        document.getElementById("recruitment").innerText = failText;
        setTimeout(this.hideRecruitmentFail, 3000)
    };
    hideRecruitmentFail = () => {
        document.getElementById("recruitment").style.display = "none";
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
                                armyAmount={this.state.armyAmount}
                                finishDay={this.finishDay}
                            />
                            <MainPanel
                                buildings={this.state.buildings}
                                army={this.state.army}
                                handleAddingHouse={this.handleAddingHouse}
                                handleAddingFarm={this.handleAddingFarm}
                                handleAddingBank={this.handleAddingBank}
                                handleAddingBarracks={this.handleAddingBarracks}
                                handleAddingStable={this.handleAddingStable}
                                handleRecruiting={this.handleRecruiting}
                            />
                            <BottomPanel/>
                        </div>)
                    }
                }/>
            </Router>
        );
    }
}

export default App;
