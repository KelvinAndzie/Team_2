if(sessionStorage.getItem('isLoggedIn') !== 'true'){
    window.location.href = '../../Authentication/login/login.html';
  }

// Array to hold user objects
let users = JSON.parse(localStorage.getItem('users')) || [];
let editingIndex = null;

// Function to display the list of users
function displayUsers() {
    const userList = document.getElementById('user-list');
    userList.innerHTML = ''; // Clear existing list

    if (users.length === 0) {
        userList.innerHTML = '<p>No registered users. Add a new user.</p>';
    } else {
        users.forEach((user, index) => {
            userList.innerHTML += `
                <div class="user-item">
                    <h3>${user.name}</h3>
                    <p>Contact: ${user.contact}</p>
                    <p>Email: ${user.email}</p>
                    <p>Role: ${user.role}</p>
                    <button onclick="editUser(${index})">Edit</button>
                    <button onclick="deleteUser(${index})">Delete</button>
                </div>
            `;
        });
    }
}

// Function to save or update a user
function saveUser() {
    const name = document.getElementById('user-name').value.trim();
    const contact = document.getElementById('user-contact').value.trim();
    const email = document.getElementById('user-email').value.trim();
    const role = document.getElementById('user-role').value.trim();

    if (name && contact && email && role) {
        if (editingIndex === null) {
            // Add new user
            users.push({ name, contact, email, role });
            alert('User added successfully!');
        } else {
            // Update existing user
            users[editingIndex] = { name, contact, email, role };
            alert('User updated successfully!');
            editingIndex = null;
        }
        localStorage.setItem('users', JSON.stringify(users)); // Save to local storage
        displayUsers(); // Refresh the user list
        resetForm(); // Reset the form
    } else {
        alert('Please fill in all fields.');
    }
}

// Function to edit a user
function editUser(index) {
    const user = users[index];
    document.getElementById('user-name').value = user.name;
    document.getElementById('user-contact').value = user.contact;
    document.getElementById('user-email').value = user.email;
    document.getElementById('user-role').value = user.role;
    editingIndex = index;
}

// Function to delete a user
function deleteUser(index) {
    users.splice(index, 1); // Remove user at the specified index
    localStorage.setItem('users', JSON.stringify(users)); // Update local storage
    displayUsers(); // Refresh the user list
}

// Function to reset the form
function resetForm() {
    document.getElementById('user-form').reset();
    editingIndex = null;
}

// Initialize user list when the page loads
document.addEventListener('DOMContentLoaded', displayUsers);

function showLogoutDialog() {
    document.getElementById('logout-dialog').style.display = 'flex';
};

function confirmLogout(isConfirmed){
    document.getElementById('logout-dialog').style.display = 'none';

    if (isConfirmed){
        sessionStorage.setItem('isLoggedIn','false');
        window.location.href = '../../Authentication/login/login.html';
    }
}

function home(){
    window.location.href = '../../dashboard/dashboard.html';
  }