"use client";
import { computed } from "@preact/signals-react";
import { todos } from "../todolist";
const Navbar = () => {
  console.log("navbar");
  const completed = computed(() => {
    // When `todos` changes, this re-runs automatically:
    return todos.value.filter((todo) => todo.completed).length;
  });

  return (
    <div>
      <div>Completed : {completed.value}</div>
    </div>
  );
};

export default Navbar;
