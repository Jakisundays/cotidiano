import styled from "styled-components";
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

//consts
const TodoInputArt = styled.input`
  padding: 14px 32px 14px 16px;
  border-radius: 4px 0 0 4px;
  border: 2px solid var(--primary);
  outline: none;
  width: 320px;
  background: transparent;
  color: #fff;

  &:placeholder {
    color: #e2e2e2;
  }
`

const TodoButtonArt = styled.button`
  padding: 16px;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  outline: none;
  background-color: var(--primary);
  color: #fff;
  text-transform: capitalize;
`

// Todo List
export const TodoAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 520px;
  height: 600px;
  background: var(--dark);
  text-align: center;
  margin: 128px auto;
  border-radius: 10px;
  padding-bottom: 32px;
  z-index: 1;
  box-shadow: 1px 2px 64px rgba(0, 0, 0, 0.9);
  overflow: scroll;
`

export const TodoH1 = styled.h1`
    margin: 32px 0; 
    color: #fff;
    font-size: 24px;
`

//Todo 
export const TodoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px auto;
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(255, 118, 20, 1) 0%,
    rgba(255, 84, 17, 1) 100%
  );
  padding: 16px;
  border-radius: 5px;
  width: 90%;

  &:nth-child(4n + 1) {
    background: linear-gradient(
      90deg,
      rgba(93, 12, 255, 1) 0%,
      rgba(155, 0, 250, 1) 100%
    );
  }

  &:nth-child(4n + 2) {
    background: linear-gradient(
      90deg,
      rgba(255, 12, 241, 1) 0%,
      rgba(250, 0, 135, 1) 100%
    );
  }

  &todo-row:nth-child(4n + 3) {
    background: linear-gradient(
      90deg,
      rgba(20, 159, 255, 1) 0%,
      rgba(17, 122, 255, 1) 100%
    );
  }
`
export const TodoCompleter = styled.div``
export const ToDoIcons = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
`
export const TodoDeleteIcon = styled(RiCloseCircleLine)`
  margin-right: 5px;
  color: #fff;
`
export const TodoEditIcon = styled(TiEdit)`
  color: #fff;  
`

// Todo Form
export const TodoFormContainer = styled.form`
  margin-bottom: 32px;
`
export const TodoInput = styled(TodoInputArt)``
export const TodoInputEdit = styled(TodoInputArt)`
  border: 2px solid var(--primary);
`
export const TodoButton = styled(TodoButtonArt)``
export const TodoButtonEdit = styled(TodoButtonArt)`
  background: linear-gradient(
    90deg,
    rgba(20, 159, 255, 1) 0%,
    rgba(17, 122, 255, 1) 100%
  );
  padding: 16px 22px;
`
