import styled from 'styled-components'

const GymLabel = styled.label`
    color: white;
    margin: 5px;
    font-weight: 2px;
`

const OperatorButton = styled.button`
    apparance: none;
    border: 1px outset white;
    color: #fff;
    font-size: 20px;
    padding: 16px;
    cursor: pointer;
    transition: 0.4s;
    flex: 1 1 0%;
    background-color: var(--primary);
    font-weigth: 700;
    border-radius: 8px;
    margin-bottom: 10px;

    &:hover{
        opacity: 0.9;
        border: 1px inset white;
    }
`


const Input = styled.input`
    apparance: none;
    border: 1px outset var(--light);
    color: var(--dark);
    cursor: pointer;
    transition: 0.4s;
    flex: 1 1 33.333%;
    max-width: 30%;
    background-color: var(--primary);
    border-radius: 8px;
    text-align: center;
    &:hover{
        opacity: 0.9;
    }
`


export const GymSection = styled.div`
    width: 520px;
    height: 520px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--dark);
    border-radius: 8px;
    box-shadow: 1px 2px 64px rgba(0, 0, 0, 0.9);
    margin: 128px auto;
`
//h1
export const GymH1 = styled.h1`
    text-align: center;
    margin: 5px;
    color: white;
`

//form
export const GymForm = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 7px;
`
export const FormDisplay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const GymReps= styled(GymLabel)``
export const RepsInput = styled(Input)``
export const GymTime = styled(GymLabel)``
export const GymTimeInput = styled(Input)``
export const GymBreak = styled(GymLabel)``
export const BreakInput = styled(Input)``
export const GymSubmit = styled(OperatorButton)`
    border-radius: 8px;
    margin-top: 20px;
    grid-area: 2 / 2 / 3 / 3;
`
//Gym Results
export const GymResults = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
export const GymSubmited = styled.h2`
    color: white;
    margin-top: 15px;
    margin-left: 15px;
`

//Clck
export const GymClock = styled.div`
    text-align: center;
    margin: 18px;
    color: var(--primary);
    font-weight: 100px;
    font-size: 30px;
`

//Options Buttons
export const GymButtons = styled.div`
    display: flex;
    justify-content: space-between;
`
export const GymButton = styled(OperatorButton)`
    margin: 10px;
`
