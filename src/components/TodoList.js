import React, { useState } from 'react';
import TodoForm from './TodoForm';

function TodoList() {

    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
          return;
        }
    
        const newTodos = [todo, ...todos];
    
        setTodos(newTodos);
        console.log(...todos);
      };
    return (
        <>
         <TodoForm onSubmit={addTodo} />
      
        </>
    )
}

export default TodoList;

