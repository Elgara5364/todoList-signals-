"use client";

import Navbar from "@/components/navbar";
import TodoList from "@/components/todolist";

export default function Home() {
  console.log("app");
  return (
    <div>
      <Navbar />
      <TodoList />
    </div>
  );
}
