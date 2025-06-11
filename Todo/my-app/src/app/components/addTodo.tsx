"use client"

import { FormEvent, useState } from "react";
import { useTodos } from "../context/todoContext";

export default function AddTodo() {
    const[todo, setTodo] = useState("");
    const { handleAddTodo }  = useTodos();

    const handleFormSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddTodo(todo);
        setTodo("");
    }


  return (
    <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="write your todo" value={todo} onChange={e => setTodo(e.target.value)} />
        <button type="submit">Add</button>
    </form>
  )
}
