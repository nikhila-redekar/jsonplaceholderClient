"use strict";

window.onload = function() {
    // Get references to HTML elements
    let todoIdInput = document.getElementById("todoIdInput");
    let fetchTodoBtn = document.getElementById("fetchTodoBtn");
    let todoDetails = document.getElementById("todoDetails");

    // Add event listener to the fetch todo button
    fetchTodoBtn.addEventListener("click", function() {
        // Get the ID entered by the user
        let todoId = todoIdInput.value.trim();

        // Check if the entered ID is valid
        if (!todoId || isNaN(todoId)) {
            alert("Please enter a valid TODO ID.");
            return;
        }

        // Send HTTP GET request to fetch the TODO data
        fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
            .then(response => {
                // Check if response is successful
                if (!response.ok) {
                    throw new Error(`Failed to fetch TODO with ID ${todoId}`);
                }
                return response.json();
            })
            .then(todo => {
                // Display the TODO details
                todoDetails.innerHTML = `
                    <p>User ID: ${todo.userId}</p>
                    <p>ID: ${todo.id}</p>
                    <p>Title: ${todo.title}</p>
                    <p>Completed: ${todo.completed ? 'Yes' : 'No'}</p>
                `;
            })
            .catch(error => {
                // Display error message if fetching TODO fails
                todoDetails.textContent = `Error: ${error.message}`;
            });
    });
};
