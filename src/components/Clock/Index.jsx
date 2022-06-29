import React, {useState, useEffect} from 'react'
import { ClockContainer, ClockScreen, ClockTime } from './ClockComponents'

const Clock = () => {

    //state
    const [time, setTime] = useState('')

    //Adds a 0 if the value is a one digit number
    const formatTime = (value) => {
       if(value < 10){
        return '0'
       }else{
        return ''
       }
    }

    //Sets interval for clock ticks
    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000)
        //Calls tick(), every 1000 milliseconds.


        //CleanUp 
        return function cleanUp() {
            clearInterval(timerID)
        }
    })

    //Clock Tick Function
    const tick = () => {
        //Date Variables
        const day = new Date();
        const hour = day.getHours();
        const minute = day.getMinutes();
        const second = day.getSeconds();
        
        //Set the state to the formated time
        setTime(formatTime(hour) + hour + ':' + formatTime(minute) + minute + ':' + formatTime(second) + second)
    }

  return (
    <ClockContainer>
        <ClockScreen>
            <ClockTime>
                {time}
            </ClockTime>
        </ClockScreen>
    </ClockContainer>
  )
}

export default Clock
