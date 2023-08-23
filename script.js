// Example code for smooth scrolling to sections when menu links are clicked
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// to hide the top bar when I scroll 
let prevScrollPos = window.offsetTop;
const topbar = document.querySelector(".topbar");

window.onscroll = function() {
    let currentScrollPos = window.offsetTop;

    if (prevScrollPos > currentScrollPos) {
        
        topbar.style.top = "0";
    } else {
        topbar.style.top = "-100%"; // Hide completely above the viewport
    }


    prevScrollPos = currentScrollPos;
};
// for the contact me 
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Collect form data
        const formData = new FormData(form);

        // Send the form data to the server for processing
        fetch("send_email.php", {
            method: "POST",
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Clear the form
                form.reset();
                // Display a success message
                alert("Message sent successfully!");
            } else {
                alert("Message failed to send. Please try again later.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred while sending the message.");
        });
    });
});


// for the game
// Define an array of incident scenarios
const scenarios = [
    {
        description: "You receive an email with a suspicious attachment. What do you do?",
        options: [
            { text: "Open the attachment", result: "Malware infection! Take immediate action to isolate the system." },
            { text: "Delete the email", result: "Safe choice. The potential threat is eliminated." }
        ]
    },
    // Add more scenarios and options as needed
];

// Function to display a scenario and receive user input
function playScenario(scenarioIndex) {
    const currentScenario = scenarios[scenarioIndex];
    const userChoice = prompt(currentScenario.description + "\nOptions:\n1. " + currentScenario.options[0].text + "\n2. " + currentScenario.options[1].text);

    if (userChoice === '1') {
        const result = document.createElement("li");
        result.textContent = currentScenario.options[0].result;
        document.getElementById("game-results").appendChild(result);
    } else if (userChoice === '2') {
        const result = document.createElement("li");
        result.textContent = currentScenario.options[1].result;
        document.getElementById("game-results").appendChild(result);
    } else {
        alert("Invalid choice. Please select 1 or 2.");
    }
}

// Start the game when the button is clicked
document.getElementById("start-game").addEventListener("click", function () {
    for (let i = 0; i < scenarios.length; i++) {
        playScenario(i);
    }
});
