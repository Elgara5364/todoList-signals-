"use client";

import { computed } from "@preact/signals-react";
import { useSignals, useSignal } from "@preact/signals-react/runtime";

const TodoList = () => {
  console.log("todolist");
  useSignals();
  const name = useSignal("Steve");

  // console.log(name.value);

  const onInput = (event) => {
    newItem.value = event.target.value;
    // console.log(event.currentTarget.value);
  };

  const todos = useSignal([
    { text: "Pergi Ke pasar", completed: true },
    { text: "Memasak", completed: false },
    { text: "Memancing", completed: false },
  ]);
  const newItem = useSignal("");

  const addTodo = () => {
    todos.value = [...todos.value, { text: newItem.value }];
    newItem.value = ""; // clear input value on add
  };

  console.log(todos.value);
  // text.value = "Memancing";
  // addTodo();
  // console.log(todos.value);
  // console.log(text.value);

  const removeTodo = (todo) => {
    // console.log(todo);
    todos.value = todos.value.filter((t) => t != todo);
    // todos.value.splice(index, 1);
    // todos.value = [...todos.value];
    // console.log(todos.value);
  };

  const completed = computed(() => {
    // When `todos` changes, this re-runs automatically:
    return todos.value.filter((todo) => todo.completed).length;
  });

  return (
    <div>
      <h1>{name.value}'s ToDo List</h1>
      <h1>{completed.value}</h1>
      <input
        value={newItem.value}
        onInput={onInput}
        className="text-black text-base"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.value.map((todo, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => {
                  todo.completed = !todo.completed;
                  todos.value = [...todos.value];
                }}
              />
              {todo.completed ? <s>{todo.text}</s> : todo.text}
            </label>
            <button onClick={() => removeTodo(todo)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
