import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import '../styles/header.css'

function Header() {
    return (
        <div className='header'>
           <NavLink to='/countdown' className='link'> <div>Countdown-time</div></NavLink>
           <Link to='/home' className='link'> <div>Home</div></Link>
            <div class="dropdown">
                <p class="dropbtn">Current Time</p>
                <div class="dropdown-content">
                    <Link className='link' to='/'><p>Digital Time</p></Link>
                   <Link className='link' to='/analog'> <p>Analog Time</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Header