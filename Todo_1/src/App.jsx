import React from 'react';
import { TodoProvider } from './Contexts'
import './App.css'
import useTodos from './Functions/Todos'
import { TodoForm }from './Components/index';
import { TodoItems } from './Components/index';

function App() {
    const { todos, addTodo, updateTodo, deleteTodo, toggleTodo } = useTodos();

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleTodo}}>
      <div className='bg-[#172842] min-h-screen py-8'>
        <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'> 
            <h1 className='text-2xl font-bold text-center mb-8 mt-2'>Manage Your Todos</h1>
            <div className='mb-4'>
                {/* Todo from goes here */}
                <TodoForm />
            </div>
            <div className='flex flex-wrap gap-y-3'>
                {/* Loop and Add Todo Item here */}
                {/* <TodoItem /> */}
            </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
