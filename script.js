const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const clearBtn = document.getElementById('clear-btn');
const todoList = document.getElementById('todo-list');

let todoCount = 1;

addBtn.addEventListener('click', addItem);
clearBtn.addEventListener('click', clearAllItems);

function addItem() {
    const todoItem = document.createElement('li');
    todoItem.textContent = `${todoCount}. ${todoInput.value}`;
    todoItem.addEventListener('click', deleteItem);
    todoList.appendChild(todoItem);
    todoInput.value = '';
    todoCount++;
}

function deleteItem() {
    this.remove();
}

function clearAllItems() {
    todoList.innerHTML = '';
    todoCount = 1;
}
