const taskList = document.getElementById("task-list");
const userList = document.getElementById("user-list");

function createTask(taskName) {
    const taskItem = document.createElement("li");
    taskItem.textContent = taskName;
    taskList.appendChild(taskItem);
}

function createUser(userName) {
    const userItem = document.createElement("li");
    userItem.textContent = userName;
    userList.appendChild(userItem);
}

document.addEventListener("DOMContentLoaded", () => {
    const taskName = prompt("Enter a task name:");
    if (taskName) {
        createTask(taskName);
    }

    const userName = prompt("Enter a user name:");
    if (userName) {
        createUser(userName);
    }
});
const chatMessages = document.getElementById("chat-messages");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", () => {
    const message = messageInput.value.trim();
    if (message) {
        displayMessage("You", message);
        messageInput.value = "";
    }
});

function displayMessage(sender, message) {
    const messageItem = document.createElement("li");
    messageItem.textContent = `${sender}: ${message}`;
    chatMessages.appendChild(messageItem);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}