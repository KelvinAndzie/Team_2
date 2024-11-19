document.getElementById('login').addEventListener('click', function(e) {  
    e.preventDefault();  // Prevent form submission to keep control over the process.

    const username = document.getElementById('username').value.trim();  // Get username from the input.
    const password = document.getElementById('password').value.trim();  // Get password from the input.
    
    // Retrieve users from localStorage (this will contain all registered users added by the admin)
    const users = JSON.parse(localStorage.getItem('users')) || [];


    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Find the user that matches the entered username and password
    const user = users.find(u => u.name === username && u.password === password);

    // If the user is found, log them in
    if (user) {
        sessionStorage.setItem('isLoggedIn', 'true');  // Set sessionStorage to indicate that the user is logged in
        sessionStorage.setItem('username', username);  // Store the username in sessionStorage
        window.location.href = '../../dashboard/dashboard.html';  // Redirect to the dashboard page
    } else {
        alert("Invalid Username or Password!");  // Show error message if credentials are incorrect
    }
});
