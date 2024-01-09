document.addEventListener('DOMContentLoaded', function () {
    loadTasks();
});

function addTask() {
    var taskInput = document.getElementById('task-input');
    var taskText = taskInput.value.trim();

    if (taskText !== '') {
        var taskList = document.getElementById('task-list');

        var li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <span class="delete-btn" onclick="deleteTask(this)"><i class="fa-solid fa-trash-can"></i></span> `;
         

        taskList.appendChild(li);

        saveTask(taskText);
        taskInput.value = '';   
    }
    else
    {
          let a  = document.getElementById('p');
          a.innerHTML = "Plz Enter Task";
    }
}

function deleteTask(deleteButton) {
    var taskText = deleteButton.parentElement.firstChild.textContent;
    deleteButton.parentElement.remove();
    removeTask(taskText);
}

function saveTask(taskText) {
  
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(taskText) {
  
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {

    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    var taskList = document.getElementById('task-list');

    tasks.forEach(taskText => {
        var li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <span class="delete-btn" onclick="deleteTask(this)"><i class="fa-solid fa-trash-can"></i></span>
        `;

        taskList.appendChild(li);
    });
}
