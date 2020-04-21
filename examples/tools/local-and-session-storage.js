// Set local storage item
//localStorage.setItem('name', 'Jhon');
//localStorage.setItem('age', '30');

// Set session storage
//sessionStorage.setItem('name', 'Beth');

// Remove from storage
//localStorage.removeItem('name');

// Get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// // Clear local Storage
// localStorage.clear();

// console.log(name, age);

document.querySelector('form').addEventListener('submit', 

function(e) {
    const task = document.getElementById('task').value;

    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task)

    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('TASK SAVED'); 

    document.getElementById('task').value = '';

    e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task) {
    console.log(task);
});