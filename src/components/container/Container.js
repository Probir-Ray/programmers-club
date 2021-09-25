import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Programmers from '../Programmers/Programmers';
import './Container.css';

const Container = () => {
    
    // Declare state for store fetch data
    const [programmers, setProgrammers] = useState([]);

    // Fetch Data from root directory
    useEffect(() => {
        fetch('./club.json').then(res => res.json()).then(data => setProgrammers(data))
    }, []);

    return (
        <div>
            <div className="main-container">
                <div className="programmer-container">
                    <h2>Programmers</h2>
                    <div className="programmers">
                    {
                        programmers.map(programmer => <Programmers key={programmer.id} programmer={programmer}></Programmers>)
                    }
                    </div>
                </div>
                <div className="cart-container">
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Container;