document.getElementById('register').addEventListener('click', function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmpassword").value;
    if(username === "" || password == ""){
        alert('Username and Password cannot be empty!')
    }
    else{
        if (password !== confirmPassword) {
            alert("Passwords Do not match!")
            return;
        }
        else{
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        alert('Registration Successful!');
        document.getElementsById('registration-form').reset();
        }
    }
});

document.getElementById('login').addEventListener('click', function() {
    window.location.href = '../login/login.html';
});