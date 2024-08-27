import { useState } from "react";
import useLocalStorageTodos from "../Storage/LocalStorage";


const useTodos = () => {
    const [todos, setTodos] = useState([]);

    // Use the localStorage hook
    useLocalStorageTodos(todos, setTodos);

  
    const addTodo = (todo) => {
      setTodos((prev) => [{ id: Date.now(), ...todo}, ...prev]);

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
  
    const updateTodo = (id, todo) => {
      setTodos((prev) =>
        (prev.map((prevTodo) =>
          (todo.id === id ? todo : prevTodo)))
      );
    };
  
    return { todos, addTodo, toggleTodo, deleteTodo, updateTodo };
  };
  
  export default useTodos;
  


  