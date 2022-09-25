import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div className="cart-container">
                
            <h3>Order summary</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: $
            {
                cart.reduce((p, c) => p+c.price, 0)
            }
            </p>
        </div>
    );
};

export default Cart;