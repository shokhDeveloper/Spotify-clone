import React, { useEffect, useRef, useState, useContext } from "react"
import { Context } from "./Context"

export const Timer:React.FC = ():JSX.Element => {
    const [timer,  setTimer] = useState<number>(1)
    const timerRef = useRef<number|null>(null)
    const {stopTimer, setStopTimer} = useContext(Context)
    const stop = ():void => {
        if(timerRef.current) {
            clearInterval(timerRef.current)
            timerRef.current = null
            setStopTimer(true)
        }
    }
    const handleInterval = ():void => {
        timerRef.current = window.setInterval(() => {
            setTimer((timer) => timer+1)
        }, 1000)
        setStopTimer(false)
    }
    useEffect(() => {
        handleInterval()
        return () => {
            stop()
        }
    },[])
    return(
        <div>
            <h1>{timer}</h1>
            <button disabled={stopTimer ? true: false} onClick={() => stop()}>Stop</button>
            <button disabled={!stopTimer ? true: false} onClick={() => handleInterval() }>Go</button>
        </div>
    )
}