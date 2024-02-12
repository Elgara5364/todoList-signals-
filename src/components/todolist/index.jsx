"use client";

import { useSignal } from "@preact/signals-react";

const TodoList = () => {
  const name = useSignal("Steve");

  console.log(name.value);

  const onInput = (event) => {
    newItem.value = event.currentTarget.value;
    // console.log(event.currentTarget.value);
  };

  const todos = useSignal([
    { text: "Pergi Ke pasar" },
    { text: "Memasak" },
    { text: "Memancing" },
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
    console.log(todo);
    todos.value = todos.value.filter((t) => t != todo);
    // todos.value.splice(index, 1);
    // todos.value = [...todos.value];
    console.log(todos.value);
  };

  return (
    <div>
      <h1>{name.value}'s ToDo List</h1>
      <input
        value={newItem.value}
        onInput={onInput}
        className="text-black text-base"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.value.map((todo, index) => (
          <li key={index}>
            {todo.text} {""}
            <button onClick={() => removeTodo(todo)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
