// hjelp med javascript please
const downButton = document.getElementById("btn-ned");
const upButton = document.getElementById("btn-opp");
const interestArea = document.getElementById("background-icons");
const matchBox = document.getElementById("popup-box");
const matchName = document.getElementById("likeName");
const continueBtn = document.getElementById("btn-videre");

let i1 = ["Svømming", "Fallskjerm", "Film", "Fotball", "Mat", "Friluft"];
let i1random = i1[Math.floor(Math.random() * i1.length)];

let i2 = ["Løping", "Dataspill", "Musikk", "Dommedag", "Mote", "Dyr"];
let i2random = i1[Math.floor(Math.random() * i1.length)];

let i3 = ["Boksing", "Dans", "Matte", "Uteliv", "Harry Potter", "Pokemon"];
let i3random = i1[Math.floor(Math.random() * i1.length)];

let i4 = ["Reise", "Dans", "Matte", "Uteliv", "Harry Potter", "Pokemon"];
let i4random = i1[Math.floor(Math.random() * i1.length)];


let name = ["Kjetil, 24", "Ole, 18", "Philip, 21", "Abdullah, 22", "Nina, 26", "Svein, 33", "Hedwig, 20"];
let nameRandom = name[Math.floor(Math.random() * name.length)];

    let userName = document.getElementById("name-age");


downButton.onclick = voteSwitch;
upButton.onclick = showMatchBox;
continueBtn.onclick = voteSwitch;

function voteSwitch(){
    let userInformation = "";
    
    
    document.getElementById("popup-box").style.opacity = 0;
        userInformation = `
         <p id="interest1">${i1[Math.floor(Math.random() * name.length)]}</p>
         <p id="interest2">${i2[Math.floor(Math.random() * name.length)]}</p>
         <p id="interest3">${i3[Math.floor(Math.random() * name.length)]}</p>
         <p id="interest4">${i4[Math.floor(Math.random() * name.length)]}</p>
        `;
    
        userName.innerHTML = name[Math.floor(Math.random() * name.length)];
    
    interestArea.innerHTML = userInformation;
    
}

function showMatchBox(){
    document.getElementById("popup-box").style.opacity = 100;
    matchName.innerHTML = document.getElementById("name-age");
    
}