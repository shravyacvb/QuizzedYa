import { useState, useEffect } from "react";

function Countdown(props){

    const [ minutes, setMinutes ] = useState(props.minutes);
    const [seconds, setSeconds ] =  useState(0);

    useEffect(()=>{
        if(!props.paused){
        let myInterval = setInterval(() => 
            {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(myInterval)
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                } 
            }, 1000)
            return ()=> {
                clearInterval(myInterval);
            };
        }});

    return (
        <div className="timer">
            { minutes === 0 && seconds === 0
                ? props.setPage('Home')
                : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
            }
            <button className="pause-btn" onClick={() => props.paused ? props.setPaused(false) : props.setPaused(true)}>{!props.paused ? "pause" : "resume"}</button>
        </div>
    );
}

export default Countdown;