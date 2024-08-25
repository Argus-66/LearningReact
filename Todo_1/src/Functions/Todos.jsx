import { useState } from "react";


const useTodos = () => {
    const [todos, setTodos] = useState([]);
  
    const addTodo = (todo) => {
      setTodos((prev) => [{ id: Date.now(), todo, completed: false }, ...prev]);
    };
  
    const toggleTodo = (id) => {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    };
  
    const deleteTodo = (id) => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };
  
    const updateTodo = (id, updatedTodo) => {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, todo: updatedTodo } : todo
        )
      );
    };
  
    return { todos, addTodo, toggleTodo, deleteTodo, updateTodo };
  };
  
  export default useTodos;
  