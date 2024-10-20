document.getElementById('send-btn').addEventListener('click', function() {
    const inputField = document.getElementById('chat-input');
    const userMessage = inputField.value;

    if (userMessage.trim() !== "") {
        // Display user's message
        addMessage(userMessage, 'user-message');

        // Clear the input field
        inputField.value = '';

        // Send the user's message to the server/AI and get a response
        getBotResponse(userMessage);
    }
});

function addMessage(message, className) {
    const chatOutput = document.getElementById('chat-output');
    const newMessage = document.createElement('div');
    newMessage.classList.add('message', className);
    newMessage.textContent = message;
    chatOutput.appendChild(newMessage);
    chatOutput.scrollTop = chatOutput.scrollHeight; // Scroll to the latest message
}

// Function to send user message to AI service and handle response
function getBotResponse(userMessage) {
    // Replace with actual AI service call
    fetch('/get-response', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
    })
    .then(response => response.json())
    .then(data => {
        // Display bot's response
        addMessage(data.response, 'bot-message');
    })
    .catch((error) => {
        console.error('Error:', error);
        addMessage('Something went wrong. Please try again.', 'bot-message');
    });
}
