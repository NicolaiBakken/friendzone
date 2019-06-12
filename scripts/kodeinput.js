let tosveip = document.getElementById("toSveip-button");
let firstCodebox = document.getElementById("codebox-1");
let secondCodebox = document.getElementById("codebox-2");
let thirdCodebox = document.getElementById("codebox-3");
let lastCodebox = document.getElementById("codebox-4");

tosveip.onclick = checkUser;


lastCodebox.addEventListener("keyup", function(){
    var nameInput = lastCodebox.value;
    if (nameInput != "") {
        tosveip.removeAttribute("disabled");
        tosveip.style.backgroundColor = "#FEAB53";
    }
    else {
        tosveip.setAttribute("disabled", null);
    }
})

function checkUser(){
    if(firstCodebox.value == 1 && secondCodebox.value == 2 && thirdCodebox.value == 3 && lastCodebox.value == 4) {
        localStorage.setItem("username", "Nicolai");
        localStorage.setItem("email", "nicolaibakken@hotmail.com");
    }
}

function outputEmail(){
    newEmail = "";

    newEmail = `
         <p id="email-output">${localStorage.getItem("email")}</p>
        `;    
        emailoutput.innerHTML = newEmail;
        document.getElementById("codebox-1").focus();
}


function outputEmail(){
    newEmail = "";

    newEmail = `
         <p id="email-output">${localStorage.getItem("email")}</p>
        `;    
        emailoutput.innerHTML = newEmail;
        document.getElementById("codebox-1").focus();
}