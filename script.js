const chatBox = document.getElementById("chat-box");
const input = document.getElementById("message-input");

function sendMessage() {
    const text = input.value.trim();

    if (text === "") return;

    addMessage(text, "user");
    input.value = "";

    setTimeout(() => {
        botReply(text);
    }, 1000);
}

function addMessage(text, sender) {
    const div = document.createElement("div");
    div.className = "message " + sender;
    div.innerHTML = text;
    chatBox.appendChild(div);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(message) {

    let reply = "Aww ❤️ Tell me more.";

    const msg = message.toLowerCase();

    if(msg.includes("hi") || msg.includes("hello")){
        reply = "Hey babe ❤️ Khana khais? 🍛😊";
    }
    else if(msg.includes("love")){
        reply = "I'm happy to spend time chatting with you. ❤️";
    }
    else if(msg.includes("sad")){
        reply = "I'm sorry you're having a tough time. 💙 I'm here to listen.";
    }
    else if(msg.includes("good night")){
        reply = "Good night, babe. 😘❤️ Sleep well. 'Every new sunrise is another chance to smile.' 🤗";
    }

    addMessage(reply,"bot");
}

input.addEventListener("keypress",function(e){
    if(e.key==="Enter"){
        sendMessage();
    }
});
