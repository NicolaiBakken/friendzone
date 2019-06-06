let email = document.getElementById("mail-input");
let nextButton = document.getElementById("next-page");
let emailoutput = document.getElementById("studentmail-output");
let checkbox = document.getElementById("privacy-check");
let tosveip = document.getElementById("toSveip-button");
let lastCodebox = document.getElementById("codebox-4");

checkbox.onclick = enableNextButton;
nextButton.onclick = setEmail;

function enableNextButton(){
    document.getElementById("next-page").style.backgroundColor = "#FEAB53";
    document.getElementById("next-page").disabled = false;
}

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

function setEmail(){
    if(email.value == "slett")
    {
        localStorage.clear();
    }
    document.getElementById("confirmation-page").style.display = "block";
    localStorage.setItem("email", email.value);
    outputEmail();
}

function outputEmail(){
    newEmail = "";

    newEmail = `
         <p id="email-output">${localStorage.getItem("email")}</p>
        `;    
        emailoutput.innerHTML = newEmail;
        document.getElementById("codebox-1").focus();
}

function checkCodeInput() {
    if(document.getElementById("codebox-1").length >= 1){
        document.getElementById("codebox-2").focus();
    }
}



function setName() {
    localStorage.setItem("name", textBox.value);

}

function outputName() {
    alert(localStorage.getItem("name"))
}





  


