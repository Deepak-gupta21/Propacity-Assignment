document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Collect form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;

        // Create a JSON object with the form data
        const formData = {
            name: name,
            email: email,
            mobile: mobile,
        };

        // Send data to Google Sheets (you would need to implement this)

        // Send data to the specified API
        sendDataToAPI(formData);
    });
});

// Function to send data to the API
function sendDataToAPI(formData) {
    // Define the API endpoint URL
    const apiUrl = "https://api.propacity.in/api/v1/webhooks/integration/61cf0d44-1ede-4dfa-b3ce-930072581261/insertLead";

    // Send a POST request to the API
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => {
            if (response.ok) {
                return response.json(); // If the response is successful, parse the JSON response
            } else {
                throw new Error('Failed to send data to the API');
            }
        })
        .then(data => {
            console.log('Data sent successfully:', data);
            // You can handle the API response here
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle errors here
        });
}


