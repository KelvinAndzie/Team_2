document.getElementById('login').addEventListener('click', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if(username === storedUsername && password === storedPassword) {
        sessionStorage.setItem('isLoggedIn','true');
        window.location.href = '../../dashboard/dashboard.html';
    }
    else{
        alert("Invalid Username or Password!");
        return;
    }

    
});

document.getElementById('signup').addEventListener('click', function() {
    window.location.href = '../signup/signup.html';
});