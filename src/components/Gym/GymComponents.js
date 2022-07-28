import styled from 'styled-components'

const GymLabel = styled.label`
    color: white;
    margin: 5px;
    font-weight: 2px;
`

const OperatorButton = styled.button`
    apparance: none;
    border: 1px onset white;
    color: #fff;
    font-size: 20px;
    padding: 16px;
    cursor: pointer;
    transition: 0.4s;
    flex: 1 1 0%;
    background-color: var(--primary);
    font-weigth: 700;
    border-radius: 8px;

    &:hover{
        opacity: 0.9;
        border: 2px inset white;
    }
`


const Input = styled.input`
    apparance: none;
    border: 1px inset var(--primary);
    color: var(--dark);
    font-size: 20px;
    padding: 16px;
    cursor: pointer;
    transition: 0.4s;
    flex: 1 1 33.333%;
    max-width: 23.333%;
    background-color: var(--primary);
    border-radius: 8px;

    &:hover{
        opacity: 0.9;
    }
`
export const GymSizer = styled.section`
    display: flex;
    min-height: 60vh;
    align-items: center;
    justify-content: center;
    padding: 16px;
    z-index: 1;
`

export const GymSection = styled.div`
    width: 100%;
    max-width: 500px; 
    background-color: var(--dark);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 1px 2px 64px rgba(0, 0, 0, 0.9);
`


//form
export const GymForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const FormDisplay = styled.div`
    margin: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px){
        justify-content: space-between;
        align-items: center;
    }
`
export const GymReps= styled(GymLabel)``
export const RepsInput = styled(Input)``
export const GymTime = styled(GymLabel)``
export const GymTimeInput = styled(Input)``
export const GymBreak = styled(GymLabel)``
export const BreakInput = styled(Input)``
export const GymSubmit = styled(OperatorButton)`
    width: 50%;
    border-radius: 8px;
    align-self: center;
    margin: 10px;
`


//Clck
export const GymClock = styled.div`
    text-align: center;
    margin: 18px;
    color: var(--primary);
    font-weight: 100px;
    font-size: 30px;
`
export const GymButtons = styled.div`
    display: flex;
`
export const GymButton = styled(OperatorButton)`
    margin: 10px;
`

//hr
export const GymHr = styled.hr`
    border: inset var(--primary);
    margin: auto;
    width: 350px;
    margin-top: 10px;
`