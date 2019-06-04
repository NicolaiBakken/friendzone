let email = document.getElementById("mail-input");
let nextButton = document.getElementById("next-page");
let emailoutput = document.getElementById("studentmail-output");
let checkbox = document.getElementById("privacy-check");

checkbox.onclick = enableNextButton;
nextButton.onclick = setEmail;

function enableNextButton(){
    document.getElementById("next-page").style.backgroundColor = "#FEAB53";
    document.getElementById("next-page").disabled = false;
}


function setEmail(){
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





  


