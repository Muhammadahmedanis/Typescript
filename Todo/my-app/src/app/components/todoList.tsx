"use client"

import { useSearchParams } from "next/navigation";
import { useTodos } from "../context/todoContext"

export default function TodoList() {
    const {todos, toggleTodo, handleDel} = useTodos();
    
    const searchP = useSearchParams();
    const todoFilter = searchP.get("todos");

    let filterTodo = todos;
    if(todoFilter === "active"){
        filterTodo = filterTodo.filter(todo => !todo.completedAt)
    }else if(todoFilter === "completed"){
        filterTodo = filterTodo.filter(todo => todo.completedAt)
    }
    
  return (
    <ul>
        {
            filterTodo?.map(todo =>{
                return <li key={todo.id}>
                        <input type="checkbox" id={`todo-${todo.id}`} checked={todo.completedAt} onChange={() => toggleTodo(todo.id)} />
                        <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
                        {todo.completedAt && ( <button onClick={() => handleDel(todo.id)}>Delete</button> )}
                       </li> 
            })
        }
    </ul>
  )
}
