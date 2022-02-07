const TODOS = "todos";

export function removeTodoFromSStorage(todoItem) {
  let todos = getTodosFromSStorage();

  const todoText = Array.from(todoItem.childNodes).find((node) =>
    node.classList.contains("todo-text")
  );

  if (todoText) {
    const filtredTodos = todos.filter((item) => item !== todoText.innerText);
    sessionStorage.setItem(TODOS, JSON.stringify(filtredTodos));
  }
}

export function saveTodoToSStorage(todo) {
  let todos = getTodosFromSStorage();

  todos.push(todo);

  sessionStorage.setItem(TODOS, JSON.stringify(todos));
}

export function getTodosFromSStorage() {
  const storageTodos = sessionStorage.getItem(TODOS);

  return storageTodos ? JSON.parse(storageTodos) : [];
}

export function checkSelect() {
  const todoSelect = document.querySelector(".todo-select-wrapper");
  const todoSelectText = document.querySelector(".todo-select")
  console.log("chekSelect", getTodosFromSStorage().length)
  if (getTodosFromSStorage().length > 0) {
    todoSelect.classList.remove("todo-select-wrapper_disabled");
    todoSelect.classList.remove("todo-select-wrapper_disabled::after");
    todoSelectText.classList.remove("todo-select_disabled");
  } else {
    todoSelect.classList.add("todo-select-wrapper_disabled");
    todoSelect.classList.add("todo-select-wrapper_disabled::after");
    todoSelectText.classList.add("todo-select_disabled");
  }
}