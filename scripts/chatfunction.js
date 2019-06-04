/* Creates the chat for FriendZone */

//Konstante Objekter
const chatSection = document.getElementById("chat-container");
const sendButton = document.getElementById("send-button");

// Variabler
let inputText = document.getElementById("text-input");
let messageContainer = document.getElementById("message-container");
let sentMessage = "";
let bubbleSize = 4;

sendButton.onclick = sendMessage;

inputText.addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    document.getElementById("send-button").click();
  }
});


//Sender melding utfra input som brukeren legger inn. Venter deretter 3 sekunder før den aktiverer autoreply
//funksjonen.
function sendMessage(){
    
    
    if(inputText.value != null) {
    let message = "";
    
    
        message += `
            <p id="userName">Bruker</p>
            <div id="messageArea">
                <p id="sentMessage">${inputText.value}</p>
            </div>
        `;
    
    sentMessage = inputText.value;
    inputText.value = "";
         
        
    messageContainer.innerHTML += message;
        
        
    setTimeout(autoReply, 3000);
               
    }
}


//Sjekker om sendt melding inneholder diverse strings og skriver ut passende svar. 

function autoReply(){
    if(sentMessage.includes("He")) {
        let replyMessage = "";
        
        replyMessage += `
            <p id="userNameBot">Ola</p>
            <div id="messageArea-reply">
                <p id="sentMessage">Halla!</p>
            </div>
        `;
        messageContainer.innerHTML += replyMessage;   
        
    }
    
    if(sentMessage.includes("Skjer")) {
        let replyMessage = "";
        
        replyMessage += `
            <p id="userNameBot">Ola</p>
            <div id="messageArea-reply">
                <p id="sentMessage">Lite. Duda?</p>
            </div>
        `;
        messageContainer.innerHTML += replyMessage;   
        
    }
    
    if(sentMessage.includes("lite")) {
        let replyMessage = "";
        
        replyMessage += `
            <p id="userNameBot">Ola</p>
            <div id="messageArea-reply">
                <p id="sentMessage">Haha følern</p>
            </div>
        `;
        messageContainer.innerHTML += replyMessage;   
        
    }
    
    
        
        
    
}

/*function sizeChecker(){
    
    
    document.getElementById("messageArea").style.width = "10rem";
    
        
    
    
}*/