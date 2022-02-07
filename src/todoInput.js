export function getTodoInputItems() {
  const todoInput = document.querySelector(".todo-input");
  const todoHelper = document.querySelector(".todo-helper");
  const todoButton = document.querySelector(".todo-button");

  return {
    todoInput,
    todoHelper,
    todoButton,
  };
}

export function validateTodoInput(todoInputWrapper) {
  const { todoInput, todoHelper, todoButton } =
    getTodoInputItems(todoInputWrapper);
  todoButton.classList.add("todo-button_disabled");
  todoInput.addEventListener("focus", () => {
    todoHelper.classList.add("todo-helper_visible");
  });
  todoInput.addEventListener("blur", () => {
    todoHelper.classList.remove("todo-helper_visible");
  });
  todoInput.addEventListener("keypress", (e) => {
    if (e.keyCode === 13 && todoInput.value.length < 3) {
      e.preventDefault();
    }
  });
  todoInput.addEventListener("input", () => {
    if (todoInput.value.length >= 3) {
      todoButton.classList.remove("todo-button_disabled");
      todoHelper.classList.remove("todo-helper_visible");
    } else {
      todoButton.classList.add("todo-button_disabled");
      todoHelper.classList.add("todo-helper_visible");
    }
  });
}

export function clearTodoInput(todoInputWrapper) {
  const { todoInput, todoHelper, todoButton } =
    getTodoInputItems(todoInputWrapper);

  todoButton.classList.add("todo-button_disabled");
  todoHelper.classList.add("todo-helper_visible");
  todoInput.value = "";
}
