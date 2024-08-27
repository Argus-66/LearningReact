import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todo:[],
  addTodo: (todo) => {},
  toggleTodo: (id) => {},
  deleteTodo: (id) => {},
  updateTodo: (id, todo) => {},
})


export const useTodo = () =>{
  return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider