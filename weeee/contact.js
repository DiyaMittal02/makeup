document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);

    fetch('send_email.php', {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json())
        .then(data => {
            const responseMessage = document.getElementById('responseMessage');
            responseMessage.innerText = data.message; // Display the message from PHP
            responseMessage.style.color = data.status === "success" ? "green" : "red";
        })
        .catch(error => {
            console.error('Error:', error);
            const responseMessage = document.getElementById('responseMessage');
            responseMessage.innerText = "An error occurred. Please try again.";
            responseMessage.style.color = "red";
        });
});
