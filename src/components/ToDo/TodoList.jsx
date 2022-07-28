import React, { useState } from 'react';
import TodoForm from '/Users/jacobdominguez/Documents/codiyapa/cotidiano/src/components/ToDo/TodoForm.jsx';
import Todo from '/Users/jacobdominguez/Documents/codiyapa/cotidiano/src/components/ToDo/Todo.jsx';
import { TodoH1, TodoAppContainer } from './TodoComponents';

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

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };


  return (
    <TodoAppContainer>
        <TodoH1>ToDo-App</TodoH1>
        <TodoForm onSubmit={addTodo} />
        <Todo
          todos={todos}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
    </TodoAppContainer>
  );
}

export default TodoList;