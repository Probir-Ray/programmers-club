import React from 'react';
import './Programmers.css';


const Programmers = props => {
    const {name, website, experienceOfYears, monthlyEarning, image, runningCourse} = props.programmer;
    return (
        <div className="programmer">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>Website: {website}</p>
            <p>experienceOfYears: {experienceOfYears}</p>
            <p>monthlyEarning: {monthlyEarning}</p>
            <p>runningCourse: {runningCourse}</p>
        </div>
    );
};

export default Programmers;