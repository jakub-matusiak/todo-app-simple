const btnAdd = document.querySelector('.todo__button--add');
const btnRemove = document.querySelector('.todo__button--remove');
const btnClear = document.querySelector('.todo__button--clear');
const todoList = document.querySelector('.todo__list');
const todoContainer = document.querySelector('.todo__container');
const warning = document.querySelector('.todo__warning');
let i = 1;
let counter = localStorage.getItem('counter');

counter = Number(counter);
i = counter+1

if (counter) {
    todoContainer.removeChild(warning);
}

for (let i = 1; i <= counter; i++) {
    const todo = document.createElement('li');

    todo.textContent = `Task number ${i}`;
    todo.classList.add('todo__item');
    todo.classList.add(`todo__item--${i}`);
    todoList.appendChild(todo);
}

btnAdd.addEventListener('click', () => {
    const todo = document.createElement('li');

    todo.textContent = `Task number ${i}`;
    todo.classList.add('todo__item');
    todo.classList.add(`todo__item--${i}`);
    todoList.appendChild(todo);
    localStorage.setItem('counter', i);

    if (i == 1) {
        todoContainer.removeChild(warning);
    }

    i++;
});

btnRemove.addEventListener('click', () => {
    const todo = todoList.querySelector(`.todo__item--${i-1}`);

    if (i > 1) {
        todoList.removeChild(todo);
        i--;
        localStorage.setItem('counter', i-1);
    }

    if (i == 1) {
        todoContainer.appendChild(warning);
    }
});

btnClear.addEventListener('click', () => {
    const todos = todoList.querySelectorAll('.todo__item');

    todos.forEach((todo) => {
        todoList.removeChild(todo);
        i = 1;
    });

    if (i == 1) {
        todoContainer.appendChild(warning);
    }

    localStorage.clear();
});