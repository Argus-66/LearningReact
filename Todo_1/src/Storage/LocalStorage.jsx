import { useEffect } from "react";

const useLocalStorageTodos = (todos, setTodos) => {
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todos"));

        if (storedTodos && storedTodos.length > 0) {
            setTodos(storedTodos);
        }
    }, [setTodos]);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
};

export default useLocalStorageTodos;