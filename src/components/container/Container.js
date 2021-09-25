import React from 'react';
import './Container.css';

const Container = () => {
    return (
        <div>
            <div className="main-container">
                <div className="programmer-container">
                    <h3>Main</h3>
                </div>
                <div className="cart-container">
                    <h3>Cart</h3>
                </div>
            </div>
        </div>
    );
};

export default Container;