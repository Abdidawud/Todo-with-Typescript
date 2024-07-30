"use strict";
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
addTaskButton.onclick = () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        addTask(taskText);
        taskInput.value = '';
    }
};
function addTask(taskText) {
    const listItem = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    listItem.appendChild(taskSpan);
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = () => {
        const newTaskText = prompt('Edit your task:', taskSpan.textContent || '');
        if (newTaskText) {
            taskSpan.textContent = newTaskText;
        }
    };
    listItem.appendChild(editButton);
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = () => {
        listItem.remove();
    };
    listItem.appendChild(removeButton);
    taskList.append(listItem);
}
