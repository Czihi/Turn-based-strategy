(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,a,t){e.exports=t.p+"static/media/Wood.a23ce481.png"},,,,,,function(e,a,t){e.exports=t.p+"static/media/Waiting.59cf7517.gif"},,,,function(e,a,t){e.exports=t.p+"static/media/Farm.1b53827b.png"},function(e,a,t){e.exports=t.p+"static/media/House.8ba6d2b7.png"},function(e,a,t){e.exports=t.p+"static/media/Bank.59b05d19.png"},function(e,a,t){e.exports=t.p+"static/media/Barracks.261953ea.png"},function(e,a,t){e.exports=t.p+"static/media/Stable.9ffa80d4.png"},function(e,a,t){e.exports=t.p+"static/media/Grass.8e48751d.png"},,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/Archer.e0ad4480.png"},function(e,a,t){e.exports=t.p+"static/media/Swordsman.26057a46.png"},function(e,a,t){e.exports=t.p+"static/media/CavalryArcher.5e948831.png"},function(e,a,t){e.exports=t.p+"static/media/Cavalry.41ddb896.png"},,,,,function(e,a,t){e.exports=t(48)},,,,,function(e,a,t){},,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(22),r=t.n(i),s=(t(40),t(9)),c=t(23),d=t(24),u=t(33),o=t(25),m=t(34),b=(t(41),t(42),t(31)),g=t(2),y=t(26),f=t.n(y),h=t(1),p=t.n(h),_=function(e){return l.a.createElement("div",{className:"resources",style:{backgroundImage:"url(".concat(p.a,")")}},l.a.createElement("div",{className:"resources__resource resources__date"},l.a.createElement("div",{className:"resources__date--value"},e.date," - dzie\u0144 ",e.day),l.a.createElement("button",{id:"finish",onClick:function(){e.finishDay()},className:"resources__date--button"},"Zako\u0144cz dzie\u0144")),l.a.createElement("div",{className:"resources__resource resources__food"},"\u017bywno\u015b\u0107: ",e.food),l.a.createElement("div",{className:"resources__resource resources__population"},"Populacja: ",e.population),l.a.createElement("div",{className:"resources__resource resources__money"},"Pieni\u0105dze: ",e.money),l.a.createElement("div",{className:"resources__resource resources__army"},"Armia: ",e.armyAmount))},I=t(11),E=t.n(I),v=t(12),k=t.n(v),N=t(13),w=t.n(N),B=t(14),A=t.n(B),C=t(15),T=t.n(C),R={farm:E.a,house:k.a,bank:w.a,barracks:A.a,stable:T.a},S=function(e){function a(){document.getElementById("building__panel"+e.name).style.display="none"}return l.a.createElement("div",{className:"building__container"},l.a.createElement("div",{onClick:function(){document.getElementById("building__panel"+e.name).style.display="block"},id:e.name,className:"building",unselectable:"on"},l.a.createElement("img",{className:"building__image",src:R[e.image],alt:e.image,draggable:"false",unselectable:"on"}),l.a.createElement("div",{className:"building__name"},e.name)),l.a.createElement("div",{id:"building__panel"+e.name,className:"building__panel"},l.a.createElement("div",{className:"building__button--group"},l.a.createElement("button",{onClick:function(){e.handleAdding({name:e.name,image:e.image,price:e.price}),a()},className:"building__button--yes"},"\u2713"),l.a.createElement("button",{onClick:function(){a()},className:"building__button--no"},"\u2716"))))},z=function(e){return l.a.createElement("div",{className:"buildingsList",style:{backgroundImage:"url(".concat(p.a,")")}},l.a.createElement(S,{name:"Farma",image:"farm",price:50,handleAdding:e.handleAddingFarm}),l.a.createElement(S,{name:"Dom",image:"house",price:100,handleAdding:e.handleAddingHouse}),l.a.createElement(S,{name:"Bank",image:"bank",price:180,handleAdding:e.handleAddingBank}),l.a.createElement(S,{name:"Koszary",image:"barracks",price:120,handleAdding:e.handleAddingBarracks}),l.a.createElement(S,{name:"Stajnia",image:"stable",price:300,handleAdding:e.handleAddingStable}))},D=t(16),F=t.n(D),O=t(7),W=t.n(O),x=function(e){return l.a.createElement("div",{id:"house"+e.buildingId,className:"house"},l.a.createElement("img",{unselectable:"on",draggable:"false",className:"buildArea__image",src:k.a,alt:"house"+e.buildingId,onClick:function(){document.getElementById("housePanel"+e.buildingId).style.display="block"}}),l.a.createElement("img",{id:"buildWaitingIcon"+e.buildingId,unselectable:"on",draggable:"false",className:"build__waiting",src:W.a,alt:"waiting"}),l.a.createElement("div",{id:"housePanel"+e.buildingId,className:"house__panel",style:{backgroundImage:"url(".concat(p.a,")")}},l.a.createElement("button",{className:"house__panel--close",onClick:function(){document.getElementById("housePanel"+e.buildingId).style.display="none"}},"\u2716"),l.a.createElement("div",{className:"house__panel--name"},"Dom"),l.a.createElement("div",{id:"buildWaiting"+e.buildingId,className:"house__panel--buildWaiting"}," Zosta\u0142o ",e.daysToBuild," dni do wybudowania")))},j=function(e){return l.a.createElement("div",{id:"farm"+e.buildingId,className:"farm"},l.a.createElement("img",{unselectable:"on",draggable:"false",className:"buildArea__image",src:E.a,alt:"farm"+e.buildingId,onClick:function(){document.getElementById("farmPanel"+e.buildingId).style.display="block"}}),l.a.createElement("img",{id:"buildWaitingIcon"+e.buildingId,unselectable:"on",draggable:"false",className:"build__waiting",src:W.a,alt:"waiting"}),l.a.createElement("div",{id:"farmPanel"+e.buildingId,className:"farm__panel",style:{backgroundImage:"url(".concat(p.a,")")}},l.a.createElement("button",{className:"farm__panel--close",onClick:function(){document.getElementById("farmPanel"+e.buildingId).style.display="none"}},"\u2716"),l.a.createElement("div",{className:"farm__panel--name"},"Farma"),l.a.createElement("div",{id:"buildWaiting"+e.buildingId,className:"farm__panel--buildWaiting"}," Zosta\u0142o ",e.daysToBuild," dni do wybudowania")))},P=function(e){return l.a.createElement("div",{id:"bank"+e.buildingId,className:"bank"},l.a.createElement("img",{unselectable:"on",draggable:"false",className:"buildArea__image",src:w.a,alt:"bank"+e.buildingId,onClick:function(){document.getElementById("bankPanel"+e.buildingId).style.display="block"}}),l.a.createElement("img",{id:"buildWaitingIcon"+e.buildingId,unselectable:"on",draggable:"false",className:"build__waiting",src:W.a,alt:"waiting"}),l.a.createElement("div",{id:"bankPanel"+e.buildingId,className:"bank__panel",style:{backgroundImage:"url(".concat(p.a,")")}},l.a.createElement("button",{className:"bank__panel--close",onClick:function(){document.getElementById("bankPanel"+e.buildingId).style.display="none"}},"\u2716"),l.a.createElement("div",{className:"bank__panel--name"},"Bank"),l.a.createElement("div",{id:"buildWaiting"+e.buildingId,className:"bank__panel--buildWaiting"}," Zosta\u0142o ",e.daysToBuild," dni do wybudowania")))},M=function(e){function a(){document.getElementById("barracksPanel"+e.buildingId).style.display="none"}return l.a.createElement("div",{id:"barracks"+e.buildingId,className:"barracks"},l.a.createElement("img",{unselectable:"on",draggable:"false",className:"buildArea__image",src:A.a,alt:"barracks"+e.buildingId,onClick:function(){document.getElementById("barracksPanel"+e.buildingId).style.display="block"}}),l.a.createElement("img",{id:"buildWaitingIcon"+e.buildingId,unselectable:"on",draggable:"false",className:"build__waiting",src:W.a,alt:"waiting"}),l.a.createElement("div",{id:"barracksPanel"+e.buildingId,className:"barracks__panel",style:{backgroundImage:"url(".concat(p.a,")")}},l.a.createElement("button",{className:"barracks__panel--close",onClick:function(){a()}},"\u2716"),l.a.createElement("div",{className:"barracks__panel--name"},"Koszary"),l.a.createElement("div",{id:"buildWaiting"+e.buildingId,className:"barracks__panel--buildWaiting"}," Zosta\u0142o ",e.daysToBuild," dni do wybudowania"),l.a.createElement("div",{className:"recruitment",id:"recruitment"+e.buildingId},l.a.createElement("div",{className:"barracks__panel--recruit"},"Rekrutuj:"),l.a.createElement("div",{className:"barracks__panel--swordsman"},l.a.createElement("div",{className:"barracks__panel--label"},"Miecznik"),l.a.createElement("input",{min:0,id:"swordsmanNumber"+e.buildingId,placeholder:"0",className:"barracks__panel--input",type:"number"}),l.a.createElement("button",{className:"barracks__panel--button",onClick:function(){!function(){var t=document.getElementById("swordsmanNumber"+e.buildingId);e.handleRecruiting("swordsman",t.value),a(),t.value=0}()}},"\u2713")),l.a.createElement("div",{className:"barracks__panel--archer"},l.a.createElement("div",{className:"barracks__panel--label"},"\u0141ucznik"),l.a.createElement("input",{min:0,id:"archerNumber"+e.buildingId,placeholder:"0",className:"barracks__panel--input",type:"number"}),l.a.createElement("button",{className:"barracks__panel--button",onClick:function(){!function(){var t=document.getElementById("archerNumber"+e.buildingId);e.handleRecruiting("archer",t.value),a(),t.value=0}()}},"\u2713")))))},H=function(e){function a(){document.getElementById("stablePanel"+e.buildingId).style.display="none"}return l.a.createElement("div",{id:"stable"+e.buildingId,className:"stable"},l.a.createElement("img",{unselectable:"on",draggable:"false",className:"buildArea__image",src:T.a,alt:"stable"+e.buildingId,onClick:function(){document.getElementById("stablePanel"+e.buildingId).style.display="block"}}),l.a.createElement("img",{id:"buildWaitingIcon"+e.buildingId,unselectable:"on",draggable:"false",className:"build__waiting",src:W.a,alt:"waiting"}),l.a.createElement("div",{id:"stablePanel"+e.buildingId,className:"stable__panel",style:{backgroundImage:"url(".concat(p.a,")")}},l.a.createElement("button",{className:"stable__panel--close",onClick:function(){a()}},"\u2716"),l.a.createElement("div",{className:"stable__panel--name"},"Stajnia"),l.a.createElement("div",{id:"buildWaiting"+e.buildingId,className:"stable__panel--buildWaiting"}," Zosta\u0142o ",e.daysToBuild," dni do wybudowania"),l.a.createElement("div",{className:"recruitment",id:"recruitment"+e.buildingId},l.a.createElement("div",{className:"stable__panel--recruit"},"Rekrutuj:"),l.a.createElement("div",{className:"stable__panel--archerCavalry"},l.a.createElement("div",{className:"stable__panel--label"},"Kawaleria \u0142ucznicza"),l.a.createElement("input",{min:0,id:"archerCavalryNumber"+e.buildingId,placeholder:"0",className:"stable__panel--input",type:"number"}),l.a.createElement("button",{className:"stable__panel--button",onClick:function(){!function(){var t=document.getElementById("archerCavalryNumber"+e.buildingId);e.handleRecruiting("archerCavalry",t.value),a(),t.value=0}()}},"\u2713")),l.a.createElement("div",{className:"stable__panel--cavalry"},l.a.createElement("div",{className:"stable__panel--label"},"Kawaleria"),l.a.createElement("input",{min:0,id:"cavalryNumber"+e.buildingId,placeholder:"0",className:"stable__panel--input",type:"number"}),l.a.createElement("button",{className:"stable__panel--button",onClick:function(){!function(){var t=document.getElementById("cavalryNumber"+e.buildingId);e.handleRecruiting("cavalry",t.value),a(),t.value=0}()}},"\u2713")))))},Z=function(e){var a=[];for(var t in e.buildings)"Dom"===e.buildings[t].name?a.push(l.a.createElement(x,{key:e.buildings[t].buildingId,buildingId:e.buildings[t].buildingId,daysToBuild:e.buildings[t].daysToBuild})):"Farma"===e.buildings[t].name?a.push(l.a.createElement(j,{key:e.buildings[t].buildingId,buildingId:e.buildings[t].buildingId,daysToBuild:e.buildings[t].daysToBuild})):"Bank"===e.buildings[t].name?a.push(l.a.createElement(P,{key:e.buildings[t].buildingId,buildingId:e.buildings[t].buildingId,daysToBuild:e.buildings[t].daysToBuild})):"Koszary"===e.buildings[t].name?a.push(l.a.createElement(M,{key:e.buildings[t].buildingId,buildingId:e.buildings[t].buildingId,daysToBuild:e.buildings[t].daysToBuild,handleRecruiting:e.handleRecruiting})):"Stajnia"===e.buildings[t].name&&a.push(l.a.createElement(H,{key:e.buildings[t].buildingId,buildingId:e.buildings[t].buildingId,daysToBuild:e.buildings[t].daysToBuild,handleRecruiting:e.handleRecruiting}));return l.a.createElement("div",{className:"buildArea",draggable:"false",unselectable:"on"},a)},Y=function(e){return l.a.createElement("div",{style:{backgroundImage:"url(".concat(F.a,")")},className:"board"},l.a.createElement(Z,{buildings:e.buildings,handleRecruiting:e.handleRecruiting}))},K=t(27),L=t.n(K),G=function(e){return l.a.createElement("div",{className:"archer"},l.a.createElement("img",{src:L.a,className:"archer__image",alt:"archer__image"}),l.a.createElement("div",{className:"archer__number"},e.archerNumber))},J=t(28),U=t.n(J),$=function(e){return l.a.createElement("div",{className:"swordsman"},l.a.createElement("img",{src:U.a,className:"swordsman__image",alt:"swordsman__image"}),l.a.createElement("div",{className:"swordsman__number"},e.swordsmanNumber))},q=t(29),Q=t.n(q),V=function(e){return l.a.createElement("div",{className:"cavalryArcher"},l.a.createElement("img",{src:Q.a,className:"cavalryArcher__image",alt:"cavalryArcher__image"}),l.a.createElement("div",{className:"cavalryArcher__number"},e.cavalryArcherNumber))},X=t(30),ee=t.n(X),ae=function(e){return l.a.createElement("div",{className:"cavalry"},l.a.createElement("img",{src:ee.a,className:"cavalry__image",alt:"cavalry__image"}),l.a.createElement("div",{className:"cavalry__number"},e.cavalryNumber))},te=function(e){return l.a.createElement("div",{className:"armyList",style:{backgroundImage:"url(".concat(p.a,")")}},l.a.createElement(G,{archerNumber:e.army.archer}),l.a.createElement($,{swordsmanNumber:e.army.swordsman}),l.a.createElement(V,{cavalryArcherNumber:e.army.archerCavalry}),l.a.createElement(ae,{cavalryNumber:e.army.cavalry}))},ne=function(e){return l.a.createElement("div",{className:"main"},l.a.createElement(z,{handleAddingHouse:e.handleAddingHouse,handleAddingFarm:e.handleAddingFarm,handleAddingBank:e.handleAddingBank,handleAddingBarracks:e.handleAddingBarracks,handleAddingStable:e.handleAddingStable}),l.a.createElement(Y,{buildings:e.buildings,handleRecruiting:e.handleRecruiting}),l.a.createElement(te,{army:e.army}))},le=function(){return l.a.createElement("div",null,l.a.createElement("div",{id:"summary",className:"daySummary",style:{backgroundImage:"url(".concat(p.a,")")}},"Zako\u0144czono dzie\u0144"),l.a.createElement("div",{id:"resources",className:"noResources",style:{backgroundImage:"url(".concat(p.a,")")}},"Brak \u015brodk\xf3w na wybudowanie:"),l.a.createElement("div",{id:"recruitment",className:"noResources",style:{backgroundImage:"url(".concat(p.a,")")}},"Brak \u015brodk\xf3w na zrekrutowanie:"))},ie=function(){return l.a.createElement("div",{className:"bottom",style:{backgroundImage:"url(".concat(p.a,")")}})},re=function(e){return l.a.createElement("div",{id:"battlefield",className:"battle",style:{backgroundImage:"url(".concat(F.a,")")}},l.a.createElement("div",{className:"battle__label",style:{backgroundImage:"url(".concat(p.a,")")}},"Zosta\u0142e\u015b zaatakowany!"),l.a.createElement("div",{className:"battle__info"},l.a.createElement("div",{className:"battle__info--ally",style:{backgroundImage:"url(".concat(p.a,")")}},l.a.createElement("div",{className:"battle__info--allyLabel"},"Twoja armia"),l.a.createElement(G,{archerNumber:e.army.archer}),l.a.createElement($,{swordsmanNumber:e.army.swordsman}),l.a.createElement(V,{cavalryArcherNumber:e.army.archerCavalry}),l.a.createElement(ae,{cavalryNumber:e.army.cavalry})),l.a.createElement("div",{className:"battle__info--middle"},l.a.createElement("button",{className:"battle__info--button",onClick:function(){e.startFight()}},"Walcz!"),l.a.createElement("div",{id:"result",className:"battle__info--result"})),l.a.createElement("div",{className:"battle__info--enemy",style:{backgroundImage:"url(".concat(p.a,")")}},l.a.createElement("div",{className:"battle__info--enemyLabel"},"Armia przeciwnika"),l.a.createElement(G,{archerNumber:e.fights.archer}),l.a.createElement($,{swordsmanNumber:e.fights.swordsman}),l.a.createElement(V,{cavalryArcherNumber:e.fights.archerCavalry}),l.a.createElement(ae,{cavalryNumber:e.fights.cavalry}))))},se=f()(),ce=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(u.a)(this,Object(o.a)(a).call(this,e))).handleAddingFarm=function(e){if(t.state.money-e.price>=0){var a=Object(s.a)(t.state.buildings);e.buildingId=t.state.buildingId,a.push(e),e.daysToBuild=t.state.buildTimes.farm,t.setState({buildingId:t.state.buildingId+1,buildings:a,numberOfFarms:t.state.numberOfFarms+1,money:t.state.money-e.price,foodDayIncome:t.state.foodDayIncome+t.farmFoodIncome})}else t.showNoResources(e.name)},t.handleAddingHouse=function(e){if(t.state.money-e.price>=0){var a=Object(s.a)(t.state.buildings);e.buildingId=t.state.buildingId,e.daysToBuild=t.state.buildTimes.house,a.push(e),t.setState({buildingId:t.state.buildingId+1,buildings:a,numberOfHouses:t.state.numberOfHouses+1,money:t.state.money-e.price,population:t.state.population+t.homePopulation,foodDayIncome:t.state.foodDayIncome-t.homeFoodExpense})}else t.showNoResources(e.name)},t.handleAddingBank=function(e){if(t.state.money-e.price>=0){var a=Object(s.a)(t.state.buildings);e.buildingId=t.state.buildingId,e.daysToBuild=t.state.buildTimes.bank,a.push(e),t.setState({buildingId:t.state.buildingId+1,buildings:a,numberOfBanks:t.state.numberOfBanks+1,money:t.state.money-e.price,moneyDayIncome:t.state.moneyDayIncome+t.bankMoneyIncome})}else t.showNoResources(e.name)},t.handleAddingBarracks=function(e){if(t.state.money-e.price>=0){var a=Object(s.a)(t.state.buildings);e.buildingId=t.state.buildingId,e.daysToBuild=t.state.buildTimes.barracks,a.push(e),t.setState({buildingId:t.state.buildingId+1,buildings:a,numberOfBarracks:t.state.numberOfBarracks+1,money:t.state.money-e.price})}else t.showNoResources(e.name)},t.handleAddingStable=function(e){if(t.state.money-e.price>=0){var a=Object(s.a)(t.state.buildings);e.buildingId=t.state.buildingId,e.daysToBuild=t.state.buildTimes.stable,a.push(e),t.setState({buildingId:t.state.buildingId+1,buildings:a,numberOfStables:t.state.numberOfStables+1,money:t.state.money-e.price})}else t.showNoResources(e.name)},t.handleRecruiting=function(e,a){var n=t.state.unitInfo[e].population*a,l=t.state.unitInfo[e].money*a;if(a>0)if(n<=t.state.population)if(l<=t.state.money){var i=t.state.army;i[e]+=parseInt(a),t.setState({army:i,armyAmount:t.state.armyAmount+parseInt(n),money:t.state.money-l,population:t.state.population-n})}else t.showRecruitmentFail("Brak \u015brodk\xf3w na zrekrutowanie:\n"+a+"x "+t.state.polishNames[e]);else t.showRecruitmentFail("Brak populacji na zrekrutowanie:\n"+a+"x "+t.state.polishNames[e])},t.startDay=function(){t.state.fights[0].day===t.state.day&&(document.getElementById("battlefield").style.display="block")},t.startFight=function(){var e=t.state.army.archer,a=t.state.army.swordsman,n=t.state.army.archerCavalry,l=t.state.army.cavalry,i=t.state.fights[0].archer,r=t.state.fights[0].swordsman,s=t.state.fights[0].archerCavalry,c=t.state.fights[0].cavalry,d=t.state.unitInfo.archer.attack,u=t.state.unitInfo.archer.defense,o=t.state.unitInfo.swordsman.attack,m=t.state.unitInfo.swordsman.defense,b=t.state.unitInfo.archerCavalry.attack,g=t.state.unitInfo.archerCavalry.defense,y=t.state.unitInfo.cavalry.attack,f=t.state.unitInfo.cavalry.defense,h=e*d+a*o+n*b+l*y,p=e*u+a*m+n*g+l*f,_=i*d+r*o+s*b+c*y,I=i*u+r*m+s*g+c*f;t.calculateFight(h,p,_,I)},t.calculateFight=function(e,a,n,l){for(var i,r=a,s=!1,c=!0;;){if(s){if(!(a>0)){c=!1;break}l-=e}else{if(!(l>0)){c=!0;break}a-=n}s=!s}document.getElementById("result").innerHTML=c?"Wygra\u0142e\u015b!":"Przegra\u0142e\u015b!",a<0&&(a=0),i=0!==r?a/r:0,t.calculateLosses(i)},t.calculateLosses=function(e){var a={archer:Math.ceil(t.state.army.archer*e),swordsman:Math.ceil(t.state.army.swordsman*e),archerCavalry:Math.ceil(t.state.army.archerCavalry*e),cavalry:Math.ceil(t.state.army.cavalry*e)},n=(t.state.army.archer-a.archer)*t.state.unitInfo.archer.population+(t.state.army.swordsman-a.swordsman)*t.state.unitInfo.swordsman.population+(t.state.army.archerCavalry-a.archerCavalry)*t.state.unitInfo.archerCavalry.population+(t.state.army.cavalry-a.cavalry)*t.state.unitInfo.cavalry.population;t.setState({army:a,population:t.state.population+n,armyAmount:t.state.armyAmount-n}),setTimeout(t.cleanUpBattle,3e3)},t.cleanUpBattle=function(){document.getElementById("battlefield").style.display="none",document.getElementById("result").innerText="";var e=t.state.fights;e.shift(),t.setState({fights:e})},t.finishDay=function(){t.calculateDaysToBuild(),t.calculateResources(),t.showSummary(),setTimeout(t.startDay,3e3)},t.calculateDaysToBuild=function(){var e=Object(s.a)(t.state.buildings);for(var a in t.state.buildings)t.state.buildings[a].daysToBuild>1?e[a].daysToBuild-=1:(document.getElementById("buildWaiting"+t.state.buildings[a].buildingId).style.display="none",document.getElementById("buildWaitingIcon"+t.state.buildings[a].buildingId).style.display="none",null!=document.getElementById("recruitment"+t.state.buildings[a].buildingId)&&(document.getElementById("recruitment"+t.state.buildings[a].buildingId).style.display="block"))},t.calculateResources=function(){t.calculateDate(),t.calculateFood(),t.calculateMoney()},t.calculateDate=function(){se=se.add(1,"day"),t.setState({date:se.format("DD/MM/YYYY"),day:t.state.day+1})},t.calculateFood=function(){var e=t.state.food+t.state.foodDayIncome;e>=0?t.setState({food:e}):t.setState({food:0})},t.calculateMoney=function(){var e=t.state.money+t.state.moneyDayIncome;t.setState({money:e})},t.showNoResources=function(e){document.getElementById("resources").style.display="block",document.getElementById("resources").innerText="Brak \u015brodk\xf3w na wybudowanie:\n"+e,setTimeout(t.hideNoResources,3e3)},t.hideNoResources=function(){document.getElementById("resources").style.display="none"},t.hideSummary=function(){document.getElementById("summary").style.display="none",document.getElementById("finish").style.backgroundColor="#4f271b",document.getElementById("finish").removeAttribute("disabled")},t.showSummary=function(){document.getElementById("summary").style.display="block";var e="Zako\u0144czono dzie\u0144!\nTempo przyrostu \u017cywno\u015bci: "+t.state.foodDayIncome+"\n Tempo przyrostu pieni\u0119dzy: "+t.state.moneyDayIncome;t.state.food+t.state.foodDayIncome<0&&(e+="\nBrakuje \u017cywno\u015bci."),document.getElementById("summary").innerText=e,document.getElementById("finish").style.backgroundColor="grey",document.getElementById("finish").setAttribute("disabled","true"),setTimeout(t.hideSummary,3e3)},t.showRecruitmentFail=function(e){document.getElementById("recruitment").style.display="block",document.getElementById("recruitment").innerText=e,setTimeout(t.hideRecruitmentFail,3e3)},t.hideRecruitmentFail=function(){document.getElementById("recruitment").style.display="none"},t.state={date:se.format("DD/MM/YYYY"),day:1,armyAmount:0,food:0,population:0,money:1e5,foodDayIncome:0,moneyDayIncome:0,buildTimes:{farm:1,house:2,bank:3,barracks:3,stable:5},buildings:[],buildingId:0,numberOfBanks:0,numberOfBarracks:0,numberOfFarms:0,numberOfHouses:0,numberOfStables:0,army:{archer:0,swordsman:0,archerCavalry:0,cavalry:0},unitInfo:{archer:{money:20,population:1,attack:3,defense:5},swordsman:{money:15,population:1,attack:5,defense:2},archerCavalry:{money:100,population:2,attack:5,defense:15},cavalry:{money:120,population:2,attack:20,defense:5}},polishNames:{archer:"\u0141ucznik",swordsman:"Miecznik",archerCavalry:"Kawaleria \u0142ucznicza",cavalry:"Kawaleria"},fights:[{day:5,archer:10,swordsman:10,archerCavalry:0,cavalry:0},{day:10,archer:100,swordsman:100,archerCavalry:20,cavalry:10},{day:15,archer:300,swordsman:500,archerCavalry:100,cavalry:200},{day:0,archer:300,swordsman:500,archerCavalry:100,cavalry:200}]},t.farmFoodIncome=10,t.homePopulation=20,t.homeFoodExpense=3,t.bankMoneyIncome=50,t}return Object(m.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(b.a,null,l.a.createElement(g.a,{path:"/Turn-based-strategy",exact:!0,render:function(){return document.title="Gra strategiczna",l.a.createElement("div",null,l.a.createElement(le,null),l.a.createElement(_,{date:e.state.date,food:e.state.food,population:e.state.population,money:e.state.money,armyAmount:e.state.armyAmount,day:e.state.day,finishDay:e.finishDay}),l.a.createElement(ne,{buildings:e.state.buildings,army:e.state.army,handleAddingHouse:e.handleAddingHouse,handleAddingFarm:e.handleAddingFarm,handleAddingBank:e.handleAddingBank,handleAddingBarracks:e.handleAddingBarracks,handleAddingStable:e.handleAddingStable,handleRecruiting:e.handleRecruiting}),l.a.createElement(ie,null),l.a.createElement(re,{army:e.state.army,fights:e.state.fights[0],startFight:e.startFight}))}}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}],[[35,1,2]]]);
//# sourceMappingURL=main.2209f459.chunk.js.map