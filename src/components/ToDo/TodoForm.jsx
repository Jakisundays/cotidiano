import React, { useState, useRef } from 'react';
import { TodoButtonEdit, TodoFormContainer, TodoInputEdit, TodoInput, TodoButton} from '/Users/jacobdominguez/Documents/codiyapa/cotidiano/src/components/ToDo/TodoComponents.js';

const TodoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const inputRef = useRef(null);
    // useEffect(() => {
    //     inputRef.current.focus();
    //   });
    
    const handleChange = e => {
        setInput(e.target.value);
      };

    const handleSubmit = e => {
        e.preventDefault();
    
    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
    });
        setInput('')};

  return (
    <TodoFormContainer onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <TodoInputEdit placeholder='Update your item' value={input} onChange={handleChange} name='text' ref={inputRef} />
          <TodoButtonEdit onClick={handleSubmit} >
            Update
          </TodoButtonEdit>
        </>
      ) : (
        <>
          <TodoInput placeholder='Add a todo' value={input} onChange={handleChange} name='text' ref={inputRef} />
          <TodoButton onClick={handleSubmit}>
            Add todo
          </TodoButton>
        </>
      )}
    </TodoFormContainer>
  )
}

export default TodoForm
