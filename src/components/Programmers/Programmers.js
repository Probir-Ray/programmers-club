import React from 'react';
import './Programmers.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Programmers = props => {
    const {name, website, experienceOfYears, monthlyEarning, image, runningCourse} = props.programmer;
    return (
        <div className="programmer">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>Years of Experience: {experienceOfYears}</p>
            <p>Monthly Earning: $ {monthlyEarning}</p>
            <p>Running Course: {runningCourse}</p>
            <p><a href={website}>Learn More</a></p>
            <button onClick={() => props.onClickHandel(props.programmer)}>
            <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart
            </button>
        </div>
    );
};

export default Programmers;