import React, {useEffect, useState, useRef} from 'react';
import { GymSection, GymClock, GymButtons, GymButton, GymForm, GymReps, RepsInput, GymTime, GymTimeInput, GymBreak, BreakInput, GymSubmit, FormDisplay, GymResults, GymSubmited, GymHr, GymH1} from './GymComponents';

const Gym = () => {
  //Estados
  const [time, setTime] = useState(0);
  const [timeOn, setTimeOn] = useState(false);
  const [relax, setRelax] = useState(null);
  const [relaxOn, setRelaxOn] = useState(false);
  const [formOn, setFormOn] = useState(true);
  const [reps, setReps] = useState(null);
  const [statico, setStatico] = useState(null);
  const [gymTime, setGymTime] = useState(null);

//Refs
const gymRef = useRef();
const repsRef = useRef();
const relaxRef = useRef();

  //useEffects:

  //Cronometro
  useEffect(() =>{
    let interval = null;
    if(timeOn){
      interval = setInterval(() => {
        setTime(prev => prev + 1)
      }, 1000);
    } else{
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  },[timeOn]);
  
  //cronometro del break (Descansador)
  useEffect(() =>{
    let interval = null;
    if(relaxOn){
      interval = setInterval(() => {
        setRelax(prev => prev - 1)
      }, 1000);
    } else{
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  },[relaxOn]);

  //Cuando time llega a ser GymTime
  useEffect(() => {
    if(time == gymTime){
      //se resta uno a reps
      setReps(prev => prev - 1)
      //se desactiva el reloj
      setTimeOn(false)
      //se resetea el tiempo
      setTime(0)
      //se activa el descanzador
      setRelaxOn(true)
    }
  },[time, gymTime])

  useEffect(() => {
    if(relax === 0){
      setRelaxOn(false)
      setTimeOn(true)
      setRelax(statico);
    }
  },[relax])

  useEffect(() => {
    if(reps == 0){
      reset()
    }
  },[reps])

  //Funciones

  //comenzar el contador y cambiar los valores de los inputs
  const start = () =>{
    setTimeOn(true);
    document.getElementById('gymReps').value = (null);
    document.getElementById('gymTime').value = (null);
    document.getElementById('gymBreak').value = (null);
  }
  //updates el estado con los valores del input
  const update = () =>{
    setStatico(relax);
    setFormOn(!formOn)
  }
  // m
  //Evita que la pagina se recargue y q se resete el estado.
  const fnHandleSubmit = event => {
    event.preventDefault();
}
  //resetear el app
  const reset = () => {
    setTime(0);
    setTimeOn(false);
    setGymTime(null);
    setRelax(null);
    setReps(null);
    setRelaxOn(false);
    setFormOn(true);
    gymRef.current.value = null;
    repsRef.current.value = null;
    relaxRef.current.value = null;
  };

  const preview = () =>{
    if(!timeOn && !relaxOn){
      return <GymClock>Presiona start o agrega detalles </GymClock>
    }else if
    (timeOn && !relaxOn){
      return <GymClock>Timer: {time}</GymClock>
    }else if(!timeOn & relaxOn){
      return <GymClock>Break: {relax}</GymClock>
    }
  }
  
  return (
      <GymSection>
        <GymH1>Gym Reps Counter </GymH1>
        <GymHr />

        {formOn && <GymForm onSubmit={fnHandleSubmit}>

<FormDisplay>
  <GymReps>Reps: </GymReps>
  <RepsInput 
  type='number' 
  min='0'
  ref={repsRef}
  value={reps}
  onChange={(e) => setReps(e.target.value)}/>
</FormDisplay>

<FormDisplay>
  <GymTime>Time: </GymTime>
  <GymTimeInput 
  type='number' 
  min='0'
  ref={gymRef}
  value={gymTime}
  onChange={(e) => setGymTime(e.target.value)} />
</FormDisplay>

  <FormDisplay>
  <GymBreak>BreakTime: </GymBreak>
  <BreakInput type='number'
   min='0'
   ref={relaxRef}
  value={relax}
  onChange={(e) => setRelax(e.target.value)} />
  </FormDisplay>
{/* SubmitButton */}
<GymSubmit type="submit" onClick={update} >Submit</GymSubmit>
</GymForm>}


        {!formOn &&  
        <GymResults>
          <GymSubmited>Reps: {reps}</GymSubmited>
          <GymSubmited>Duration: {gymTime}</GymSubmited>
          <GymSubmited>Break Time: {statico}</GymSubmited>
        </GymResults>  }
        
         <GymClock>{preview()}</GymClock>
         {/* <GymClock>{relaxOn ? 'Break Time: ' + relax : 'Timer: ' + time}</GymClock> */}

         <GymButtons>
           <GymButton onClick={() => setTimeOn(true)}>Start</GymButton>
           <GymButton onClick={() => setTimeOn(true)}>Resume</GymButton>
           <GymButton onClick={() => setTimeOn(false)}>Stop</GymButton>
           <GymButton onClick={reset}>Reset</GymButton>
         </GymButtons> 
        


       

      </GymSection> 
  )
}

export default Gym


