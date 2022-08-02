import React from 'react'
import styled from 'styled-components'
import Calculator from '../components/Calculator/Index'
import Clock from '../components/Clock/Index'
import Gym from '../components/Gym/Index'
import TodoList from '../components/ToDo/TodoList'
import Crypto from '../components/Crypto/Index'

const Home = () => {

  const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
  background: linear-gradient(180deg, rgba(81,10,50,1) 36%, rgba(238,69,64,1) 86%);

  @media (max-width: 1100px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
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
  )
}

export default Home
