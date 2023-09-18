import { useState, useEffect } from "react";
import "./Timer.css";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const PomodoroTimer = () => {

    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [displayMessage, setDisplayMessage] = useState(false);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                clearInterval(interval);
    
                if (seconds === 0) {
                    if(minutes !== 0) {
                        setSeconds(59);
                        setMinutes(minutes - 1);
                    } else {
                        let minutes = displayMessage ? 24 : 4;
                        let seconds = 59;
                        setSeconds(seconds);
                        setMinutes(minutes);
                        setDisplayMessage(!displayMessage); 
                    }
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000)
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
        
    }, [isRunning, seconds]);

    const ToggleTimer = () => {
        setIsRunning(!isRunning);
    }

    const ResetTimer = () => {
        setIsRunning(false);
        setMinutes(25);
        setSeconds(0);
        setDisplayMessage(false);
    }

    
    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    const percentage = displayMessage ? (timerMinutes * 25) : (timerMinutes * 4);

    return (
        <div className="timer">
            <h2>Pomodoro Timer</h2>
            <div style={{marginBottom: "20px"}}>{displayMessage && <div className="message">Next session starting in:</div>}</div>
            <div style={{width:150, height:150, margin: "0 auto"}}>
                <CircularProgressbar 
                value={percentage} 
                text={`${timerMinutes}:${timerSeconds}`}
                styles={buildStyles({
                    textSize:"16px"})}/>
            </div>
            
            <br />
            <button onClick={ToggleTimer}>Start Timer</button>
            <button onClick={ResetTimer}>Reset</button>
        </div> 

     );
}
 
export default PomodoroTimer;