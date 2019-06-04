// hjelp med javascript please
const downButton = document.getElementById("btn-ned");
const upButton = document.getElementById("btn-opp");
const interestArea = document.getElementById("background-icons");
const matchBox = document.getElementById("popup-box");
const matchName = document.getElementById("likeName");
let continueBtn = document.getElementById("btn-videre");
let bitmojiIcon = document.getElementById("bitmoji-container");

let userInfo = document.getElementById("user-info");

let userInfo1 = ["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex omnis rerum similique quod vero molestias vel at voluptatum iusto commodi.", 
 "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, minus provident rerum fugit in reprehenderit cumque aut praesentium explicabo labore neque sunt temporibus ea accusantium quasi qui laudantium? Nostrum, enim!",
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, sit cupiditate. Exercitationem, totam similique. Nulla sapiente explicabo quo sequi atque quam autem recusandae dicta architecto.",
"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo cum, nihil perspiciatis corporis minima neque dolorem, illo quae, qui maiores odio labore sint eum at perferendis sequi eius culpa! Officiis molestiae ad numquam ducimus pariatur dolore molestias iste quisquam placeat."]


let i1 = ["Bilder/mat.png", "Bilder/løing.png"];
let i1random = i1[Math.floor(Math.random() * i1.length)];

let i2 = ["Bilder/katt.png", "Bilder/film.png"];
let i2random = i2[Math.floor(Math.random() * i2.length)];

let i3 = ["Bilder/hund.png", "Bilder/nattklubb.png"];
let i3random = i3[Math.floor(Math.random() * i3.length)];

let i4 = ["Bilder/reise.png", "Bilder/snakkeboble.png"];
let i4random = i4[Math.floor(Math.random() * i4.length)];


let bitmojiIcons = ["Bilder/bitmoji2.png", "Bilder/bitmoji3.png", "Bilder/bitmoji4.png", "Bilder/bitmoji5.png", "Bilder/bitmoji6.png"]; 
let randomBitmoji = "";

let name = ["Kjetil", "Jesper", "Ole", "Ivar", "Nora", "Emilie", "Nicolai", "Abdullah", "Philip"];
let nameRandom = name[Math.floor(Math.random() * name.length)];

    let userName = document.getElementById("name-age");
    let randomName = "";



downButton.onclick = voteSwitch;
upButton.onclick = showMatchBox;
continueBtn.onclick = voteSwitch;

function voteSwitch(){
    let userInformation = "";
    
    
    document.getElementById("popup-box").style.opacity = 0;
    document.getElementById("popup-box").style.zIndex = -1;
        userInformation = `
         <img class="icons" id="interestImg1" src="${i1[Math.floor(Math.random() * 2)]}">
         <img class="icons" id="interestImg2" src="${i2[Math.floor(Math.random() * 2)]}">
         <img class="icons" id="interestImg3" src="${i3[Math.floor(Math.random() * 2)]}">
         <img class="icons" id="interestImg4" src="${i4[Math.floor(Math.random() * 2)]}">
        `;

        randomName = name[Math.floor(Math.random() * name.length)];

        userName.innerHTML = randomName;

        userInfo.innerHTML = userInfo1[Math.floor(Math.random() * userInfo1.length)];


    
    interestArea.innerHTML = userInformation;

    
}

function showMatchBox(){
    document.getElementById("popup-box").style.opacity = 100;
    document.getElementById("popup-box").style.zIndex = 10;
    matchName.innerHTML = document.getElementById(name);

    randomBitmoji = bitmojiIcons[Math.floor(Math.random() * bitmojiIcons.length)];

    let newBitmojiIcon = "";
    newBitmojiIcon = `
        <img id="bitmoji" src="${randomBitmoji}">
    `;

    bitmojiIcon.innerHTML = newBitmojiIcon;


    

    let newName = "";
    newName = `
        <p>${randomName}</p>
    `;  
    matchName.innerHTML = newName;
    
}