import React, { useState } from 'react'
import '../styles/currentTime.css'

function CurrentTime() {
    let time = new Date().toLocaleTimeString()
    const [currentTime, setCurrentTime] = useState(time)

    const currentdata = () => {
        let time = new Date().toLocaleTimeString()
        setCurrentTime(time)
    }

    setInterval(currentdata, 1000)
    return (
        <div className='currentTime'>
            <div className='currentTime1'>
                <h1>Current-Time</h1>
                <div align='center'>{currentTime}</div>
            </div>

        </div>
    )
}

export default CurrentTime