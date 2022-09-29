import React, { useState } from 'react';
import './Time.css';

const Time = ({ time }) => {


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
                <p>{ }</p>
            </div>
            <div className='activity-btn'>
                <a href="#">Activity Completed</a>
            </div>
        </div>
    );
};

export default Time;