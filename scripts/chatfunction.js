/* Creates the chat for FriendZone */

//HTML objects
const chatSection = document.getElementById("chat-container");
const sendButton = document.getElementById("send-button");

//Forskjellige arrays med informasjon om de forskjellige artiklene som genereres ferdig utfylt.
let inputText = document.getElementById("text-input");
let messageContainer = document.getElementById("message-container");
let sentMessage = "";

sendButton.onclick = sendMessage;


//genererer chatten med meldinger
function sendMessage(){
    
    
    if(inputText.value != null) {
    alert(inputText.value);
    let message = "";
    
    
        message += `
            <div id="messageArea">
                <p id="sentMessage">${inputText.value}</p>
            </div>
        `;
    
    sentMessage = inputText.value;    
    inputText.value = "";
    
        
    messageContainer.innerHTML += message;
        
    autoReply();
               
    }
}

function autoReply(){
    if(sentMessage == "Hei") {
        let replyMessage = "";
        
        replyMessage += `
            <div id="messageArea-reply">
                <p id="sentMessage">Halla!</p>
            </div>
        `;
        alert("SHIT!");
        messageContainer.innerHTML += replyMessage;   
        
    }
        
        
    
}