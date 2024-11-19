if(sessionStorage.getItem('isLoggedIn') !== 'true'){
    window.location.href = '../Authentication/login/login.html'
}

// Function to initialize the sidebar based on the user's role
function initializeSidebar() {
    // Get logged-in user's details
    const username = sessionStorage.getItem('username');
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.name === username);

    if (user) {
        // Check the user's role
        if (user.role === 'Staff') {
            // Hide the 'Users' button for staff
            document.getElementById('users-button').style.display = 'none';
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
    window.location.href = '../../dashboard/dashboard.html';  // Redirect to the home dashboard page
}

// Function to navigate to the Users page
function users() {
    window.location.href = '../../dashboard/users.html';  // Redirect to the users management page
}

const performanceChart = document.getElementById('performanceChart').getContext('2d');
const performanceData = new Chart(performanceChart, {
    type: 'bar',
    data: {
        labels: ['Math', 'Science', 'History', 'English', 'Art'],
        datasets: [{
            label: 'Average Grades',
            data: [85, 92, 78, 88, 90],
            backgroundColor: [
                '#1abc9c',
                '#3498db',
                '#9b59b6',
                '#e74c3c',
                '#f39c12'
            ],
            borderColor: [
                '#16a085',
                '#2980b9',
                '#8e44ad',
                '#c0392b',
                '#e67e22'
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


const attendanceChart = document.getElementById('attendanceChart').getContext('2d');
const attendanceData = new Chart(attendanceChart, {
    type: 'pie',
    data: {
        labels: ['Present', 'Absent', 'Late'],
        datasets: [{
            label: 'Attendance Rate',
            data: [85, 10, 5],
            backgroundColor: [
                '#2ecc71',
                '#e74c3c',
                '#f39c12'
            ],
            borderColor: [
                '#27ae60',
                '#c0392b',
                '#e67e22'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});

function showLogoutDialog() {
    document.getElementById('logout-dialog').style.display = 'flex';
};


function confirmLogout(isConfirmed){
    document.getElementById('logout-dialog').style.display = 'none';

    if (isConfirmed){
        sessionStorage.setItem('isLoggedIn','false');
        sessionStorage.removeItem('username'); // Remove the username from sessionStorage
        window.location.href = '../Authentication/login/login.html';
    }
}

function users(){
    window.location.href = '../module/users/users.html';
  } 

  function home(){
    window.location.href = '../dashboard/dashboard.html';
  } 