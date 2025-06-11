"use client"

export type Todo = {
    id: string;
    task: string;
    completedAt: boolean
}

export type TodosContext = {
    todos: Todo[];
    handleAddTodo: (task:string) => void;
    toggleTodo: (id: string) => void;
    handleDel: (id: string) => void;
}

import { createContext, ReactNode, useContext, useState } from "react";

export const todoContext = createContext<TodosContext | null>(null);
export const TodosProvider = ({children}: {children:ReactNode}) => {
    
    const[todos, setTodos] = useState<Todo[]>([]);

    const handleAddTodo = (task: string) => {
        setTodos((prev) => {
            const newTodo: Todo[] = [
            {
                id: Math.random().toString(),
                task,
                completedAt: false,
            },
            ...prev
        ]
            return newTodo;
        })
    }

    const toggleTodo = (id: string) => {
        setTodos((prev) => {
            const newTodos = prev.map((task) => {
                if(task.id === id){
                    return {...task, completedAt: !task.completedAt}
                }
                return task;
            })
            return newTodos;
        })
    }

    const handleDel = (id: string) => {
        return setTodos((prev) => ( prev.filter(task => ( task.id !== id) )
        ))
    }


    return(
        <todoContext.Provider value={{ todos, handleAddTodo, toggleTodo, handleDel}}>
            {children}
        </todoContext.Provider>
    ) 
} 

export const useTodos = () => {
    const todosContextValue = useContext(todoContext);
    if(!todosContextValue){
        throw new Error("error")
    }
    return todosContextValue;
}