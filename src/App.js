import Calculator from "/Users/jacobdominguez/Documents/codiyapa/cotidiano/src/components/Calculator/Index.jsx";
import './App.css';
import Gym from './components/Gym/Index';
import Clock from "./components/Clock/Index";
import TodoList from "./components/ToDo/TodoList";
import Crypto from "./components/Crypto/Index";
import styled from "styled-components";

function App() {

  const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto;
  `

  return (
    <>
    <Grid>
      <Clock />

      <Calculator />
      <Crypto />
      <Gym />
      <TodoList />
    </Grid>
    </>
  );
}

export default App;
