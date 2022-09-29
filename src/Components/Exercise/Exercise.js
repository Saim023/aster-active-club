import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import ExerciseDetails from '../Exercise-details/ExerciseDetails';
import saim from '../../images/Saim.jpeg'
import './Exercise.css';
import Time from '../Time/Time';

const Exercise = () => {
    const [items, setItems] = useState([]);
    const [time, setTime] = useState([]);
    const [breakTime, setBreakTime] = useState([]);


    useEffect(() => {
        fetch('Exercise.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    const handleAddBtn = (item) => {
        const newTime = [...time, item];
        setTime(newTime);

    }

    const handleBreakTimeBtn = (e) => {
        const getValue = e.target.innerText;
        setBreakTime(getValue)
        console.log(breakTime)
        // console.log(getValue);

    }

    return (
        <div className='exercise-wrapper '>
            <div className="exercise-container">
                <h2>Select Your Exercise</h2>
                <div className='items-wrapper'>
                    {
                        items.map(item => <ExerciseDetails key={item.id}
                            item={item}
                            handleAddBtn={handleAddBtn}
                        ></ExerciseDetails>)
                    }
                </div>
            </div>
            <div className="exercise-details">
                <div className='details-container'>
                    <div className='profile'>
                        <img src={saim} alt="" />
                        <h4>Md. Saim Hossain</h4>

                    </div>
                    <div className='profile-details'>
                        <div>
                            <h4>55<span>kg</span></h4>
                            <p>Weight</p>
                        </div>
                        <div>
                            <h4>5.7<span>inc</span></h4>
                            <p>Height</p>
                        </div>
                        <div>
                            <h4>27<span>years</span></h4>
                            <p>Age</p>
                        </div>
                    </div>
                    <div>
                        <h2>Add A Break</h2>
                        <div className='break-btn-container'>
                            <button onClick={handleBreakTimeBtn}>10s</button>
                            <button onClick={handleBreakTimeBtn}>20s</button>
                            <button onClick={handleBreakTimeBtn}>30s</button>
                            <button onClick={handleBreakTimeBtn}>40s</button>
                            <button onClick={handleBreakTimeBtn}>50s</button>
                        </div>
                    </div>
                    <Time time={time}
                        breakTime={breakTime}
                    ></Time>
                </div>

            </div>
        </div>
    );
};

export default Exercise;