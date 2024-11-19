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

    if((username === storedUsername && password === storedPassword)|| (user)) {
        sessionStorage.setItem('isLoggedIn','true');
        window.location.href = '../../dashboard/dashboard.html';
    }
    else{
        alert("Invalid Username or Password!!!");
        return;
    }

    
});

document.getElementById('signup').addEventListener('click', function() {
    window.location.href = '../signup/signup.html';
});