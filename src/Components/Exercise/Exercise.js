import React, { useEffect, useState } from 'react';
import './Exercise.css';

const Exercise = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('Exercise.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    return (
        <div className='exercise-wrapper '>
            <div className="exercise-container">
                <h2>Select Your Exercise</h2>
                <div>
                    <h2>Total Items:{items.length}</h2>
                </div>
            </div>
            <div className="exercise-details">
                <h2>Exercise Details</h2>
            </div>
        </div>
    );
};

export default Exercise;