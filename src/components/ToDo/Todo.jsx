import React, { useState } from 'react';
import TodoForm from '/Users/jacobdominguez/Documents/codiyapa/cotidiano/src/components/ToDo/TodoForm.jsx'
import { TodoRow, ToDoIcons, TodoCompleter, TodoDeleteIcon, TodoEditIcon} from '/Users/jacobdominguez/Documents/codiyapa/cotidiano/src/components/ToDo/TodoComponents.js';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({id: null, value: ''});
    
    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({id: null, value: ''})
    };
    
    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }
    return todos.map((todo, index) => (
      <TodoRow key={index}>
      <TodoCompleter key={todo.id} onClick={() => completeTodo(todo.id)}> {todo.text} </TodoCompleter>
      <ToDoIcons>
        <TodoDeleteIcon onClick={() => removeTodo(todo.id)} />
        <TodoEditIcon onClick={() => setEdit({ id: todo.id, value: todo.text })} />
      </ToDoIcons>
    </TodoRow>
   
      ));
}

export default Todo;
