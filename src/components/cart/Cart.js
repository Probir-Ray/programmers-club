import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let totalAmount = 0;
    for(let programmer of cart) {
        totalAmount += programmer.monthlyEarning;
    }
    return (
        <div>
            <h2>Programmers Count:
                {props.cart.length}
            </h2>
            <h3>Total Amount: {totalAmount}</h3>
            {
                props.cart.map(cartEl => {
                    return (
                        <div className="programmer-in-cart" key={cartEl.id}>
                            <h2>{cartEl.name}</h2>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Cart;