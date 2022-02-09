import { removeTodoFromSStorage, checkItemsList } from "./sessionStorage";

export const getTodoItem = (text, check) => {
  checkItemsList();
  // Create Todo Item
  const todoItem = document.createElement("li");
  todoItem.classList.add("todo-item");

  if (check) {
    todoItem.classList.add("todo-item_completed");
  }

  // Create and add Todo Text
  const todoText = document.createElement("span");
  todoText.innerText = text;
  todoText.classList.add("todo-text");
  todoItem.appendChild(todoText);

  // Create and add Remove button
  const removeButton = document.createElement("button");
  removeButton.innerHTML = '<i class="fas fa-times"></i>';
  removeButton.classList.add("todo-remove-button");
  removeButton.addEventListener("click", removeTodoItem(todoItem));
  todoItem.appendChild(removeButton);

  return todoItem;
};

function removeTodoItem(todoItem) {
  return (e) => {
    e.preventDefault();
    let answer = confirm("Are you sure?");
    if (answer) {
    todoItem.classList.add("todo-item_fall");
    todoItem.addEventListener("transitionend", function () {
      removeTodoFromSStorage(todoItem);
      todoItem.remove();
      checkItemsList();
    });
    } else {
      return;
    }
  };
}
