"use strict";

window.onload = function() {
    // Get reference to the user table body
    let userTableBody = document.querySelector("#userTable tbody");

    // Send HTTP GET request to fetch user data
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            // Check if response is successful
            if (!response.ok) {
                throw new Error("Failed to fetch user data.");
            }
            return response.json();
        })
        .then(users => {
            // Loop through each user and add data to the table
            users.forEach(user => {
                let row = userTableBody.insertRow();
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                    <td>${user.website}</td>
                    <td>${user.address.city}</td>
                `;
            });
        })
        .catch(error => {
            // Display error message if fetching user data fails
            console.error("Error:", error);
        });
};
