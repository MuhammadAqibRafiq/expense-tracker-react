import React, { useState } from 'react'

export const Header = () => {

    let Time = new Date().toLocaleTimeString();
    const [ctime,setctime]=useState(Time);

    const updateTime = () =>{
        Time = new Date().toLocaleTimeString();
        setctime(Time);
    };
    setInterval(updateTime,1000);

    return (
        <>
        <div className='time'>
                <h5>{Time}</h5>
            </div>
        <div className='header'>
            <h2 id="heading">EXPENSE TRACKER</h2>
        </div>
        </>
    )
}
