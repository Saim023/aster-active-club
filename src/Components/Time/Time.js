import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Time.css';

const Time = ({ time, breakTime }) => {

    const notify = () => toast("Congratulations!! You Have Done Your Activity.")


    let exerciseTime = 0;

    for (const item of time) {
        exerciseTime = exerciseTime + item.time;
    }

    return (
        <div>
            <h2>Exercise Details</h2>

            <div className='exercise-time'>
                <h4>Exercise Time: </h4>
                <p>{exerciseTime}<span>s</span></p>
            </div>
            <div className='break-time'>
                <h4>Break Time: </h4>
                <p>{breakTime}</p>
            </div>
            <div className='activity-btn'>
                <button onClick={notify}>Activity Completed</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Time;