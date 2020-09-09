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
import Battle from "./components/Battle/Battle";

let date = dayjs();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: date.format('DD/MM/YYYY'),
            day: 1,
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
            unitInfo: {
                "archer": {"money": 20, "population": 1, "attack": 3, "defense": 5},
                "swordsman": {"money": 15, "population": 1, "attack": 5, "defense": 2},
                "archerCavalry": {"money": 100, "population": 2, "attack": 5, "defense": 15},
                "cavalry": {"money": 120, "population": 2, "attack": 20, "defense": 5}
            },
            polishNames: {
                "archer": "Łucznik",
                "swordsman": "Miecznik",
                "archerCavalry": "Kawaleria łucznicza",
                "cavalry": "Kawaleria"
            },
            fights: [
                {"day": 5, "archer": 10, "swordsman": 10, "archerCavalry": 0, "cavalry": 0},
                {"day": 10, "archer": 100, "swordsman": 100, "archerCavalry": 20, "cavalry": 10},
                {"day": 15, "archer": 300, "swordsman": 500, "archerCavalry": 100, "cavalry": 200},
                {"day": 0, "archer": 300, "swordsman": 500, "archerCavalry": 100, "cavalry": 200},
                ]
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
        const populationRequired = this.state.unitInfo[unit]["population"] * amount;
        const moneyRequired = this.state.unitInfo[unit]["money"] * amount;
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

    //startDayFights

    startDay = () => {
        if (this.state.fights[0]['day'] === this.state.day) {
            document.getElementById("battlefield").style.display = "block";
        }
    };

    startFight = () => {
        const playerArcher = this.state.army['archer'];
        const playerSwordsman = this.state.army['swordsman'];
        const playerArcherCavalry = this.state.army['archerCavalry'];
        const playerCavalry = this.state.army['cavalry'];

        const enemyArcher = this.state.fights[0]['archer'];
        const enemySwordsman = this.state.fights[0]['swordsman'];
        const enemyArcherCavalry = this.state.fights[0]['archerCavalry'];
        const enemyCavalry = this.state.fights[0]['cavalry'];

        const archerAtk = this.state.unitInfo['archer']['attack'];
        const archerDef = this.state.unitInfo['archer']['defense'];
        const swordsmanAtk = this.state.unitInfo['swordsman']['attack'];
        const swordsmanDef = this.state.unitInfo['swordsman']['defense'];
        const archerCavalryAtk = this.state.unitInfo['archerCavalry']['attack'];
        const archerCavalryDef = this.state.unitInfo['archerCavalry']['defense'];
        const cavalryAtk = this.state.unitInfo['cavalry']['attack'];
        const cavalryDef = this.state.unitInfo['cavalry']['defense'];

        let playerAtk = playerArcher * archerAtk + playerSwordsman * swordsmanAtk + playerArcherCavalry * archerCavalryAtk + playerCavalry * cavalryAtk;
        let playerDef = playerArcher * archerDef + playerSwordsman * swordsmanDef + playerArcherCavalry * archerCavalryDef + playerCavalry * cavalryDef;
        let enemyAtk = enemyArcher * archerAtk + enemySwordsman * swordsmanAtk + enemyArcherCavalry * archerCavalryAtk + enemyCavalry * cavalryAtk;
        let enemyDef = enemyArcher * archerDef + enemySwordsman * swordsmanDef + enemyArcherCavalry * archerCavalryDef + enemyCavalry * cavalryDef;
        this.calculateFight(playerAtk, playerDef, enemyAtk, enemyDef)
    };

    calculateFight = (playerAtk, playerDef, enemyAtk, enemyDef) => {
        let playerDefCopy = playerDef;
        let playerTurn = false;
        let playerWon = true;
        while (true) {
            if (playerTurn) {
                if (playerDef > 0) {
                    enemyDef -= playerAtk;
                } else {
                    playerWon = false;
                    break
                }
            } else {
                if (enemyDef > 0) {
                    playerDef -= enemyAtk;
                } else {
                    playerWon = true;
                    break
                }
            }
            playerTurn = !playerTurn;
        }
        if (playerWon) {
            document.getElementById("result").innerHTML = "Wygrałeś!"
        } else {
            document.getElementById("result").innerHTML = "Przegrałeś!"
        }
        if (playerDef < 0) {
            playerDef = 0
        }
        let lossPercent;
        if (playerDefCopy !== 0) {
            lossPercent = playerDef / playerDefCopy;
        } else {
            lossPercent = 0
        }
        this.calculateLosses(lossPercent)
    };

    calculateLosses = (lossPercent) => {
        let newArmy = {
            "archer": Math.ceil(this.state.army['archer'] * lossPercent),
            "swordsman": Math.ceil(this.state.army['swordsman'] * lossPercent),
            "archerCavalry": Math.ceil(this.state.army['archerCavalry'] * lossPercent),
            "cavalry": Math.ceil(this.state.army['cavalry'] * lossPercent)
        };
        let difference = (this.state.army['archer'] - newArmy['archer']) * this.state.unitInfo['archer']['population'] +
            (this.state.army['swordsman'] - newArmy['swordsman']) * this.state.unitInfo['swordsman']['population'] +
            (this.state.army['archerCavalry'] - newArmy['archerCavalry']) * this.state.unitInfo['archerCavalry']['population'] +
            (this.state.army['cavalry'] - newArmy['cavalry']) * this.state.unitInfo['cavalry']['population']
        this.setState({
            army: newArmy,
            population: this.state.population + difference,
            armyAmount: this.state.armyAmount - difference
        });
        setTimeout(this.cleanUpBattle, 3000)
    };

    cleanUpBattle = () => {
        document.getElementById("battlefield").style.display = "none";
        document.getElementById("result").innerText="";
        let newFights = this.state.fights;
        newFights.shift();
        this.setState({fights: newFights})
    };

    //finishDayCalculations

    finishDay = () => {
        this.calculateDaysToBuild();
        this.calculateResources();
        this.showSummary();
        setTimeout(this.startDay, 3000)
    };

    calculateDaysToBuild = () => {
        let newBuildings = [...this.state.buildings];
        for (const building in this.state.buildings) {
            if (this.state.buildings[building].daysToBuild > 1) {
                newBuildings[building].daysToBuild -= 1;
            } else {
                document.getElementById("buildWaiting" + this.state.buildings[building].buildingId).style.display = "none";
                document.getElementById("buildWaitingIcon" + this.state.buildings[building].buildingId).style.display = "none";
                if (document.getElementById("recruitment" + this.state.buildings[building].buildingId) != null) {
                    document.getElementById("recruitment" + this.state.buildings[building].buildingId).style.display = "block"
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
        this.setState({date: date.format('DD/MM/YYYY'), day: this.state.day + 1})
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
                                day={this.state.day}
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
                            <Battle
                                army={this.state.army}
                                fights={this.state.fights[0]}
                                startFight={this.startFight}
                            />
                        </div>)
                    }
                }/>
            </Router>
        );
    }
}

export default App;
