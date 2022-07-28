import styled from "styled-components"

export const ClockContainer = styled.div`
    z-index: 1;
    grid-area: 1 / 1 / 2 / 3;
`

export const ClockScreen = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    border: 1px inset black;
    border-radius: 5px;
    background-color: var(--dark);
`

export const ClockTime = styled.h1`
    font-size: 4em;
    font-weight: 500;
    color: var(--primary);
    padding: 10px;
    background-color: var(--dark);
` 
export const ClockDate = styled.h1`
    font-size: 2em;
    font-weight: 500;
    color: var(--primary);
    
    padding: 10px;
    background-color: var(--dark);
` 
