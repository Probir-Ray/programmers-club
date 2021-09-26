import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let totalAmount = 0;
    for(let programmer of cart) {
        totalAmount += programmer.monthlyEarning;
    }
    return (
        <div className="cart-area">
            <h2>Programmers Count: {props.cart.length}</h2>
            <h3>Total Amount: {totalAmount}</h3>
            <div className="programmer-in-cart">
            {
                props.cart.map(cartEl => {
                    return (
                            <div className="single-programmer" key={cartEl.id}>
                                <img src={cartEl.image} alt="" />
                                <h3>{cartEl.name}</h3>
                            </div>
                    )
                })
            }
            </div>
        </div>
    );
};

export default Cart;