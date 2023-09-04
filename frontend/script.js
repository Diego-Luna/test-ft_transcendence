var socket = new WebSocket("ws://localhost:8080");

socket.addEventListener("open", function (event) {
  console.log("Connected to server!");
});

socket.addEventListener("message", function (event) {
  console.log(event.data);
  const message = String(event.data);
  const chatMessages = document.getElementById('chat-messages');
  chatMessages.innerHTML += `<div class="message">${message}</div>`;
});

socket.addEventListener("close", function (event) {
  console.log("Disconnected from server!");
});

document.getElementById('send-button').addEventListener('click', () => {
  const nameInput = document.getElementById('message-input-2');
  const messageInput = document.getElementById('message-input');
  const name = nameInput.value;
  const message = messageInput.value;
  let send = `${name}: ${message}`;
  console.log(send); // Send the message as plain text
  socket.send(send); // Send the message as plain text
  messageInput.value = '';
});
