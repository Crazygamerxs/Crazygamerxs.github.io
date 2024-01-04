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

// Get references to the buttons and hidden lists
const skillsButton = document.querySelector('[data-target="skills"]');
const educationButton = document.querySelector('[data-target="education"]');
const skillsList = document.getElementById('skills-list');
const educationList = document.getElementById('education-list');

// Initialize: Show the skills list by default
skillsList.classList.add('show-list');
educationList.classList.remove('show-list');

// Add click event listeners to the buttons
skillsButton.addEventListener('click', toggleSkillsList);
educationButton.addEventListener('click', toggleEducationList);

// Function to toggle the visibility of the skills list
function toggleSkillsList() {
    skillsList.classList.add('show-list');
    educationList.classList.remove('show-list');
}

// Function to toggle the visibility of the education list
function toggleEducationList() {
    educationList.classList.add('show-list');
    skillsList.classList.remove('show-list');
}

// to filter the projects
document.addEventListener('DOMContentLoaded', function () {
    // Get all project buttons and projects
    const projectButtons = document.querySelectorAll('.toggle-button');
    const projects = document.querySelectorAll('.project');

    // Add click event listener to each button
    projectButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const category = button.textContent.toLowerCase(); // Get the category from the button text

            // Show or hide projects based on the selected category
            projects.forEach(function (project) {
                const projectCategory = project.getAttribute('data-category').toLowerCase();
                if (category === 'all' || category === projectCategory) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });

            // Toggle the 'active' class for styling
            projectButtons.forEach(function (btn) {
                btn.classList.remove('active');
            });
            button.classList.add('active');
        });
    });
});

