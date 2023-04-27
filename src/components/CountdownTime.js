import React, { useEffect, useState } from 'react'
import '../styles/countdowntime.css'


function CountdownTime() {
    const [days, setDays] = useState()
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()


    let interval;
    const countdown = () => {
        const destination = new Date('Apr 01,2024').getTime()
        interval = setInterval(() => {
            const now = new Date().getTime()
            const difference = destination - now
            const days = Math.floor(difference / (1000 * 60 * 60 * 24))
            const hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
            const minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60))
            const seconds = Math.floor(difference % (1000 * 60) / 1000)

            if (destination < 0) {
                clearInterval(interval.current)

            } else {
                setDays(days)
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
            }
        })
    }

    useEffect(() => {
        countdown()
    }, []);
    return (
        <div className='currentTime'>
            <div className='countdown'>
                <h1>Time-Remaining</h1>
                <div className='cdt1'>
                    <div>{days} :<br/>
                  <div className='cdt2'>
                    Days
                  </div>
                    </div>
                    <div>{hours} :<br/>
                  <div className='cdt2'>
                   Hours
                  </div></div>
                    <div>{minutes} :<br/>
                  <div className='cdt2'>
                    Minutes
                  </div></div>
                    <div>{seconds} <br/>
                  <div className='cdt2'>
                  Seconds
                  </div> </div>
                </div>
               

            </div>

        </div>

    )
}

export default CountdownTime;