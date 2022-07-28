import React, {useEffect, useState} from 'react';
import { GymSection, GymClock, GymButtons, GymButton, GymForm, GymReps, RepsInput, GymTime, GymTimeInput, GymBreak, BreakInput, GymSubmit, FormDisplay, GymSizer, GymHr} from './GymComponents';

const Gym = () => {
  //Estados
  const [time, setTime] = useState(0);
  const [timeOn, setTimeOn] = useState(false);
  const [gymTime, setGymTime] = useState(null);
  const [reps, setReps] = useState(null);
  const [relaxOn, setRelaxOn] = useState(false);
  const [relax, setRelax] = useState(null);
  const [statico, setStatico] = useState(null);

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
    setGymTime(document.getElementById('gymTime').value);
    setReps(document.getElementById('gymReps').value);
    setRelax(document.getElementById('gymBreak').value);
    setStatico(document.getElementById('gymBreak').value);
  };
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
    setStatico(null);
    document.getElementById('gymReps').value = (null);
    document.getElementById('gymTime').value = (null);
    document.getElementById('gymBreak').value = (null);
  };

  const preview = () =>{
    if(timeOn && relaxOn){
      return 'Presiona start o agrega detalles'
    }else if
    (timeOn && !relaxOn){
      return 'Timer: '
    }else if(!timeOn & relaxOn){
      return 'Break Time: '
    }
  }
  
  return (
    <GymSizer>
      <GymSection>
        {/* form */}
        <GymForm onSubmit={fnHandleSubmit}>
          <FormDisplay>
            {/* GymReps input */}
            <GymReps for='gymReps'>Reps: </GymReps>
            <RepsInput type='number' id='gymReps' />
          </FormDisplay>
          <FormDisplay>
            {/* GymTime Input */}
            <GymTime for='gymTime'>Time: </GymTime>
            <GymTimeInput type='number' id='gymTime' />
          </FormDisplay>
            <FormDisplay>
            {/* GymBreak Input */}
            <GymBreak for='gymReps'>BreakTime: </GymBreak>
            <BreakInput type='number' id='gymBreak'  />
            </FormDisplay>
          {/* SubmitButton */}
          <GymSubmit type="submit" onClick={update} >Submit</GymSubmit>
        </GymForm>

        <GymHr/>

        <GymClock>Reps left: {reps}</GymClock>
        <GymClock>{relaxOn ? 'Break Time: ' + relax : 'Timer: ' + time}</GymClock>

        {/* buttones */}
        <GymButtons>
          <GymButton onClick={start}>start</GymButton>
          <GymButton onClick={() => setTimeOn(false)}>stop</GymButton>
          <GymButton onClick={() => setTimeOn(true)}>Resume</GymButton>
          <GymButton onClick={reset}>Reset</GymButton>
        </GymButtons>

      </GymSection>
    </GymSizer>    
  )
}

export default Gym


