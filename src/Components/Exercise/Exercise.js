import React, { useEffect, useState } from 'react';
import ExerciseDetails from '../Exercise-details/ExerciseDetails';
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
                <h2>Exercise Details</h2>
            </div>
        </div>
    );
};

export default Exercise;