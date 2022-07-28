import React, {useState} from 'react'
import { CalculatorContainer, Display, SpanA, Operators, Add, Subtract, Multiply, Divide, Deletear, Digits, CreateButton, Cero, Dot, Result, Reseter  } from './CalculatorComponents';

const Calculator = () => {

    const [calc, setCalc] = useState('');
    const [result, setResult] = useState('');

    const ops = ['/', '*', '+', '-', '.'];

    const updateCalc = value => {
        if(ops.includes(value) && calc === '' || ops.includes(value) && ops.includes(calc.slice(-1))){
            return
        }
        setCalc(calc + value);

        if(!ops.includes(value)){
            setResult(eval(calc + value).toString());
        }
    }

    // creates buttons from 1 to 9
    const createDigits = () => {

        const digits = [];

        for(let i = 1; i < 10; i++){
            digits.push(<CreateButton onClick={() => updateCalc(i.toString())} key={i}>{i}</CreateButton>)
        }
        return digits
    }

    //Eval evaluates Js code as a string
    const calculate = () => {
        setCalc(eval(calc).toString());
    }
    //deletes last number
    const deleteLast = () => {
        if(calc == ''){
            return 
        }
        const value = calc.slice(0, -1);

        setCalc(value);
    }

    const reset = () =>{
        setCalc('');
        setResult('');
    }

  return (
    
        <CalculatorContainer>
            <Display>
                { result ? <SpanA>({result})</SpanA> : '' }
                { calc || '0' }
            </Display>

            <Operators>
                <Add onClick={() => updateCalc('+')}>+</Add>
                <Subtract onClick={() => updateCalc('-')}>-</Subtract>
                <Multiply onClick={() => updateCalc('*')}>*</Multiply>
                <Divide onClick={() => updateCalc('/')}>/</Divide>

                <Deletear onClick={deleteLast}>DEL</Deletear>
            </Operators>

            <Digits>
                { createDigits() }
                <Cero onClick={() => updateCalc('0')}>0</Cero>
                <Dot onClick={() => updateCalc('.')}>.</Dot>
                <Result onClick={calculate}>=</Result>
            </Digits>
                <Reseter onClick={reset}>Reset</Reseter>
        </CalculatorContainer>

   
  )
}

export default Calculator
