import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Programmers from '../Programmers/Programmers';
import './Container.css';

const Container = () => {
    
    // Declare state for store fetch data
    const [programmers, setProgrammers] = useState([]);

    // State for cart values
    const [cart, setCart] = useState([]);

    // Fetch Data from root directory
    useEffect(() => {
        fetch('./club.json').then(res => res.json()).then(data => setProgrammers(data))
    }, []);


    // Onclick handel function
    const onClickHandel = programmer => {
        for(let el in programmer) {
            let newArr = [];
            if(!el.id) {
                newArr = [...cart, programmer];
                setCart(newArr);
            } else {
                newArr = [...cart];
            }
        }
    } 

    return (
        <div>
            <div className="main-container">
                <div className="programmer-container">
                    <h2>Programmers</h2>
                    <div className="programmers">
                    {
                        programmers.map(programmer => <Programmers key={programmer.id} programmer={programmer} onClickHandel={onClickHandel}></Programmers>)
                    }
                    </div>
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Container;