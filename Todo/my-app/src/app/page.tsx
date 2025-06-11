import Image from "next/image";
import styles from "./page.module.css";
import AddTodo from "./components/addTodo";
import TodoList from "./components/todoList";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <h1>TODO Next App</h1>
      <Navbar />
      <AddTodo />
      <TodoList />
    </div>
  );
}
