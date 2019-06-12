let emailoutput = document.getElementById("email-output");
let nameoutput = document.getElementById("username-output");
let oppdaterbutton = document.getElementById("oppdater-button");
let navncontainer = document.getElementById("navn-container");
let emailcontainer = document.getElementById("email-container");
let slettbutton = document.getElementById("slett-button");

outputEmail();
outputName();

oppdaterbutton.onclick = updateInfo;
slettbutton.onclick = deleteInfo;

function outputEmail(){
    let newEmail = "";
    
    newEmail = `
        <p id="email-text">Email</p>
        <input id="email-output" type="text" value="${localStorage.getItem("email")}">
        `;

        emailcontainer.innerHTML = newEmail;
}

function outputName(){
    let newName = "";
    
    newName = `
        <p id="username-text">Navn</p>
        <input id="username-output" type="text" value="${localStorage.getItem("username")}"></input>
        `;

        navncontainer.innerHTML = newName;

}

function updateInfo(){
    let updatedName = document.getElementById("username-output");
    localStorage.setItem("username", updatedName.value);

    let updatedEmail = document.getElementById("email-output");
    localStorage.setItem("email", updatedEmail.value);
    
}

function deleteInfo(){
    localStorage.clear()
    outputEmail();
    outputName();
    alert("Profil slettet.");
}
