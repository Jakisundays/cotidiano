import styled from 'styled-components'


const OperatorButton = styled.button`
    apparance: none;
    border: none;
    color: #fff;
    font-size: 25px;
    padding: 16px;
    cursor: pointer;
    transition: 0.4s;
    flex: 1 1 0%;
    background-color: var(--primary);
    font-weigth: 700;

    &:hover{
        opacity: 0.9;
    }
`
const DigitsButton = styled.button`
    apparance: none;
    border: none;
    color: #fff;
    font-size: 25px;
    padding: 16px;
    cursor: pointer;
    transition: 0.4s;
    flex: 1 1 33.333%;
    max-width: 33.333%;
    background-color: var(--dark);

    &:hover{
        opacity: 0.9;
    }
`


export const CalculatorContainer = styled.div`
    align-self: center;
    width: 520px;
    height: 520px;
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 1px 2px 64px rgba(0, 0, 0, 0.9);
    margin: 128px auto;
    `

// display
export const Display = styled.div`
    padding: 16px;
    text-align: right;
    background-color: var(--dark);
    color: var(--light);
    font-size: 30px;
    font-weight: 300;
`;

export const SpanA = styled.span`
    font-size: 14px;
    color: white;
    margin-right: 16px;
`

// operators
export const Operators = styled.div`
    display: flex;
`
export const Add = styled(OperatorButton)`
`

export const Subtract = styled(OperatorButton)``
export const Multiply = styled(OperatorButton)``
export const Divide = styled(OperatorButton)``
export const Deletear = styled(OperatorButton)``

// digits
export const Digits = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 71.1%;
`
export const CreateButton = styled(DigitsButton)``
export const Cero = styled(DigitsButton)``
export const Dot = styled(DigitsButton)``
export const Result = styled(DigitsButton)``


export const Reseter = styled.button`
    apparance: none;
    border: none;
    color: #fff;
    font-size: 20px;
    width: 100%;
    cursor: pointer;
    transition: 0.4s;
    background-color: var(--primary);
    &:hover{
        opacity: 0.9;
    }
`