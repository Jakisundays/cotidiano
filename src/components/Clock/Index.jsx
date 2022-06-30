import React, {useState, useEffect} from 'react'
import { ClockContainer, ClockScreen, ClockTime, ClockDate } from './ClockComponents'

const Clock = () => {

    //state
    const [time, setTime] = useState('')
    const [date, setDate] = useState('')
    

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
        //Arrays
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        

        //Date Variables
        const day = new Date();
        const hour = day.getHours();
        const minute = day.getMinutes();
        const second = day.getSeconds();
        const weekDay = days[day.getDay()];
        const today = day.getDate();
        const month = months[day.getMonth()];
        const year = day.getFullYear();
        
        //update status
        setTime(formatTime(hour) + hour + ':' + formatTime(minute) + minute + ':' + formatTime(second) + second)
        setDate(weekDay + ', ' + today + ' ' + month + ' ' + year);
    }

    

    

    

  return (
    <ClockContainer>
        <ClockScreen>
            <ClockTime>
                {time}
            </ClockTime>
            <ClockDate>
                {date}          
            </ClockDate>
        </ClockScreen>
    </ClockContainer>
  )
}

export default Clock
