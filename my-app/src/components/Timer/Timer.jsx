import { useRef, useState } from "react"

const Timer = () => {

    const [timer, setTimer] = useState(0)
    const intervalId = useRef(null)

    const handleStop = () => {
        clearInterval(intervalId.current)
        intervalId.current=null;
    }

    const handleStart = () => {
        if (intervalId.current !== null) return;

        intervalId.current = setInterval(()=>{
            setTimer((prevTime)=> prevTime+10)
        }, 10)
    }

    const handleReset = () => {
        handleStop();
        setTimer(0);
    }

    const minutes = Math.floor(timer/60000);
    const seconds = Math.floor((timer % 60000)/1000);

    const milliseconds = Math.floor((timer % 1000)/10);


    return (
        <div style={{textAlign: "center"}}>
            <h1>{`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(milliseconds).padStart(2, "0")}`}</h1>
            <div style={{display: "flex", gap: "4px", justifyContent: "center"}}>
                <button onClick={handleStop}>
                    Stop
                </button>
                <button onClick={handleStart}>
                    Start    
                </button>
                <button onClick={handleReset}>
                    Reset
                </button>
            </div>
        </div>
    )

}

export default Timer;