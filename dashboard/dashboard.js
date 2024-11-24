if (sessionStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = '../Authentication/login/login.html';
}

// Function to initialize the sidebar based on the user's role
function initializeSidebar() {
    // Get logged-in user's details
    const username = sessionStorage.getItem('username');
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    let user = null; // Initialize user as null
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            user = users[i]; // Correctly assign the user object
            break; // Exit the loop after finding the user
        }
    }

    if (user) {
        // Check the user's role
        if (user.role === 'Staff') {    
            // Hide 'Users' button for Staff
            document.getElementById('users-button').style.display = 'none';
            
            // Hide Monthly Users Chart for staff
            document.getElementById('usersChart').style.display = 'none';

            // Hide Users and Staff count cards
            document.getElementById('usersCard').style.display = 'none';
            document.getElementById('staffCard').style.display = 'none';

            // Hide edit button for announcements
            let announce = document.getElementById('announcements');
            let buttons = announce.querySelectorAll('button'); // Select all <button> elements

            // Iterate over each button and hide it
            buttons.forEach(button => {
            button.style.display = 'none'; // Hide the button
});


        } else if (user.role === 'Admin') {
            // Show both 'Home' and 'Users' buttons for Admin
            document.getElementById('home-button').style.display = 'block';
            document.getElementById('users-button').style.display = 'block';
        }
    }
}

// Call this function on page load
document.addEventListener('DOMContentLoaded', initializeSidebar);

// Function to navigate to the Home page
function home() {
    window.location.href = '../dashboard/dashboard.html';  // Redirect to the home dashboard page
}

// Function to navigate to the Users page
function users() {
    window.location.href = '../module/users/users.html';  // Redirect to the users management page
}

// Chart.js - Performance Chart
const performanceChart = document.getElementById('performanceChart').getContext('2d');
const performanceData = new Chart(performanceChart, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'],
        datasets: [{
            label: 'Average User Count',
            data: [55, 89, 48, 38, 10, 88, 52, 76, 91, 29, 49],
            backgroundColor: [
                '#FF5733', 
                '#33FF57', 
                '#3357FF', 
                '#FF33A8', 
                '#A833FF', 
                '#33FFF3', 
                '#FFA833', 
                '#FF5733', 
                '#33FF57', 
                '#A833FF', 
                '#FF33A8'

            ],
            borderColor: [
                '#FF5733', 
                '#33FF57', 
                '#3357FF', 
                '#FF33A8', 
                '#A833FF', 
                '#33FFF3', 
                '#FFA833', 
                '#FF5733', 
                '#33FF57', 
                '#A833FF', 
                '#FF33A8'

            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Chart.js - News Chart
const newsChart = document.getElementById('newsChart').getContext('2d');
const newsData = new Chart(newsChart, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'],
        datasets: [{
            label: 'Average News Count',
            data: [85, 92, 78, 88, 90, 58, 72, 56, 79, 89, 99],
            backgroundColor: [
                '#FF5733', 
                '#33FF57', 
                '#3357FF', 
                '#FF33A8', 
                '#A833FF', 
                '#33FFF3', 
                '#FFA833', 
                '#FF5733', 
                '#33FF57', 
                '#A833FF', 
                '#FF33A8'
            ],
            borderColor: [
                '#FF5733', 
                '#33FF57', 
                '#3357FF', 
                '#FF33A8', 
                '#A833FF', 
                '#33FFF3', 
                '#FFA833', 
                '#FF5733', 
                '#33FF57', 
                '#A833FF', 
                '#FF33A8'

            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Function to show the logout dialog
function showLogoutDialog() {
    document.getElementById('logout-dialog').style.display = 'flex';
}

// Function to confirm logout action
function confirmLogout(isConfirmed) {
    document.getElementById('logout-dialog').style.display = 'none';

    if (isConfirmed) {
        sessionStorage.setItem('isLoggedIn', 'false');
        sessionStorage.removeItem('username'); // Remove the username from sessionStorage
        window.location.href = '../Authentication/login/login.html';
    }
}

function updateCards(totalStaff,totalUsers){
    // Retrieve the users array from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || []; // Default to an empty array if null

    let user = null;
    let staffCount = 0;
    let newsCount = 0;

    newsCount += upcomingEvents.querySelectorAll('li').length;
    newsCount += announcements.querySelectorAll('li').length;

    for(let i=0; i<users.length;i++){
        user = users[i];
        if(user.role == 'Staff'){
            staffCount += 1;
        }
    }
    totalUsers.textContent = users.length;
    totalStaff.textContent = staffCount;
    totalNews.textContent = newsCount;
}

let totalStaff = document.getElementById('totalStaff');
let totalUsers = document.getElementById('totalUsers');

updateCards(totalStaff,totalUsers);


