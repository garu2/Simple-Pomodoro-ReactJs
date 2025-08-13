import { useState, useEffect } from 'react'
import TimerDisplay from './components/TimerDisplay'
import './App.css'

function App() {

  const workTime = 25 * 60;
  const breakTime = 5 * 60;

  const [time, setTime] = useState(workTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [pomodoros, setPomodoros] = useState(0);

  useEffect(() => {
    if (!isRunning) return;
    
    const timer = setInterval(() => {
      setTime(time => time - 1);
    }, 1000);
    
    return () => clearInterval(timer);
  },[isRunning]);

  useEffect(() => {
    if (time > 0) return;

    if (isBreak) {
      setIsBreak(false);
      setTime(workTime);
      setPomodoros(prev => prev + 1);
    } else {
      setIsBreak(true);
      setTime(breakTime);
    }
  },[time]);
  
  return (
    <>
      <h1>Pomodoro</h1>
      <span>Pomodoros: {pomodoros}</span>
      <TimerDisplay time={time} />
      <button onClick={() => 
        setIsRunning(!isRunning)}>{isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={() => {
        setIsRunning(false)
        setIsBreak(false)
        setTime(workTime)
        setPomodoros(0)
      }}>
        Reset
      </button>
    </>
  )
} 
    
export default App
  