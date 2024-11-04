if(sessionStorage.getItem('isLoggedIn') !== 'true'){
    window.location.href = '../register/login/login.html'
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
        window.location.href = '../register/login/login.html';
    }
}