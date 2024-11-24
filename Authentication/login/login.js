document.getElementById('login').addEventListener('click', function(e) {
    e.preventDefault();  // Prevent form submission to keep control over the process.

    const username = document.getElementById('username').value.trim();  // Get username from the input.
    const password = document.getElementById('password').value.trim();  // Get password from the input.

    // Retrieve users from localStorage (this will contain all registered users added by the admin)
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check for default admin credentials if no matching user is found
    if (username === 'admin' && password === 'admin') {
        // Log in as admin
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('username', 'admin');  // Store 'admin' as the username
        sessionStorage.setItem('role', 'Admin');  // Set the role as 'Admin'
        window.location.href = '../../dashboard/dashboard.html';  // Redirect to the dashboard page
        return;
    }

    // Find the user that matches the entered username and password
    let user = null;
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            user = users[i];
            break; // Exit the loop once a match is found
        }
    }


    // If the user is found, log them in
    if (user) {
        sessionStorage.setItem('isLoggedIn', 'true');  // Set sessionStorage to indicate that the user is logged in
        sessionStorage.setItem('username', username);  // Store the username in sessionStorage
        sessionStorage.setItem('role', user.role);  // Store the user's role (Admin or Staff)
        window.location.href = '../../dashboard/dashboard.html';  // Redirect to the dashboard page
    } else {
        alert("Invalid Username or Password!");  // Show error message if credentials are incorrect
    }
});
