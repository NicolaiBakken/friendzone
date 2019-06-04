const saveFirstnameButton = document.getElementById("save-firstname");

let firstname = document.getElementById("profile-firstname").value;
let surname = document.getElementById("profile-surname").value;

saveFirstnameButton.onclick = editFirstname;

function editFirstname() {
    firstname = document.getElementById("profile-firstname").value;
    surname = document.getElementById("profile-surname").value;
    alert("Hyggelig å hilse på deg, " + (firstname) + " " + (surname) + ".");
}
