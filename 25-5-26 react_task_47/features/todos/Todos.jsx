import { useState } from "react";

import {
  addTodo,
  toggleTodo,
} from "./todosSlice";

import {
  useDispatch,
  useSelector,
} from "react-redux";

function Todos() {
  const [text, setText] = useState("");

  const todos = useSelector(
    (state) => state.todos.todos
  );

  const dispatch = useDispatch();

  function handleAddTodo() {
    if (text.trim() !== "") {
      dispatch(addTodo(text));
      setText("");
    }
  }

  return (
    <div>
      <h2>Todo App</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />

      <button onClick={handleAddTodo}>
        Add Todo
      </button>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() =>
              dispatch(toggleTodo(todo.id))
            }
            style={{
              cursor: "pointer",
              textDecoration: todo.completed
                ? "line-through"
                : "none",
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;