import { element } from './view/html-util.js';

export class App {
  mount() {
    const formElement = document.querySelector('#js-form');
    const inputElement = document.getElementById('js-form-input');
    const containerElement = document.getElementById('js-todo-list');
    const todoItemCountElement = document.getElementById('js-todo-count');

    let todoItemCount = 0;

    formElement.addEventListener('submit', (e) => {
      e.preventDefault();
      const todoItemElement = element`<li>${inputElement.value}</li>`;

      containerElement.appendChild(todoItemElement);

      todoItemCount += 1;

      todoItemCountElement.textContent = `Todoアイテム数：${todoItemCount}`;

      inputElement.value = '';
    });
  }
}
