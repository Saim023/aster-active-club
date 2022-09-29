import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import ExerciseDetails from '../Exercise-details/ExerciseDetails';
import saim from '../../images/Saim.jpeg'
import './Exercise.css';

const Exercise = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('Exercise.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    const handleAddBtn = () => {
        console.log('clicked')
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
                            <button>10s</button>
                            <button>20s</button>
                            <button>30s</button>
                            <button>40s</button>
                            <button>50s</button>
                        </div>
                    </div>
                    <h2>Exercise Details</h2>
                    <div className='exercise-time'>
                        <h4>Exercise Time: </h4>
                        <p>0<span>s</span></p>
                    </div>
                    <div className='break-time'>
                        <h4>Break Time: </h4>
                        <p>0<span>s</span></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Exercise;