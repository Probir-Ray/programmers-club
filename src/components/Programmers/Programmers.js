import React from 'react';
import './Programmers.css';


const Programmers = props => {
    const {name, website, experienceOfYears, monthlyEarning, image, runningCourse} = props.programmer;
    return (
        <div className="programmer">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>Website: {website}</p>
            <p>Years of Experience: {experienceOfYears}</p>
            <p>Monthly Earning: {monthlyEarning}</p>
            <p>Running Course: {runningCourse}</p>
            <button>Add To Cart</button>
        </div>
    );
};

export default Programmers;