import React from 'react';
import './ExerciseDetails.css';

const ExerciseDetails = ({ item, handleAddBtn }) => {

    const { title, description, age, time, img } = item;

    return (
        <div className='exercise-item'>
            <img src={img} alt="" />
            <div className='exercise-info'>
                <h4>{title}</h4>
                <p>{description}</p>
                <p>For Age: {age}</p>
                <p>Time Required: {time}s</p>
            </div>
            <button onClick={() => handleAddBtn(item)} className='item-btn'>
                <p>Add To List</p>
            </button>
        </div>
    );
};

export default ExerciseDetails;