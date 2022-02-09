import "../styles/index.css";
import "../index.html";

import { getTodoItem } from "./addTodoItem";
import {
  saveTodoToSStorage,
  getTodosFromSStorage,
  checkItemsList,
} from "./sessionStorage";
import { searchItems } from "./filterTodoItems";
import {
  clearTodoInput,
  getTodoInputItems,
  validateTodoInput,
} from "./todoInput";

const todoInputWrapper = document.querySelector(".todo-input-wrapper");
const { todoInput, todoButton } = getTodoInputItems();
const todoList = document.querySelector(".todo-list");
const searchInput = document.querySelector(".search-input");

document.addEventListener("DOMContentLoaded", onDOMLoaded);
todoInput.addEventListener("input", validateTodoInput);
todoButton.addEventListener("click", addTodo);
searchInput.addEventListener("input", showDesiredItem);

function onDOMLoaded() {
  renderTodosFromSStorage();
  validateTodoInput(todoInputWrapper);
  checkItemsList();
}

function renderTodosFromSStorage() {
  let todos = getTodosFromSStorage();

  todos.forEach((todoValue) => {
    const todoItem = getTodoItem(todoValue);

    // Add todo item to list
    todoList.appendChild(todoItem);
  });
}

function addTodo(event) {
  event.preventDefault();

  saveTodoToSStorage(todoInput.value);

  const todoItem = getTodoItem(todoInput.value);
  todoList.appendChild(todoItem);

  clearTodoInput(todoInputWrapper);
}

function showDesiredItem(e) {
  const todoItems = todoList.childNodes;

  todoItems.forEach((listItem) => {
    if (searchItems(listItem.innerText, searchInput.value)) {
      listItem.style.display = "flex";
    } else {
      listItem.style.display = "none";
    }
  });
}