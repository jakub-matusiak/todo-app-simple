const btnAdd = document.querySelector('.todo__button--add');
const btnRemove = document.querySelector('.todo__button--remove');
const btnClear = document.querySelector('.todo__button--clear');
const todoList = document.querySelector('.todo__list');
let i = 1;

btnAdd.addEventListener('click', () => {
    const todo = document.createElement('li');

    todo.textContent = `Task number ${i}`;
    todo.classList.add('todo__item');
    todo.classList.add(`todo__item--${i}`);
    todoList.appendChild(todo);
    i++;
});

btnRemove.addEventListener('click', () => {
    const todo = todoList.querySelector(`.todo__item--${i-1}`);
    
    if (i > 1) {
        todoList.removeChild(todo);
        i--;
    }
});

btnClear.addEventListener('click', () => {
    const todos = todoList.querySelectorAll('.todo__item');

    todos.forEach((todo) => {
        todoList.removeChild(todo);
        i = 1;
    });
});