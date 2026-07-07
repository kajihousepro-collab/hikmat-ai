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
    const msg = document.createElement("div");
    msg.className = "message " + sender;
    msg.innerHTML = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(userText) {
    let reply = "That's interesting ❤️ Tell me more.";

    if (userText.toLowerCase().includes("hi")) {
        reply = "Hey babe ❤️ How are you today?";
    }

    if (userText.toLowerCase().includes("love")) {
        reply = "You're special to me in this roleplay. ❤️";
    }

    addMessage(reply, "bot");
}
