document.getElementById('decryptButton').addEventListener('click', function() {
    let userInput = document.getElementById('decryptionInput').value;
    let decryptionMessage = document.getElementById('decryptionMessage');

    // Check if the user input matches the secret code (e.g., #861)
    if (userInput === "861") {
        decryptionMessage.textContent = "Success! The code has been decrypted: 'Project Vortex: Phase III' will proceed.";
    } else {
        decryptionMessage.textContent = "Incorrect code. Try again!";
    }
});
